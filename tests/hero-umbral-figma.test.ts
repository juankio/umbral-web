import { describe, it, expect } from 'bun:test'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

describe('HomeHero Geometría y Concepto Umbral (Portal de Doble Capa Vectorial)', () => {
  const heroPath = resolve(import.meta.dir, '../components/home/HomeHero.vue')
  const heroContent = readFileSync(heroPath, 'utf-8')

  it('Verifica que el contenedor de la sección tenga fondo blanco puro #ffffff', () => {
    expect(heroContent).toContain('bg-[#ffffff]')
  })

  it('Verifica la arquitectura del Portal de Doble Capa Vectorial (Capa 1 #070707 y Capa 2 text-white recortada con clip-path)', () => {
    // Frase continua sin spans divisores de palabras
    expect(heroContent).toContain('Abre la puerta')
    expect(heroContent).not.toContain('Abre la puer<span')
    expect(heroContent).toContain('cruza el')
    expect(heroContent).not.toContain('>cr</span>')
    // Capa 1: Base en negro puro #070707
    expect(heroContent).toContain('text-[#070707]')
    // Capa 2: Contenedor espejo en blanco puro text-white dentro del portal
    expect(heroContent).toContain('text-white')
    expect(heroContent).toContain('portal-inner')
    // Clip-path exacto del triángulo
    expect(heroContent).toContain('clip-path: polygon(0% 69.9%, 24.78% 0%, 100% 100%)')
  })

  it('Verifica el posicionamiento de penetración en los flancos izquierdo y derecho', () => {
    expect(heroContent).toMatch(/lg:right-\[calc\(100%-\d+px\)\]/)
    expect(heroContent).toMatch(/lg:left-\[calc\(74%-\d+px\)\]/)
  })

  it('Verifica la escala monumental y proporciones equilibradas', () => {
    // Proporciones y dimensiones del triángulo portal
    expect(heroContent).toContain('w-[340px] sm:w-[380px] lg:w-[420px]')
    expect(heroContent).toContain('aspect-[528/640]')
    // Escala de frases laterales
    expect(heroContent).toContain('text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] 2xl:text-[90px]')
    // Escala monumental de UMBRAL
    expect(heroContent).toContain('text-6xl sm:text-7xl md:text-8xl lg:text-[104px] xl:text-[116px] 2xl:text-[128px]')
    expect(heroContent).toContain('UMBRAL')
    // Margen inferior seguro para evitar colisión con la marquesina
    expect(heroContent).toContain('mb-8 sm:mb-12 lg:mb-14')
    // Layout flexible orgánico
    expect(heroContent).toContain('min-h-[calc(100dvh-')
  })

  it('Verifica que el triángulo portal use bg-[#000000] y no bloquee puntero', () => {
    expect(heroContent).toContain('bg-[#000000]')
    expect(heroContent).toContain('pointer-events-none')
  })

  it('Verifica que la marquesina se mantenga al pie de la sección', () => {
    expect(heroContent).toContain('<AppMarquee')
  })

  it('Verifica que el Hero sea completamente estático sin movimiento interactivo ni desplazamientos', () => {
    // Sin listeners de mouse de origami/hover
    expect(heroContent).not.toContain('@mousemove')
    expect(heroContent).not.toContain('@mouseleave')
    expect(heroContent).not.toContain('handleOrigamiMove')
    expect(heroContent).not.toContain('handleOrigamiLeave')
    // Sin composables de movimiento dinámico interactivo en Hero
    expect(heroContent).not.toContain('useHoverMotion')
    expect(heroContent).not.toContain('useParallaxMotion')
    // Sin will-change-transform
    expect(heroContent).not.toContain('will-change-transform')
    // Sin desplazamientos de traslación ni escala en las animaciones
    expect(heroContent).not.toContain('translateY:')
    expect(heroContent).not.toContain('translateX:')
    expect(heroContent).not.toContain('scale:')
  })
})
