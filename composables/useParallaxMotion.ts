import { onMounted, onUnmounted, watch, type Ref } from 'vue'

export function useParallaxMotion(
  targetRef: Ref<HTMLElement | null>,
  speed = 0.06,
  maxOffset = 30
) {
  let rafId: number | null = null
  let initialTop = 0
  let isVisible = false
  let observer: IntersectionObserver | null = null

  const isReducedMotion = (): boolean => {
    if (!import.meta.client) return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  const updatePosition = () => {
    rafId = null
    if (!import.meta.client || isReducedMotion() || !targetRef.value || !isVisible) return

    const scrollY = window.scrollY
    const offset = Math.max(-maxOffset, Math.min(maxOffset, (scrollY - initialTop) * speed))
    targetRef.value.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`
  }

  const onScroll = () => {
    if (!import.meta.client || isReducedMotion() || !isVisible || !targetRef.value) return
    if (rafId === null) {
      rafId = requestAnimationFrame(updatePosition)
    }
  }

  const measureInitialPosition = () => {
    if (!targetRef.value) return
    const rect = targetRef.value.getBoundingClientRect()
    initialTop = rect.top + window.scrollY
  }

  const onResize = () => {
    if (!import.meta.client || isReducedMotion() || !targetRef.value) return
    measureInitialPosition()
    if (isVisible && rafId === null) {
      rafId = requestAnimationFrame(updatePosition)
    }
  }

  const cleanup = () => {
    if (!import.meta.client) return

    if (rafId !== null) {
      cancelAnimationFrame(rafId)
      rafId = null
    }

    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onResize)

    if (observer) {
      observer.disconnect()
      observer = null
    }
  }

  onMounted(() => {
    if (!import.meta.client || isReducedMotion()) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting
          if (isVisible) {
            measureInitialPosition()
            if (rafId === null) {
              rafId = requestAnimationFrame(updatePosition)
            }
          } else if (rafId !== null) {
            cancelAnimationFrame(rafId)
            rafId = null
          }
        })
      },
      { rootMargin: '150px' }
    )

    if (targetRef.value) {
      measureInitialPosition()
      observer.observe(targetRef.value)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })
  })

  watch(
    targetRef,
    (newEl, oldEl) => {
      if (!import.meta.client || isReducedMotion() || !observer) return
      if (oldEl) observer.unobserve(oldEl)
      if (newEl) {
        measureInitialPosition()
        observer.observe(newEl)
      }
    },
    { flush: 'post' }
  )

  onUnmounted(() => {
    cleanup()
  })

  return {
    cleanup
  }
}

