import { onUnmounted } from 'vue'
import { animate } from 'animejs'

export function useHoverMotion() {
  const activeAnimations: any[] = []

  const isReducedMotion = (): boolean => {
    if (!import.meta.client) return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  // Deslizamiento magnético sutil de flecha en enlaces arquitectónicos
  const handleArrowEnter = (el: HTMLElement | null, distance = 6) => {
    if (!el || isReducedMotion()) return
    const anim = animate(el, {
      translateX: distance,
      duration: 250,
      ease: 'outQuad'
    })
    activeAnimations.push(anim)
  }

  const handleArrowLeave = (el: HTMLElement | null) => {
    if (!el || isReducedMotion()) return
    const anim = animate(el, {
      translateX: 0,
      duration: 250,
      ease: 'outQuad'
    })
    activeAnimations.push(anim)
  }

  // Elevación suave de tarjeta y velo translúcido
  const handleCardEnter = (el: HTMLElement | null) => {
    if (!el || isReducedMotion()) return
    const anim = animate(el, {
      translateY: -4,
      scale: 1.015,
      duration: 320,
      ease: 'outQuad'
    })
    activeAnimations.push(anim)
  }

  const handleCardLeave = (el: HTMLElement | null) => {
    if (!el || isReducedMotion()) return
    const anim = animate(el, {
      translateY: 0,
      scale: 1,
      duration: 300,
      ease: 'outQuad'
    })
    activeAnimations.push(anim)
  }

  // Micro-inclinación de origami / vector arquitectónico
  const handleOrigamiMove = (el: HTMLElement | null, e: MouseEvent) => {
    if (!el || isReducedMotion()) return
    const rect = el.getBoundingClientRect()
    const xRel = (e.clientX - rect.left) / rect.width - 0.5
    const yRel = (e.clientY - rect.top) / rect.height - 0.5
    const anim = animate(el, {
      rotate: xRel * 4,
      scale: 1.02,
      duration: 200,
      ease: 'outQuad'
    })
    activeAnimations.push(anim)
  }

  const handleOrigamiLeave = (el: HTMLElement | null) => {
    if (!el || isReducedMotion()) return
    const anim = animate(el, {
      rotate: 0,
      scale: 1,
      duration: 400,
      ease: 'outQuad'
    })
    activeAnimations.push(anim)
  }

  onUnmounted(() => {
    activeAnimations.forEach(anim => anim?.revert?.() || anim?.pause?.())
    activeAnimations.length = 0
  })

  return {
    handleArrowEnter,
    handleArrowLeave,
    handleCardEnter,
    handleCardLeave,
    handleOrigamiMove,
    handleOrigamiLeave,
    isReducedMotion
  }
}
