import { useCallback, useRef } from 'react'

// Lightweight tilt-on-hover. Avoids extra deps and respects reduced motion.
// Usage:
//   const tilt = useTilt({ max: 8, scale: 1.015 })
//   <div ref={tilt.ref} onMouseMove={tilt.onMove} onMouseLeave={tilt.onLeave} ... />
export function useTilt({ max = 8, scale = 1.0, perspective = 900 } = {}) {
  const ref = useRef(null)
  const rafRef = useRef(0)
  const pendingRef = useRef({ rx: 0, ry: 0, tx: 0, ty: 0 })

  const apply = useCallback(() => {
    if (!ref.current) return
    const { rx, ry, tx, ty } = pendingRef.current
    ref.current.style.transform =
      `perspective(${perspective}px) rotateX(${rx.toFixed(3)}deg) rotateY(${ry.toFixed(3)}deg) translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0) scale(${scale})`
  }, [perspective, scale])

  const onMove = useCallback(
    (e) => {
      if (!ref.current) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const rect = ref.current.getBoundingClientRect()
      const cx = e.clientX - rect.left
      const cy = e.clientY - rect.top
      const px = cx / rect.width - 0.5
      const py = cy / rect.height - 0.5
      pendingRef.current = {
        rx: -py * max,
        ry: px * max,
        tx: px * 4,
        ty: py * 4,
      }
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(apply)
    },
    [apply, max],
  )

  const onLeave = useCallback(() => {
    if (!ref.current) return
    cancelAnimationFrame(rafRef.current)
    pendingRef.current = { rx: 0, ry: 0, tx: 0, ty: 0 }
    ref.current.style.transform = `perspective(${perspective}px) rotateX(0) rotateY(0) translate3d(0,0,0) scale(1)`
  }, [perspective])

  return { ref, onMove, onLeave }
}
