export type LocalClockEnvironment = {
  now: () => Date
  setTimeout: (callback: () => void, delay: number) => number
  clearTimeout: (id: number) => void
  setInterval: (callback: () => void, delay: number) => number
  clearInterval: (id: number) => void
  addFocusListener: (callback: () => void) => void
  removeFocusListener: (callback: () => void) => void
  addVisibilityListener: (callback: () => void) => void
  removeVisibilityListener: (callback: () => void) => void
}

export function localDateString(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`
}

export function millisecondsUntilNextLocalDay(now: Date): number {
  const next = new Date(now)
  next.setHours(24, 0, 0, 0)
  return Math.max(1, next.getTime() - now.getTime())
}

function browserClockEnvironment(): LocalClockEnvironment {
  return {
    now: () => new Date(),
    setTimeout: (callback, delay) => window.setTimeout(callback, delay),
    clearTimeout: (id) => window.clearTimeout(id),
    setInterval: (callback, delay) => window.setInterval(callback, delay),
    clearInterval: (id) => window.clearInterval(id),
    addFocusListener: (callback) => window.addEventListener("focus", callback),
    removeFocusListener: (callback) => window.removeEventListener("focus", callback),
    addVisibilityListener: (callback) => document.addEventListener("visibilitychange", callback),
    removeVisibilityListener: (callback) => document.removeEventListener("visibilitychange", callback),
  }
}

/** Refresh at local midnight and on return to the page. Polling detects clock/zone changes. */
export function subscribeToLocalDate(
  onChange: (now: Date) => void,
  environment: LocalClockEnvironment = browserClockEnvironment(),
): () => void {
  let stopped = false
  let midnightTimer: number | undefined
  let previous = ""
  const refresh = () => {
    if (stopped) return
    const now = environment.now()
    const signature = `${localDateString(now)}:${now.getTimezoneOffset()}`
    if (signature !== previous) {
      previous = signature
      onChange(now)
    }
    if (midnightTimer !== undefined) environment.clearTimeout(midnightTimer)
    midnightTimer = environment.setTimeout(refresh, millisecondsUntilNextLocalDay(now))
  }
  refresh()
  const pollTimer = environment.setInterval(refresh, 60_000)
  environment.addFocusListener(refresh)
  environment.addVisibilityListener(refresh)
  return () => {
    stopped = true
    if (midnightTimer !== undefined) environment.clearTimeout(midnightTimer)
    environment.clearInterval(pollTimer)
    environment.removeFocusListener(refresh)
    environment.removeVisibilityListener(refresh)
  }
}
