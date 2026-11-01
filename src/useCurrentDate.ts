import { useEffect, useState } from "react"
import { subscribeToLocalDate } from "./localClock"

/** Changes when the browser's local day or timezone offset changes. */
export function useCurrentDate(): Date {
  const [currentDate, setCurrentDate] = useState(() => new Date())
  useEffect(() => subscribeToLocalDate(setCurrentDate), [])
  return currentDate
}
