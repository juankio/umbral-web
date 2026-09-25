import { onUnmounted, type Ref } from 'vue'
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

  const isMobile = (): boolean => {
    if (!import.meta.client) return false
    return window.innerWidth < 768
  }

  const observeScrollReveal = (
    elRef: Ref<HTMLElement | null> | HTMLElement | null,
    options: ScrollAnimOptions = {}
  ) => {
    if (!import.meta.client) return

    const mobile = isMobile()
    const {
      type = 'heading',
      delay = 0,
      duration = mobile ? 500 : 800,
      threshold = options.threshold ?? (mobile ? 0.05 : 0.15),
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

    // Distancias de entrada discretas y suavizadas en móvil para prevenir saltos
    const triangleOffset = mobile ? 10 : 24
    const triangleScale = mobile ? 0.97 : 0.94
    const imageOffset = mobile ? 10 : 18
    const imageScale = mobile ? 0.98 : 0.96
    const cardOffset = mobile ? 12 : 28
    const textOffset = mobile ? 10 : 20

    // Estado inicial visual antes de la entrada
    if (type === 'divider') {
      targetEl.style.transformOrigin = origin
      targetEl.style.transform = 'scaleX(0)'
      targetEl.style.opacity = '0'
    } else if (type === 'triangle') {
      targetEl.style.opacity = '0'
      targetEl.style.transform = `scale(${triangleScale}) translateY(${triangleOffset}px)`
    } else if (type === 'image') {
      targetEl.style.opacity = '0'
      targetEl.style.transform = `scale(${imageScale}) translateY(${imageOffset}px)`
    } else {
      targetEl.style.opacity = '0'
      targetEl.style.transform = `translateY(${type === 'card' ? cardOffset : textOffset}px)`
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
            duration: Math.max(duration, mobile ? 450 : 750)
          }
        } else if (type === 'triangle') {
          animConfig = {
            ...animConfig,
            opacity: [0, 1],
            scale: [triangleScale, 1],
            translateY: [triangleOffset, 0],
            duration: Math.max(duration, mobile ? 600 : 950)
          }
        } else if (type === 'image') {
          animConfig = {
            ...animConfig,
            opacity: [0, 1],
            scale: [imageScale, 1],
            translateY: [imageOffset, 0],
            duration: Math.max(duration, mobile ? 550 : 900)
          }
        } else {
          animConfig = {
            ...animConfig,
            opacity: [0, 1],
            translateY: [type === 'card' ? cardOffset : textOffset, 0],
            ease: 'outExpo',
            duration: mobile ? Math.min(duration, 550) : duration
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
    isReducedMotion,
    isMobile
  }
}
