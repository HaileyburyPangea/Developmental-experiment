import assert from "node:assert/strict"
import test from "node:test"
import {
  addMonths, calendarDaysBetween, compareStudyWindows, getTargetDate,
  isCurrentlyRelevant, isStartingNow,
} from "../src/timeline.ts"
import { studies } from "../src/studies.ts"

function localDate(date) {
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()]
}
function targetFor(label, birthDate = "2026-01-01") {
  const study = studies.find((study) => study.age === label)
  assert.ok(study, `Missing study: ${label}`)
  return getTargetDate(birthDate, study.startAge)
}

test("calendar months preserve the day and clamp at month ends", () => {
  assert.deepEqual(localDate(addMonths("2026-01-01", 1)), [2026, 2, 1])
  assert.deepEqual(localDate(addMonths("2026-01-31", 1)), [2026, 2, 28])
  assert.deepEqual(localDate(addMonths("2024-01-31", 1)), [2024, 2, 29])
  assert.deepEqual(localDate(addMonths("2024-02-29", 12)), [2025, 2, 28])
  assert.deepEqual(localDate(addMonths("2026-01-31", -1)), [2025, 12, 31])
})

test("mixed units use explicit starting ages", () => {
  assert.deepEqual(localDate(targetFor("6 months to 2.5 years")), [2026, 7, 1])
  assert.deepEqual(localDate(targetFor("10 days to 3 months")), [2026, 1, 11])
  assert.deepEqual(localDate(targetFor("1 to 2 years")), [2027, 1, 1])
})

test("week and neonatal offsets retain their units", () => {
  assert.deepEqual(localDate(targetFor("6 weeks")), [2026, 2, 12])
  assert.deepEqual(localDate(targetFor("3 months (originally 12 weeks)")), [2026, 4, 1])
  assert.deepEqual(localDate(targetFor("Under 24 hours")), [2026, 1, 1])
  const birth = new Date("2026-01-01T12:00:00")
  assert.equal(targetFor("12 hours").getTime() - birth.getTime(), 12 * 3_600_000)
})

test("prenatal scheduling uses 24 weeks relative to a 40-week due date", () => {
  assert.deepEqual(localDate(targetFor("24 weeks gestation–birth", "2026-07-01")), [2026, 3, 11])
})

test("fractional months and every study produce valid targets", () => {
  assert.deepEqual(localDate(targetFor("2.5 to 8 months")), [2026, 3, 17])
  assert.equal(studies.length, 73)
  for (const study of studies) {
    assert.ok(Number.isFinite(study.startAge.value), study.age)
    assert.ok(["days", "weeks", "months"].includes(study.startAge.unit), study.age)
    const date = getTargetDate("2026-01-31", study.startAge)
    assert.ok(Number.isFinite(date.getTime()), study.age)
  }
})

test("new research entries link to sources and schedule at their starting ages", () => {
  const linkedStudies = studies.filter((study) => study.sourceUrl)
  assert.equal(linkedStudies.length, 10)
  for (const study of linkedStudies) {
    assert.equal(new URL(study.sourceUrl).protocol, "https:")
    assert.ok(study.experiment && study.findings && study.concept, study.name)
    assert.ok(Number.isFinite(getTargetDate("2026-01-01", study.startAge).getTime()))
  }
  assert.deepEqual(localDate(targetFor("2 to 7.25 months")), [2026, 3, 1])
  assert.deepEqual(localDate(targetFor("6 and 9 months")), [2026, 7, 1])
})

test("whole weeks preserve local time across daylight saving transitions", () => {
  const date = getTargetDate("2026-03-01", { value: 6, unit: "weeks" })
  assert.deepEqual(localDate(date), [2026, 4, 12])
  assert.equal(date.getHours(), 12)
})

test("studies are ordered by the end of their window, then by its start", () => {
  const day = (value) => getTargetDate("2026-01-01", { value, unit: "days" })
  const windows = [
    { name: "range 1–10", targetDate: day(1), endDate: day(10) },
    { name: "day 3", targetDate: day(3), endDate: day(3) },
    { name: "range 0–3", targetDate: day(0), endDate: day(3) },
    { name: "range 0–45", targetDate: day(0), endDate: day(45) },
    { name: "day 15", targetDate: day(15), endDate: day(15) },
  ]
  assert.deepEqual(windows.sort(compareStudyWindows).map((item) => item.name), [
    "range 0–3", "day 3", "range 1–10", "day 15", "range 0–45",
  ])
})

test("study windows have valid end dates, including mixed units and prenatal ranges", () => {
  const byAge = (age) => studies.find((study) => study.age === age)
  for (const study of studies) {
    const start = getTargetDate("2026-01-31", study.startAge)
    const end = getTargetDate("2026-01-31", study.endAge ?? study.startAge)
    assert.ok(Number.isFinite(end.getTime()) && end >= start, study.age)
  }
  assert.deepEqual(byAge("10 days to 3 months").endAge, { value: 3, unit: "months" })
  assert.deepEqual(byAge("6 months to 2.5 years").endAge, { value: 30, unit: "months" })
  assert.deepEqual(byAge("24 weeks gestation–birth").endAge, { value: 0, unit: "days" })
  assert.deepEqual(byAge("3 months to 18 weeks (originally 12–18 weeks)").endAge, { value: 18, unit: "weeks" })
  assert.deepEqual(byAge("6 and 9 months").endAge, { value: 9, unit: "months" })
})

test("equal end dates prioritise the earlier starting study", () => {
  const birth = "2026-01-01"
  const selected = [
    studies.find((study) => study.age === "3 months (originally 12 weeks)"),
    studies.find((study) => study.age === "1 to 3 months"),
  ].map((study) => ({
    name: study.age,
    targetDate: getTargetDate(birth, study.startAge),
    endDate: getTargetDate(birth, study.endAge ?? study.startAge),
  }))
  assert.deepEqual(selected.sort(compareStudyWindows).map((study) => study.name), [
    "1 to 3 months", "3 months (originally 12 weeks)",
  ])
  const sameDay = [
    { targetDate: new Date("2026-01-03T12:00:00"), endDate: new Date("2026-01-10T08:00:00") },
    { targetDate: new Date("2026-01-01T12:00:00"), endDate: new Date("2026-01-10T16:00:00") },
  ]
  sameDay.sort(compareStudyWindows)
  assert.equal(sameDay[0].targetDate.getDate(), 1)
})

test("starting now includes the first 14 calendar days and excludes future starts", () => {
  const start = new Date("2026-03-01T12:00:00")
  assert.equal(isStartingNow(start, new Date("2026-02-28T12:00:00")), false)
  assert.equal(isStartingNow(start, start), true)
  assert.equal(isStartingNow(start, new Date("2026-03-14T12:00:00")), true)
  assert.equal(isStartingNow(start, new Date("2026-03-15T12:00:00")), false)
  assert.equal(calendarDaysBetween(start, new Date("2026-03-15T12:00:00")), 14)
})

test("current age windows include both endpoints and long ranges", () => {
  const birth = "2026-01-01"
  const study = studies.find((item) => item.age === "0 to 24 months")
  const start = getTargetDate(birth, study.startAge)
  const end = getTargetDate(birth, study.endAge)
  assert.equal(isStartingNow(start, start), true)
  assert.equal(isCurrentlyRelevant(start, end, start), true)
  assert.equal(isCurrentlyRelevant(start, end, new Date("2027-01-01T12:00:00")), true)
  assert.equal(isCurrentlyRelevant(start, end, end), true)
  assert.equal(isCurrentlyRelevant(start, end, new Date("2028-01-02T12:00:00")), false)
  assert.equal(isCurrentlyRelevant(start, end, new Date("2025-12-31T12:00:00")), false)
})

