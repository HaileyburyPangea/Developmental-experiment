import assert from "node:assert/strict"
import test from "node:test"
import { addMonths, getTargetDate } from "../src/timeline.ts"
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
  assert.deepEqual(localDate(targetFor("12 weeks (3 months)")), [2026, 3, 26])
  assert.deepEqual(localDate(targetFor("Under 24 hours")), [2026, 1, 1])
  const birth = new Date("2026-01-01T12:00:00")
  assert.equal(targetFor("12 hours").getTime() - birth.getTime(), 12 * 3_600_000)
})

test("prenatal scheduling uses 24 weeks relative to a 40-week due date", () => {
  assert.deepEqual(localDate(targetFor("24 weeks gestation–birth", "2026-07-01")), [2026, 3, 11])
})

test("fractional months and every study produce valid targets", () => {
  assert.deepEqual(localDate(targetFor("2.5 to 8 months")), [2026, 3, 17])
  assert.equal(studies.length, 63)
  for (const study of studies) {
    assert.ok(Number.isFinite(study.startAge.value), study.age)
    assert.ok(["days", "weeks", "months"].includes(study.startAge.unit), study.age)
    const date = getTargetDate("2026-01-31", study.startAge)
    assert.ok(Number.isFinite(date.getTime()), study.age)
  }
})

test("whole weeks preserve local time across daylight saving transitions", () => {
  const date = getTargetDate("2026-03-01", { value: 6, unit: "weeks" })
  assert.deepEqual(localDate(date), [2026, 4, 12])
  assert.equal(date.getHours(), 12)
})
