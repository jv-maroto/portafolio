import { useCallback, useSyncExternalStore } from 'react'

const STORAGE_KEY = 'jm-portafolio-theme'

const getInitial = () => {
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'dark' || stored === 'light') return stored
  return 'dark'
}

// Module-level shared state so every consumer (Header, ProjectCard, etc.)
// sees the same theme without prop-drilling or context.
let theme = getInitial()
const listeners = new Set()

const applyTheme = (next) => {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  if (next === 'dark') {
    root.classList.add('dark')
    root.classList.remove('light')
  } else {
    root.classList.remove('dark')
    root.classList.add('light')
  }
}

const setTheme = (next) => {
  if (theme === next) return
  theme = next
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, next)
  }
  applyTheme(next)
  listeners.forEach((l) => l())
}

// Apply once at module load so SSR-safe and pre-paint.
applyTheme(theme)

const subscribe = (listener) => {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

const getSnapshot = () => theme
const getServerSnapshot = () => 'dark'

export function useTheme() {
  const current = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const toggle = useCallback(() => {
    setTheme(current === 'dark' ? 'light' : 'dark')
  }, [current])

  return { theme: current, toggle, isDark: current === 'dark' }
}
