import { onUnmounted, ref, type Ref } from 'vue'
import { animate } from 'animejs'

export type ScrollAnimType = 'heading' | 'divider' | 'paragraph' | 'card' | 'triangle' | 'image'

export interface ScrollAnimOptions {
  type?: ScrollAnimType
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
  origin?: string
}

export function useScrollAnimation() {
  const activeAnimations: any[] = []
  const observers: IntersectionObserver[] = []

  const isReducedMotion = (): boolean => {
    if (!import.meta.client) return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  const observeScrollReveal = (
    elRef: Ref<HTMLElement | null> | HTMLElement | null,
    options: ScrollAnimOptions = {}
  ) => {
    if (!import.meta.client) return

    const {
      type = 'heading',
      delay = 0,
      duration = 800,
      threshold = 0.15,
      once = true,
      origin = 'left center'
    } = options

    const getElement = (): HTMLElement | null => {
      if (!elRef) return null
      return 'value' in elRef ? elRef.value : elRef
    }

    const targetEl = getElement()
    if (!targetEl) return

    if (isReducedMotion()) {
      targetEl.style.opacity = '1'
      targetEl.style.transform = 'none'
      return
    }

    // Estado inicial visual antes de la entrada
    if (type === 'divider') {
      targetEl.style.transformOrigin = origin
      targetEl.style.transform = 'scaleX(0)'
      targetEl.style.opacity = '0'
    } else if (type === 'triangle') {
      targetEl.style.opacity = '0'
      targetEl.style.transform = 'scale(0.94) translateY(24px)'
    } else if (type === 'image') {
      targetEl.style.opacity = '0'
      targetEl.style.transform = 'scale(0.96) translateY(18px)'
    } else {
      targetEl.style.opacity = '0'
      targetEl.style.transform = type === 'card' ? 'translateY(28px)' : 'translateY(20px)'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        let animConfig: any = {
          duration,
          delay,
          ease: 'outExpo'
        }

        if (type === 'divider') {
          animConfig = {
            ...animConfig,
            scaleX: [0, 1],
            opacity: [0, 1],
            ease: 'outCubic',
            duration: Math.max(duration, 750)
          }
        } else if (type === 'triangle') {
          animConfig = {
            ...animConfig,
            opacity: [0, 1],
            scale: [0.94, 1],
            translateY: [24, 0],
            duration: Math.max(duration, 950)
          }
        } else if (type === 'image') {
          animConfig = {
            ...animConfig,
            opacity: [0, 1],
            scale: [0.96, 1],
            translateY: [18, 0],
            duration: Math.max(duration, 900)
          }
        } else {
          animConfig = {
            ...animConfig,
            opacity: [0, 1],
            translateY: [type === 'card' ? 28 : 20, 0],
            ease: 'outExpo'
          }
        }

        const anim = animate(targetEl, animConfig)
        activeAnimations.push(anim)

        if (once) {
          observer.unobserve(targetEl)
        }
      })
    }, { threshold })

    observer.observe(targetEl)
    observers.push(observer)
  }

  const cleanup = () => {
    observers.forEach(obs => obs.disconnect())
    observers.length = 0
    activeAnimations.forEach(anim => {
      anim?.pause?.()
      anim?.revert?.()
    })
    activeAnimations.length = 0
  }

  onUnmounted(() => {
    cleanup()
  })

  return {
    observeScrollReveal,
    cleanup,
    isReducedMotion
  }
}
