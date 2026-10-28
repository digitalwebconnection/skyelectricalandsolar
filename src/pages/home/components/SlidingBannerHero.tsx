import { useState, useEffect, useCallback } from 'react'
import { PixelSwap, type PixelSwapProps } from '../../../components/common/PixelSwap'

export interface BannerSlide {
  id: number
  src: string
  alt: string
}

const BANNER_SLIDES: BannerSlide[] = [
  {
    id: 1,
    src: '/assets/banner/banner-solar-mansion.jpg',
    alt: 'Luxury Architectural Solar Installation'
  },
  {
    id: 2,
    src: '/assets/banner/banner-battery-storage.jpg',
    alt: 'Smart Wall-Mounted Battery Storage & EV Station'
  },
  {
    id: 3,
    src: '/assets/banner/banner-solar-field.jpg',
    alt: 'Commercial Solar Energy Farm at Golden Hour'
  },
  {
    id: 4,
    src: '/assets/banner/banner-electrical-technician.jpg',
    alt: 'Licensed Solar Electrician & Energy Diagnostics'
  }
]

type SwapPattern = NonNullable<PixelSwapProps['pattern']>

const PATTERNS: SwapPattern[] = [
  'diagonal',
  'spiral',
  'random',
  'center',
  'edges',
  'left-to-right',
  'top-to-bottom'
]

const AUTO_SLIDE_DURATION = 4800 // 4.8 seconds per slide

export function SlidingBannerHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [layer0Index, setLayer0Index] = useState(0)
  const [layer1Index, setLayer1Index] = useState(1)
  const [isLayer1Active, setIsLayer1Active] = useState(false)
  const [patternIndex, setPatternIndex] = useState(0)
  const [isSwapping, setIsSwapping] = useState(false)
  const [aspectRatio, setAspectRatio] = useState('21 / 9')
  const [pixelSize, setPixelSize] = useState(36)

  // Preload all banner images into browser cache
  useEffect(() => {
    BANNER_SLIDES.forEach(slide => {
      const img = new Image()
      img.src = slide.src
    })
  }, [])

  // Responsive aspect ratio and pixel size calculation
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setAspectRatio('16 / 10')
        setPixelSize(22)
      } else if (width < 1024) {
        setAspectRatio('16 / 9')
        setPixelSize(30)
      } else {
        setAspectRatio('21 / 9')
        setPixelSize(38)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Core navigation handler with PixelSwap layer management
  const goToSlide = useCallback(
    (targetIndex: number) => {
      if (targetIndex === currentSlide || isSwapping) return

      setIsSwapping(true)
      setCurrentSlide(targetIndex)

      // Cycle patterns
      setPatternIndex(prev => (prev + 1) % PATTERNS.length)

      if (!isLayer1Active) {
        // Layer 0 is currently visible; prepare target on Layer 1 and activate it
        setLayer1Index(targetIndex)
        setIsLayer1Active(true)
      } else {
        // Layer 1 is currently visible; prepare target on Layer 0 and deactivate Layer 1
        setLayer0Index(targetIndex)
        setIsLayer1Active(false)
      }
    },
    [currentSlide, isSwapping, isLayer1Active]
  )

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % BANNER_SLIDES.length)
  }, [currentSlide, goToSlide])

  // Completion callback when PixelSwap finishes its pixel transition
  const handleSwapComplete = useCallback(
    (active: boolean) => {
      setIsSwapping(false)
      if (active) {
        // Layer 1 is now visible; prime Layer 0 with the subsequent slide
        const nextUpcoming = (layer1Index + 1) % BANNER_SLIDES.length
        setLayer0Index(nextUpcoming)
      } else {
        // Layer 0 is now visible; prime Layer 1 with the subsequent slide
        const nextUpcoming = (layer0Index + 1) % BANNER_SLIDES.length
        setLayer1Index(nextUpcoming)
      }
    },
    [layer0Index, layer1Index]
  )

  // Auto-slide animation interval loop
  useEffect(() => {
    const interval = window.setInterval(() => {
      if (!isSwapping) {
        nextSlide()
      }
    }, AUTO_SLIDE_DURATION)

    return () => clearInterval(interval)
  }, [isSwapping, nextSlide])

  return (
    <section
      aria-label="Hero Visual Slider"
      className="relative w-full overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-full max-w-7xl h-72 bg-linear-to-r from-amber-400/15 via-orange-400/10 to-amber-300/15 blur-3xl -z-10" />

      <div>
        <div className="relative group w-full overflow-hidden border border-slate-200/90 shadow-2xl shadow-slate-900/10 bg-slate-950">
          
          {/* React Bits PixelSwap Component */}
          <PixelSwap
            firstContent={
              <img
                src={BANNER_SLIDES[layer0Index].src}
                alt={BANNER_SLIDES[layer0Index].alt}
                className="w-full h-full object-cover select-none pointer-events-none"
                draggable={false}
              />
            }
            secondContent={
              <img
                src={BANNER_SLIDES[layer1Index].src}
                alt={BANNER_SLIDES[layer1Index].alt}
                className="w-full h-full object-cover select-none pointer-events-none"
                draggable={false}
              />
            }
            active={isLayer1Active}
            trigger="none"
            intro={false}
            pattern={PATTERNS[patternIndex]}
            pixelSize={pixelSize}
            pixelRadius={3}
            duration={520}
            pixelDuration={380}
            randomness={0.25}
            bounce={0.2}
            aspectRatio={aspectRatio}
            onComplete={handleSwapComplete}
            className="w-full h-full"
          />

          {/* Bottom subtle dark gradient vignette for depth */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/40 via-black/10 to-transparent z-10" />

        </div>
      </div>
    </section>
  )
}

export default SlidingBannerHero
