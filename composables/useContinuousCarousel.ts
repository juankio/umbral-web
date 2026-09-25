import { ref, onMounted, onBeforeUnmount, nextTick, type Ref } from 'vue'

export interface CarouselOptions {
  itemCount: Ref<number> | (() => number)
  defaultStepWidth?: number
  speed?: number
  lerpFactor?: number
}

export function useContinuousCarousel(options: CarouselOptions) {
  const trackRef = ref<HTMLElement | null>(null)
  const isHovered = ref(false)
  const isDragging = ref(false)

  const defaultStepWidth = options.defaultStepWidth ?? 400
  const speed = options.speed ?? 0.5
  const lerpFactor = options.lerpFactor ?? 0.08

  let currentX = 0
  let targetX = 0
  let singleSetWidth = 0
  let animFrameId: number | null = null
  let resizeObserver: ResizeObserver | null = null

  let startPointerX = 0
  let dragStartX = 0
  let didDrag = false

  const getCount = () => {
    return typeof options.itemCount === 'function' ? options.itemCount() : options.itemCount.value
  }

  const updateDimensions = () => {
    if (!trackRef.value) return
    const n = getCount()
    if (!n) return
    const cards = trackRef.value.children
    if (cards.length > n && cards[n] instanceof HTMLElement && cards[0] instanceof HTMLElement) {
      const calculatedWidth = (cards[n] as HTMLElement).offsetLeft - (cards[0] as HTMLElement).offsetLeft
      if (calculatedWidth > 0) {
        singleSetWidth = calculatedWidth
      }
    }
  }

  const getStepWidth = () => {
    const n = getCount()
    if (singleSetWidth > 0 && n) {
      return singleSetWidth / n
    }
    return defaultStepWidth
  }

  const prevSlide = () => {
    targetX -= getStepWidth()
  }

  const nextSlide = () => {
    targetX += getStepWidth()
  }

  const onPointerDown = (e: PointerEvent) => {
    isDragging.value = true
    didDrag = false
    startPointerX = e.clientX
    dragStartX = currentX
  }

  const onPointerMove = (e: PointerEvent) => {
    if (!isDragging.value) return
    const diff = e.clientX - startPointerX
    if (Math.abs(diff) > 5) {
      didDrag = true
    }
    currentX = dragStartX - diff
    targetX = currentX
  }

  const onPointerUp = () => {
    if (!isDragging.value) return
    isDragging.value = false
  }

  const onMouseLeave = () => {
    isHovered.value = false
    if (isDragging.value) {
      isDragging.value = false
    }
  }

  const handleLinkClick = (e: MouseEvent) => {
    if (didDrag) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  const loop = () => {
    if (singleSetWidth > 0) {
      const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!isHovered.value && !isDragging.value && !prefersReducedMotion) {
        targetX += speed
      }

      if (!isDragging.value) {
        currentX += (targetX - currentX) * lerpFactor
      }

      if (currentX >= singleSetWidth) {
        currentX -= singleSetWidth
        targetX -= singleSetWidth
      } else if (currentX < 0) {
        currentX += singleSetWidth
        targetX += singleSetWidth
      }

      if (trackRef.value) {
        trackRef.value.style.transform = `translate3d(${-currentX}px, 0, 0)`
      }
    }

    animFrameId = requestAnimationFrame(loop)
  }

  onMounted(() => {
    nextTick(() => {
      updateDimensions()
      animFrameId = requestAnimationFrame(loop)

      if (typeof ResizeObserver !== 'undefined' && trackRef.value) {
        resizeObserver = new ResizeObserver(() => {
          updateDimensions()
        })
        resizeObserver.observe(trackRef.value)
      }
    })
  })

  onBeforeUnmount(() => {
    if (animFrameId) {
      cancelAnimationFrame(animFrameId)
    }
    if (resizeObserver) {
      resizeObserver.disconnect()
    }
  })

  return {
    trackRef,
    isHovered,
    isDragging,
    prevSlide,
    nextSlide,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onMouseLeave,
    handleLinkClick
  }
}
