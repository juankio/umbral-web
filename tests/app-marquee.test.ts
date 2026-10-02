import { describe, it, expect } from 'bun:test'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

describe('AppMarquee Marquesina Infinita Seamless', () => {
  const marqueePath = resolve(import.meta.dir, '../components/ui/AppMarquee.vue')
  const marqueeContent = readFileSync(marqueePath, 'utf-8')
  const cssPath = resolve(import.meta.dir, '../assets/css/main.css')
  const cssContent = readFileSync(cssPath, 'utf-8')

  it('Verifica el contenedor con overflow-hidden y padding vertical cómodo', () => {
    expect(marqueeContent).toContain('overflow-hidden')
    expect(marqueeContent).toContain('py-3.5 sm:py-4')
  })

  it('Verifica la arquitectura canónica de 2 tracks gemelos independientes', () => {
    // Wrapper con flex w-max animate-marquee
    expect(marqueeContent).toContain('flex w-max animate-marquee')
    // Track 1
    expect(marqueeContent).toContain('<!-- Track 1 -->')
    // Track 2 Espejo con aria-hidden
    expect(marqueeContent).toContain('<!-- Track 2 (Espejo idéntico para loop 100% seamless infinito) -->')
    expect(marqueeContent).toContain('aria-hidden="true"')
    // Ambos tracks tienen shrink-0 y estructura idéntica
    const trackMatches = marqueeContent.match(/class="flex shrink-0 items-center justify-around gap-8 px-4"/g)
    expect(trackMatches).not.toBeNull()
    expect(trackMatches?.length).toBe(2)
  })

  it('Verifica la animación marquee-scroll en CSS con traslación seamless de 0% a -50%', () => {
    expect(cssContent).toContain('@keyframes marquee-scroll')
    expect(cssContent).toContain('transform: translateX(0%);')
    expect(cssContent).toContain('transform: translateX(-50%);')
    expect(cssContent).toContain('animation: marquee-scroll 35s linear infinite;')
    expect(cssContent).toContain('animation-play-state: paused;')
  })
})
