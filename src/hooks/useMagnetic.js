import { useCallback, useRef } from 'react'

// Pulls the element toward the cursor a tiny amount. Used on CTAs.
export function useMagnetic({ strength = 0.35 } = {}) {
  const ref = useRef(null)
  const rafRef = useRef(0)

  const onMove = useCallback(
    (e) => {
      const el = ref.current
      if (!el) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) * strength
      const dy = (e.clientY - cy) * strength
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${dx.toFixed(2)}px, ${dy.toFixed(2)}px, 0)`
      })
    },
    [strength],
  )

  const onLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    cancelAnimationFrame(rafRef.current)
    el.style.transform = 'translate3d(0,0,0)'
  }, [])

  return { ref, onMove, onLeave }
}
