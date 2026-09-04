import { useCallback, useSyncExternalStore } from 'react'

const STORAGE_KEY = 'jm-portafolio-theme'
const THEME_COLOR = { dark: '#1a1e23', light: '#f1f2f0' }

// Oscuro por defecto; la clase .light activa la alternativa.
const getInitial = () => {
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'dark' || stored === 'light' ? stored : 'dark'
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
  if (typeof window !== 'undefined') window.localStorage.setItem(STORAGE_KEY, next)

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
const getServerSnapshot = () => 'dark'

export function useTheme() {
  const current = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const toggle = useCallback(() => setTheme(current === 'dark' ? 'light' : 'dark'), [current])
  return { theme: current, toggle, isDark: current === 'dark' }
}
