import { useEffect, useState } from 'react'

// Returns a HH:MM string in the requested IANA timezone, updated every minute.
export function useClock(tz = 'Europe/Madrid', locale = 'en-GB') {
  const [now, setNow] = useState(() => formatTime(new Date(), tz, locale))

  useEffect(() => {
    const id = setInterval(() => setNow(formatTime(new Date(), tz, locale)), 30_000)
    return () => clearInterval(id)
  }, [tz, locale])

  return now
}

function formatTime(date, tz, locale) {
  try {
    return new Intl.DateTimeFormat(locale, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: tz,
    }).format(date)
  } catch {
    return date.toTimeString().slice(0, 5)
  }
}
