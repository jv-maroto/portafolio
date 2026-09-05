import { useCallback, useSyncExternalStore } from 'react'

const STORAGE_KEY = 'jm-portafolio-theme'
const THEME_COLOR = { dark: '#182c28', light: '#fafcf6' }

// Spring daylight by default; keep an existing explicit preference.
const getInitial = () => {
  if (typeof window === 'undefined') return 'light'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === 'dark' || stored === 'light' ? stored : 'light'
  } catch { return 'light' }
}

let theme = getInitial()
const listeners = new Set()

const applyTheme = (next) => {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('light', next === 'light')
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', THEME_COLOR[next])
}

const reducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const setTheme = (next) => {
  if (theme === next) return
  theme = next
  try { window.localStorage.setItem(STORAGE_KEY, next) } catch { /* Storage may be disabled. */ }

  const swap = () => {
    applyTheme(next)
    listeners.forEach((l) => l())
  }
  // Fundido nativo entre temas cuando el navegador lo soporta.
  if (document.startViewTransition && !reducedMotion()) {
    document.startViewTransition(swap)
  } else {
    swap()
  }
}

applyTheme(theme)

const subscribe = (listener) => {
  listeners.add(listener)
  return () => listeners.delete(listener)
}
const getSnapshot = () => theme
const getServerSnapshot = () => 'light'

export function useTheme() {
  const current = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const toggle = useCallback(() => setTheme(current === 'dark' ? 'light' : 'dark'), [current])
  return { theme: current, toggle, isDark: current === 'dark' }
}
