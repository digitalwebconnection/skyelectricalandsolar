import { useState, useEffect } from 'react'

const COMPANY_NAME = 'Skye Electrical & Solar'

export interface WebsiteLoaderProps {
  minDuration?: number // Minimum time to show loader in ms
  onComplete?: () => void
}

export function WebsiteLoader({
  minDuration = 1800,
  onComplete,
}: WebsiteLoaderProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isFading, setIsFading] = useState(false)
  const [displayedText, setDisplayedText] = useState('')

  // 1. Auto-dismiss Timer after minimum duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true)
      const exitTimer = setTimeout(() => {
        setIsVisible(false)
        onComplete?.()
      }, 600)
      return () => clearTimeout(exitTimer)
    }, minDuration)

    return () => clearTimeout(timer)
  }, [minDuration, onComplete])

  // 2. Character-by-Character Typewriter Animation for the Name
  useEffect(() => {
    if (displayedText.length < COMPANY_NAME.length) {
      const typingTimer = setTimeout(() => {
        setDisplayedText(COMPANY_NAME.substring(0, displayedText.length + 1))
      }, 55)
      return () => clearTimeout(typingTimer)
    }
  }, [displayedText])

  if (!isVisible) return null

  return (
    <div
      aria-label="Loading Website"
      role="status"
      className={`fixed inset-0 z-99999 flex flex-col items-center justify-center bg-white transition-opacity duration-600 ease-out select-none ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Subtle Warm Solar Ambient Glow in Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-linear-to-b from-amber-400/10 via-orange-400/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
        {/* 3D Gyroscope Orbital Spinner */}
        <div className="relative flex items-center justify-center">
          <div className="gyro-loader" />
          <div className="absolute h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
        </div>

        {/* Name Typing Animation with Modern Monospace / Editorial Typography */}
        <div className="min-h-8 flex items-center justify-center">
          <div className="font-mono text-sm sm:text-base uppercase tracking-[0.22em] font-extrabold text-slate-900 flex items-center">
            <span>{displayedText}</span>
            <span className="inline-block w-1.5 h-4 sm:h-5 ml-1.5 bg-amber-500 animate-blink rounded-xs shadow-[0_0_6px_rgba(245,158,11,0.4)]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebsiteLoader
