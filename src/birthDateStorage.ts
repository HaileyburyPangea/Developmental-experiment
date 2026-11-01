export const BIRTH_DATE_STORAGE_KEY = "developmental-calendar.birthDate"

export type BirthDateStorage = Pick<Storage, "getItem" | "setItem" | "removeItem">

/** Strict YYYY-MM-DD validation, without UTC parsing or rollover of bad dates. */
export function isValidBirthDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const [year, month, day] = value.split("-").map(Number)
  if (year < 1 || month < 1 || month > 12 || day < 1) return false
  const leapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
  const daysInMonth = [31, leapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  return day <= daysInMonth[month - 1]
}

/** Accessing localStorage itself can throw when browser storage is blocked. */
export function getBirthDateStorage(): BirthDateStorage | null {
  try {
    return typeof window === "undefined" ? null : window.localStorage
  } catch {
    return null
  }
}

export function clearBirthDate(storage: BirthDateStorage | null = getBirthDateStorage()): boolean {
  try {
    if (!storage) return false
    storage.removeItem(BIRTH_DATE_STORAGE_KEY)
    return true
  } catch {
    return false
  }
}

/** Fall back to the caller's default when saved data is missing or unusable. */
export function loadBirthDate(
  fallback: string,
  storage: BirthDateStorage | null = getBirthDateStorage(),
): string {
  try {
    const saved = storage?.getItem(BIRTH_DATE_STORAGE_KEY)
    if (saved && isValidBirthDate(saved)) return saved
    if (saved !== null && saved !== undefined) clearBirthDate(storage)
  } catch {
    // A storage failure must not prevent entering a date in the current session.
  }
  return fallback
}

/** Empty input removes the saved date; invalid input never replaces a valid one. */
export function saveBirthDate(
  value: string,
  storage: BirthDateStorage | null = getBirthDateStorage(),
): boolean {
  if (value === "") return clearBirthDate(storage)
  if (!isValidBirthDate(value)) return false
  try {
    if (!storage) return false
    storage.setItem(BIRTH_DATE_STORAGE_KEY, value)
    return true
  } catch {
    return false
  }
}
