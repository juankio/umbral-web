import { describe, it, expect, beforeEach, afterEach } from 'bun:test'
import { isTouchOrMobileOrReduced, useParallaxMotion } from '../composables/useParallaxMotion'
import { useHoverMotion } from '../composables/useHoverMotion'
import { ref } from 'vue'

describe('Gate de Movilidad y Reducción de Movimiento', () => {
  const originalInnerWidth = globalThis.window?.innerWidth
  const originalMatchMedia = globalThis.window?.matchMedia

  beforeEach(() => {
    (import.meta as any).client = true
    // Mock básico de window para bun test si es necesario
    if (typeof globalThis.window === 'undefined') {
      (globalThis as any).window = {
        innerWidth: 375,
        matchMedia: (query: string) => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: () => {},
          removeListener: () => {},
          addEventListener: () => {},
          removeEventListener: () => {},
          dispatchEvent: () => false
        })
      }
    }
  })

  afterEach(() => {
    if (originalInnerWidth !== undefined && globalThis.window) {
      globalThis.window.innerWidth = originalInnerWidth
      globalThis.window.matchMedia = originalMatchMedia
    }
  })

  it('Activa el gate móvil para viewports menores a 1024px (375px, 390px, 414px)', () => {
    const mobileWidths = [375, 390, 414, 768, 820, 1023]
    for (const width of mobileWidths) {
      globalThis.window.innerWidth = width
      globalThis.window.matchMedia = () => ({ matches: false } as any)
      expect(isTouchOrMobileOrReduced()).toBe(true)
    }
  })

  it('Permite animación en desktop (> 1024px) con hover y sin prefers-reduced-motion', () => {
    globalThis.window.innerWidth = 1440
    globalThis.window.matchMedia = (query: string) => {
      return { matches: false } as any
    }
    expect(isTouchOrMobileOrReduced()).toBe(false)
  })

  it('Activa el gate en desktop si prefers-reduced-motion está habilitado', () => {
    globalThis.window.innerWidth = 1440
    globalThis.window.matchMedia = (query: string) => {
      if (query.includes('prefers-reduced-motion: reduce')) {
        return { matches: true } as any
      }
      return { matches: false } as any
    }
    expect(isTouchOrMobileOrReduced()).toBe(true)
  })

  it('Activa el gate si el dispositivo no soporta hover o tiene puntero grueso', () => {
    globalThis.window.innerWidth = 1440
    globalThis.window.matchMedia = (query: string) => {
      if (query.includes('hover: none') || query.includes('pointer: coarse')) {
        return { matches: true } as any
      }
      return { matches: false } as any
    }
    expect(isTouchOrMobileOrReduced()).toBe(true)
  })
})

describe('useHoverMotion & useParallaxMotion Safe Gates', () => {
  it('useHoverMotion expone funciones que no fallan ni mutan en entorno móvil', () => {
    globalThis.window.innerWidth = 375
    globalThis.window.matchMedia = () => ({ matches: false } as any)

    const hoverMotion = useHoverMotion()
    expect(hoverMotion.isReducedMotion()).toBe(true)
    expect(hoverMotion.isTouchOrMobileOrReduced()).toBe(true)

    // Crear un mock element
    const mockEl = {
      style: {},
      getBoundingClientRect: () => ({ left: 0, top: 0, width: 100, height: 100 })
    } as any

    // Ejecutar handlers — no deben alterar el estilo en móvil
    hoverMotion.handleArrowEnter(mockEl)
    expect(mockEl.style.transform).toBeUndefined()

    hoverMotion.handleCardEnter(mockEl)
    expect(mockEl.style.transform).toBeUndefined()

    hoverMotion.handleOrigamiMove(mockEl, { clientX: 50 } as any)
    expect(mockEl.style.transform).toBeUndefined()
  })
})
