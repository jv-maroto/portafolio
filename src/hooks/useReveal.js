import { useEffect } from 'react'

// Adds `is-in` class to elements with `.reveal` once they intersect.
export function useReveal({ selector = '.reveal', threshold = 0.12 } = {}) {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const els = document.querySelectorAll(selector)
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [selector, threshold])
}
