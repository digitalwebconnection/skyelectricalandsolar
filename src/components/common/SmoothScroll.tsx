import { useEffect, useRef, createContext, useContext, type ReactNode } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

interface SmoothScrollContextType {
  lenis: Lenis | null
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({ lenis: null })

export const useSmoothScroll = () => useContext(SmoothScrollContext)

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // exponential ease-out curve
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.25,
      infinite: false,
    })

    lenisRef.current = lenis
    ;(window as unknown as { lenis: Lenis }).lenis = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const animFrame = requestAnimationFrame(raf)

    // Smooth anchor navigation for all in-page hash links
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (href && href.startsWith('#') && href.length > 1) {
        const targetElement = document.querySelector(href)
        if (targetElement) {
          e.preventDefault()
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -80,
            duration: 1.2,
          })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick, { capture: true })

    return () => {
      cancelAnimationFrame(animFrame)
      document.removeEventListener('click', handleAnchorClick, { capture: true })
      lenis.destroy()
      lenisRef.current = null
      delete (window as unknown as { lenis?: Lenis }).lenis
    }
  }, [])

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </SmoothScrollContext.Provider>
  )
}

export default SmoothScrollProvider

