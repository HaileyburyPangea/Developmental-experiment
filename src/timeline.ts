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
