import { describe, it, expect } from 'bun:test'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

describe('HomeIntro Fidelidad Figma 1:1 (Nodo 117:386 y Nodo 112:33)', () => {
  const introPath = resolve(import.meta.dir, '../components/home/HomeIntro.vue')
  const introContent = readFileSync(introPath, 'utf-8')

  it('Verifica que el titular sea el logotipo vectorial oficial UMBRAL \\ CRGS y no un h2 genérico', () => {
    expect(introContent).toContain('src="/images/logo-umbral.webp"')
    expect(introContent).toContain('alt="UMBRAL \\ CRGS"')
    expect(introContent).toContain('max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] xl:max-w-[390px]')
    expect(introContent).not.toMatch(/<h2[^>]*>\s*<span[^>]*>UMBRAL<\/span>/)
  })

  it('Verifica la tipografía, tamaño, interlineado, color y alineación justificada de los párrafos', () => {
    // Familia tipográfica Barlow Condensed
    expect(introContent).toContain('font-barlow')
    // Escala tipográfica compacta y armónica para viewport estándar
    expect(introContent).toContain('text-sm sm:text-base lg:text-[19px] xl:text-[21px]')
    // Interlineado 1.22
    expect(introContent).toContain('leading-[1.22]')
    // Espaciado entre letras -0.015em
    expect(introContent).toContain('tracking-[-0.015em]')
    // Color oficial #1C1C1C
    expect(introContent).toContain('text-[#1C1C1C]')
    // Alineación horizontal justificada (Figma textAlignHorizontal: JUSTIFIED)
    expect(introContent).toContain('text-justify')
    // Separación entre párrafos
    expect(introContent).toContain('space-y-3 sm:space-y-3.5 lg:space-y-4')
  })

  it('Verifica los pesos tipográficos específicos según OverrideTable de Figma', () => {
    // P1: "Centro Roberto Garza Sada," con peso 500 (font-medium)
    expect(introContent).toContain('<span class="font-medium">Centro Roberto Garza Sada,</span>')
    // P2: "Funciona como un umbral entre la Escuela y el mundo:" con peso 500 (font-medium)
    expect(introContent).toContain('<span class="font-medium">Funciona como un umbral entre la Escuela y el mundo:</span>')
    // P5: con peso 700 (font-bold)
    expect(introContent).toMatch(/<p ref="p5Ref" class="font-bold">\s*La Repentina Zona Maco 2027 es el primer capítulo de este proyecto\.\s*<\/p>/)
  })

  it('Verifica la estructura, anchos máximos y proporciones de las columnas y fotos', () => {
    // Columna izquierda max-w-[720px]
    expect(introContent).toContain('max-w-[720px]')
    // Columna derecha max-w contenido armónico
    expect(introContent).toContain('max-w-[380px] lg:max-w-[420px] xl:max-w-[440px]')
    // Proporciones de Foto 1
    expect(introContent).toContain('w-[82%] sm:w-[84%] self-end')
    // Proporciones de Triángulo Amarillo
    expect(introContent).toContain('viewBox="0 0 680 385"')
    expect(introContent).toContain('fill="#F6D152"')
    expect(introContent).toContain('-my-10 sm:-my-12 lg:-my-14 xl:-my-16')
    // Proporciones de Foto 2
    expect(introContent).toContain('w-[88%] sm:w-[90%] self-start')
  })
})
