import { onMounted, onUnmounted, watch, type Ref } from 'vue'

export const isTouchOrMobileOrReduced = (): boolean => {
  if (typeof window === 'undefined') return true
  if (typeof import.meta !== 'undefined' && import.meta.client === false) return true
  if (window.innerWidth < 1024) return true
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return true
  return false
}

export function useParallaxMotion(
  targetRef: Ref<HTMLElement | null>,
  speed = 0.06,
  maxOffset = 30
) {
  let rafId: number | null = null
  let initialTop = 0
  let isVisible = false
  let observer: IntersectionObserver | null = null
  let isActive = false

  const updatePosition = () => {
    rafId = null
    if (!import.meta.client || isTouchOrMobileOrReduced() || !targetRef.value || !isVisible) return

    const scrollY = window.scrollY
    const offset = Math.max(-maxOffset, Math.min(maxOffset, (scrollY - initialTop) * speed))
    targetRef.value.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`
  }

  const onScroll = () => {
    if (!isActive || !isVisible || !targetRef.value) return
    if (rafId === null) {
      rafId = requestAnimationFrame(updatePosition)
    }
  }

  const measureInitialPosition = () => {
    if (!targetRef.value) return
    const rect = targetRef.value.getBoundingClientRect()
    initialTop = rect.top + window.scrollY
  }

  const teardownParallax = () => {
    if (rafId !== null) {
      cancelAnimationFrame(rafId)
      rafId = null
    }
    if (observer) {
      observer.disconnect()
      observer = null
    }
    window.removeEventListener('scroll', onScroll)
    isActive = false
    isVisible = false
    if (targetRef.value) {
      targetRef.value.style.transform = ''
    }
  }

  const setupParallax = () => {
    if (!import.meta.client || isTouchOrMobileOrReduced() || !targetRef.value) {
      teardownParallax()
      return
    }

    if (isActive) return

    isActive = true
    measureInitialPosition()

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

    observer.observe(targetRef.value)
    window.addEventListener('scroll', onScroll, { passive: true })
  }

  const onResize = () => {
    if (!import.meta.client) return
    if (isTouchOrMobileOrReduced()) {
      if (isActive) {
        teardownParallax()
      }
      return
    }

    if (!isActive) {
      setupParallax()
    } else {
      measureInitialPosition()
      if (isVisible && rafId === null) {
        rafId = requestAnimationFrame(updatePosition)
      }
    }
  }

  onMounted(() => {
    if (!import.meta.client) return
    if (!isTouchOrMobileOrReduced()) {
      setupParallax()
    }
    window.addEventListener('resize', onResize, { passive: true })
  })

  watch(
    targetRef,
    (newEl, oldEl) => {
      if (!import.meta.client || isTouchOrMobileOrReduced()) return
      if (oldEl && observer) observer.unobserve(oldEl)
      if (newEl) {
        if (!isActive) {
          setupParallax()
        } else if (observer) {
          measureInitialPosition()
          observer.observe(newEl)
        }
      }
    },
    { flush: 'post' }
  )

  const cleanup = () => {
    if (!import.meta.client) return
    window.removeEventListener('resize', onResize)
    teardownParallax()
  }

  onUnmounted(() => {
    cleanup()
  })

  return {
    cleanup
  }
}

