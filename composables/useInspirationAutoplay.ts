import { ref, onMounted, onUnmounted } from 'vue'

export interface AutoplayOptions {
  total: number
  initialIndex?: number
  duration?: number
  tickInterval?: number
  onNavigate?: (newIndex: number, direction: number) => void
}

export function useInspirationAutoplay(options: AutoplayOptions) {
  const {
    total,
    initialIndex = 1,
    duration = 5500,
    tickInterval = 50,
    onNavigate
  } = options

  const currentIndex = ref(initialIndex)
  const progress = ref(0)
  const isPaused = ref(false)

  let autoplayTimer: ReturnType<typeof setInterval> | null = null
  let touchStartX = 0

  const navigateTo = (newIndex: number, dir: number) => {
    if (newIndex === currentIndex.value) return
    currentIndex.value = newIndex
    progress.value = 0
    onNavigate?.(newIndex, dir)
  }

  const nextSlide = () => navigateTo((currentIndex.value + 1) % total, 1)
  const prevSlide = () => navigateTo((currentIndex.value - 1 + total) % total, -1)
  const goToSlide = (index: number) => navigateTo(index, index > currentIndex.value ? 1 : -1)

  const pauseAutoplay = () => { isPaused.value = true }
  const resumeAutoplay = () => { isPaused.value = false }

  const startAutoplay = () => {
    if (!import.meta.client) return
    stopAutoplay()
    autoplayTimer = setInterval(() => {
      if (isPaused.value) return
      progress.value += (tickInterval / duration) * 100
      if (progress.value >= 100) {
        nextSlide()
      }
    }, tickInterval)
  }

  const stopAutoplay = () => {
    if (autoplayTimer) {
      clearInterval(autoplayTimer)
      autoplayTimer = null
    }
  }

  const onTouchStart = (e: TouchEvent) => {
    pauseAutoplay()
    if (e.changedTouches?.[0]) touchStartX = e.changedTouches[0].clientX
  }

  const onTouchEnd = (e: TouchEvent) => {
    resumeAutoplay()
    if (!e.changedTouches?.[0]) return
    const diff = e.changedTouches[0].clientX - touchStartX
    if (diff > 45) prevSlide()
    else if (diff < -45) nextSlide()
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextSlide()
    if (e.key === 'ArrowLeft') prevSlide()
  }

  onMounted(() => {
    if (import.meta.client) {
      window.addEventListener('keydown', onKeyDown)
      startAutoplay()
    }
  })

  onUnmounted(() => {
    if (import.meta.client) {
      window.removeEventListener('keydown', onKeyDown)
      stopAutoplay()
    }
  })

  return {
    currentIndex,
    progress,
    isPaused,
    nextSlide,
    prevSlide,
    goToSlide,
    pauseAutoplay,
    resumeAutoplay,
    onTouchStart,
    onTouchEnd
  }
}
