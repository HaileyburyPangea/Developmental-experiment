import assert from "node:assert/strict"
import test from "node:test"
import {
  BIRTH_DATE_STORAGE_KEY, clearBirthDate, getBirthDateStorage,
  isValidBirthDate, loadBirthDate, saveBirthDate,
} from "../src/birthDateStorage.ts"

function memoryStorage() {
  const values = new Map()
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
    removeItem: (key) => values.delete(key),
  }
}

test("saved birth date survives reload and can be replaced or cleared", () => {
  const storage = memoryStorage()
  const fallback = "2026-05-01"
  assert.equal(loadBirthDate(fallback, storage), fallback)
  assert.equal(saveBirthDate("2026-01-31", storage), true)
  assert.equal(loadBirthDate(fallback, storage), "2026-01-31")
  assert.equal(saveBirthDate("2024-02-29", storage), true)
  assert.equal(loadBirthDate(fallback, storage), "2024-02-29")
  assert.equal(saveBirthDate("", storage), true)
  assert.equal(storage.getItem(BIRTH_DATE_STORAGE_KEY), null)
  assert.equal(loadBirthDate(fallback, storage), fallback)
})

test("strict validation rejects malformed and impossible dates", () => {
  for (const value of ["2026-2-01", "2026-02-30", "2025-02-29", "1900-02-29", "2026-13-01", "2026-00-01", "2026-01-00", "0000-01-01", "2026-01-01T12:00:00", "garbage", ""]) {
    assert.equal(isValidBirthDate(value), false, value)
  }
  for (const value of ["2024-02-29", "2000-02-29", "2026-01-31", "0001-01-01"]) {
    assert.equal(isValidBirthDate(value), true, value)
  }
  const storage = memoryStorage()
  saveBirthDate("2026-01-01", storage)
  assert.equal(saveBirthDate("2026-02-30", storage), false)
  assert.equal(loadBirthDate("2026-05-01", storage), "2026-01-01")
})

test("invalid saved data is removed and replaced with the caller's fallback", () => {
  const storage = memoryStorage()
  storage.setItem(BIRTH_DATE_STORAGE_KEY, "2026-02-31")
  assert.equal(loadBirthDate("2026-05-01", storage), "2026-05-01")
  assert.equal(storage.getItem(BIRTH_DATE_STORAGE_KEY), null)
})

test("unavailable storage and browser failures do not break the current session", () => {
  const blocked = {
    getItem() { throw new Error("blocked") },
    setItem() { throw new Error("blocked") },
    removeItem() { throw new Error("blocked") },
  }
  for (const storage of [null, blocked]) {
    assert.equal(loadBirthDate("2026-05-01", storage), "2026-05-01")
    assert.equal(saveBirthDate("2026-01-01", storage), false)
    assert.equal(clearBirthDate(storage), false)
  }
  assert.equal(getBirthDateStorage(), null)
})

test("blocked localStorage property access is handled safely", () => {
  const previous = Object.getOwnPropertyDescriptor(globalThis, "window")
  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: { get localStorage() { throw new Error("blocked") } },
  })
  try {
    assert.equal(getBirthDateStorage(), null)
    assert.equal(loadBirthDate("2026-05-01"), "2026-05-01")
    assert.equal(saveBirthDate("2026-01-01"), false)
  } finally {
    if (previous) Object.defineProperty(globalThis, "window", previous)
    else delete globalThis.window
  }
})
