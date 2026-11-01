export type StartAge = {
  value: number
  unit: "days" | "weeks" | "months"
}

/** Add calendar months, clamping to the final day of shorter months.
 * Fractional months use the length of the destination calendar month.
 */
export function addMonths(dateString: string, months: number): Date {
  const date = new Date(`${dateString}T12:00:00`)
  const wholeMonths = Math.trunc(months)
  const day = date.getDate()
  date.setDate(1)
  date.setMonth(date.getMonth() + wholeMonths)
  const lastDay = new Date(
    date.getFullYear(), date.getMonth() + 1, 0, 12,
  ).getDate()
  date.setDate(Math.min(day, lastDay))
  date.setDate(date.getDate() + Math.round((months - wholeMonths) * lastDay))
  return date
}

/** Weeks and days are relative to birth; prenatal ages use negative offsets. */
export function getTargetDate(dateString: string, age: StartAge): Date {
  if (age.unit === "months") return addMonths(dateString, age.value)
  const date = new Date(`${dateString}T12:00:00`)
  const days = age.unit === "weeks" ? age.value * 7 : age.value
  const wholeDays = Math.trunc(days)
  date.setDate(date.getDate() + wholeDays)
  date.setTime(date.getTime() + (days - wholeDays) * 86_400_000)
  return date
}

/** Order windows by their end, then by their start, keeping exact ties stable. */
export function compareStudyWindows(
  a: { targetDate: Date; endDate: Date },
  b: { targetDate: Date; endDate: Date },
): number {
  return calendarDaysBetween(b.endDate, a.endDate)
    || a.targetDate.getTime() - b.targetDate.getTime()
}

/** Compare local calendar dates without daylight-saving time shifts. */
export function calendarDaysBetween(from: Date, to: Date): number {
  const dayNumber = (date: Date) =>
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86_400_000
  return dayNumber(to) - dayNumber(from)
}

/** Highlight up to 14 calendar days after the start, only while the window is open. */
export function isStartingNow(start: Date, end: Date, today: Date): boolean {
  const daysSinceStart = calendarDaysBetween(start, today)
  return daysSinceStart >= 0 && daysSinceStart < 14 && isUpcoming(end, today)
}

/** Date-only input uses inclusive local calendar days, with no expiry grace period. */
export function isUpcoming(end: Date, today: Date): boolean {
  return calendarDaysBetween(today, end) >= 0
}

/** Include both boundary dates in the current age window. */
export function isCurrentlyRelevant(start: Date, end: Date, today: Date): boolean {
  return calendarDaysBetween(start, today) >= 0
    && isUpcoming(end, today)
}

