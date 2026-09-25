import { onUnmounted } from 'vue'
import { animate } from 'animejs'

export function useHoverMotion() {
  const activeAnimations = new Set<any>()
  const elementAnims = new WeakMap<HTMLElement, any>()

  let origamiRafId: number | null = null
  let pendingOrigamiEl: HTMLElement | null = null
  let pendingOrigamiRotate = 0

  const isReducedMotion = (): boolean => {
    if (!import.meta.client) return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  const stopElementAnimation = (el: HTMLElement | null) => {
    if (!el) return
    const prev = elementAnims.get(el)
    if (prev) {
      prev.pause?.()
      activeAnimations.delete(prev)
      elementAnims.delete(el)
    }
  }

  const trackAnimation = (el: HTMLElement, anim: any) => {
    stopElementAnimation(el)
    elementAnims.set(el, anim)
    activeAnimations.add(anim)
  }

  // Deslizamiento magnético sutil de flecha en enlaces arquitectónicos
  const handleArrowEnter = (el: HTMLElement | null, distance = 6) => {
    if (!el || isReducedMotion()) return
    stopElementAnimation(el)
    const anim = animate(el, {
      translateX: distance,
      duration: 250,
      ease: 'outQuad'
    })
    trackAnimation(el, anim)
  }

  const handleArrowLeave = (el: HTMLElement | null) => {
    if (!el || isReducedMotion()) return
    stopElementAnimation(el)
    const anim = animate(el, {
      translateX: 0,
      duration: 250,
      ease: 'outQuad'
    })
    trackAnimation(el, anim)
  }

  // Elevación suave de tarjeta y velo translúcido
  const handleCardEnter = (el: HTMLElement | null) => {
    if (!el || isReducedMotion()) return
    stopElementAnimation(el)
    const anim = animate(el, {
      translateY: -4,
      scale: 1.015,
      duration: 320,
      ease: 'outQuad'
    })
    trackAnimation(el, anim)
  }

  const handleCardLeave = (el: HTMLElement | null) => {
    if (!el || isReducedMotion()) return
    stopElementAnimation(el)
    const anim = animate(el, {
      translateY: 0,
      scale: 1,
      duration: 300,
      ease: 'outQuad'
    })
    trackAnimation(el, anim)
  }

  // Micro-inclinación de origami / vector arquitectónico con Throttling RAF y cancelación de tween previo
  const handleOrigamiMove = (el: HTMLElement | null, e: MouseEvent) => {
    if (!el || isReducedMotion()) return

    const rect = el.getBoundingClientRect()
    if (rect.width === 0 || rect.height === 0) return

    const xRel = (e.clientX - rect.left) / rect.width - 0.5
    pendingOrigamiEl = el
    pendingOrigamiRotate = xRel * 4

    if (origamiRafId === null) {
      origamiRafId = requestAnimationFrame(() => {
        origamiRafId = null
        if (!pendingOrigamiEl || isReducedMotion()) return

        stopElementAnimation(pendingOrigamiEl)
        const anim = animate(pendingOrigamiEl, {
          rotate: pendingOrigamiRotate,
          scale: 1.02,
          duration: 180,
          ease: 'outQuad'
        })
        trackAnimation(pendingOrigamiEl, anim)
      })
    }
  }

  const handleOrigamiLeave = (el: HTMLElement | null) => {
    if (!el || isReducedMotion()) return

    // Cancelar frames pendientes
    if (origamiRafId !== null) {
      cancelAnimationFrame(origamiRafId)
      origamiRafId = null
    }
    pendingOrigamiEl = null

    // Cancelar tween previo y revertir/animar a estado neutro
    stopElementAnimation(el)
    const anim = animate(el, {
      rotate: 0,
      scale: 1,
      duration: 350,
      ease: 'outQuad'
    })
    trackAnimation(el, anim)
  }

  const cleanup = () => {
    if (origamiRafId !== null) {
      cancelAnimationFrame(origamiRafId)
      origamiRafId = null
    }
    pendingOrigamiEl = null

    activeAnimations.forEach((anim) => {
      anim?.revert?.() || anim?.pause?.()
    })
    activeAnimations.clear()
  }

  onUnmounted(() => {
    cleanup()
  })

  return {
    handleArrowEnter,
    handleArrowLeave,
    handleCardEnter,
    handleCardLeave,
    handleOrigamiMove,
    handleOrigamiLeave,
    isReducedMotion,
    cleanup
  }
}

