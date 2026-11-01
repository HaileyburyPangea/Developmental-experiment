import assert from "node:assert/strict"
import test from "node:test"
import { localDateString, millisecondsUntilNextLocalDay, subscribeToLocalDate } from "../src/localClock.ts"

function fakeClock(initial) {
  let now = initial
  let nextId = 0
  const timers = new Map()
  const intervals = new Map()
  const focus = new Set()
  const visibility = new Set()
  return {
    timers, intervals, focus, visibility,
    setNow: (value) => { now = value },
    environment: {
      now: () => now,
      setTimeout: (callback, delay) => { const id = ++nextId; timers.set(id, { callback, delay }); return id },
      clearTimeout: (id) => timers.delete(id),
      setInterval: (callback, delay) => { const id = ++nextId; intervals.set(id, { callback, delay }); return id },
      clearInterval: (id) => intervals.delete(id),
      addFocusListener: (callback) => focus.add(callback),
      removeFocusListener: (callback) => focus.delete(callback),
      addVisibilityListener: (callback) => visibility.add(callback),
      removeVisibilityListener: (callback) => visibility.delete(callback),
    },
  }
}

test("local date follows local midnight, including days with daylight saving changes", () => {
  for (const day of ["2026-04-05", "2026-10-04"]) {
    const now = new Date(`${day}T00:00:00`)
    const next = new Date(now)
    next.setDate(next.getDate() + 1)
    assert.equal(millisecondsUntilNextLocalDay(now), next.getTime() - now.getTime())
    assert.equal(localDateString(now), day)
  }
})

test("clock refreshes at midnight, on foreground events and clock changes, and cleans up", () => {
  const clock = fakeClock(new Date("2026-10-31T23:59:59"))
  const values = []
  const stop = subscribeToLocalDate((now) => values.push(localDateString(now)), clock.environment)
  assert.deepEqual(values, ["2026-10-31"])
  assert.equal([...clock.timers.values()][0].delay, 1000)
  clock.setNow(new Date("2026-11-01T00:00:00"))
  ;[...clock.timers.values()][0].callback()
  assert.deepEqual(values, ["2026-10-31", "2026-11-01"])
  clock.setNow(new Date("2026-11-03T15:00:00"))
  ;[...clock.focus][0]()
  assert.equal(values.at(-1), "2026-11-03")
  clock.setNow(new Date("2026-11-04T10:00:00"))
  ;[...clock.visibility][0]()
  assert.equal(values.at(-1), "2026-11-04")
  clock.setNow(new Date("2026-11-02T10:00:00"))
  ;[...clock.intervals.values()][0].callback()
  assert.equal(values.at(-1), "2026-11-02")
  const lateCallback = [...clock.timers.values()][0].callback
  stop()
  assert.equal(clock.timers.size + clock.intervals.size + clock.focus.size + clock.visibility.size, 0)
  lateCallback()
  assert.equal(values.at(-1), "2026-11-02")
})

test("an offset change on the same local date triggers recalculation", () => {
  const clock = fakeClock(new Date("2026-11-01T10:00:00"))
  let calls = 0
  const stop = subscribeToLocalDate(() => calls++, clock.environment)
  const differentZone = new Date("2026-11-01T10:00:00")
  differentZone.getTimezoneOffset = () => 123
  clock.setNow(differentZone)
  ;[...clock.focus][0]()
  assert.equal(calls, 2)
  stop()
})
