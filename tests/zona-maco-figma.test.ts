import { describe, it, expect } from 'bun:test'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

describe('Zona Maco Hero & Floating Projects Figma Frame 325:2 Alignment', () => {
  const floatingPath = resolve(import.meta.dir, '../components/zona-maco/ZonaMacoFloatingProjects.vue')
  const floatingContent = readFileSync(floatingPath, 'utf-8')

  const heroPath = resolve(import.meta.dir, '../components/zona-maco/ZonaMacoHero.vue')
  const heroContent = readFileSync(heroPath, 'utf-8')

  it('Verifica las 10 obras seleccionadas y sus posiciones exactas en Figma Frame 325:2', () => {
    // 1. Norte Rey: Arriba centro-izq
    expect(floatingContent).toContain("title: 'Norte Rey'")
    expect(floatingContent).toContain('lg:left-[calc(50%-230px)] xl:left-[calc(50%-290px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%-320px)] xl:top-[calc(50%-380px)]')

    // 2. Curado: Flanco superior izq
    expect(floatingContent).toContain("title: 'Curado'")
    expect(floatingContent).toContain('lg:left-[calc(50%-355px)] xl:left-[calc(50%-425px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%-225px)] xl:top-[calc(50%-270px)]')

    // 3. Cimiento: Extremo izquierdo medio
    expect(floatingContent).toContain("title: 'Cimiento'")
    expect(floatingContent).toContain('lg:left-[calc(50%-570px)] xl:left-[calc(50%-670px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%-5px)] xl:top-[calc(50%-10px)]')

    // 4. Encuadre: Flanco inferior izq
    expect(floatingContent).toContain("title: 'Encuadre'")
    expect(floatingContent).toContain('lg:left-[calc(50%-344px)] xl:left-[calc(50%-415px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%+130px)] xl:top-[calc(50%+155px)]')

    // 5. Entretiempo: Fondo centro-izq (abajo de Seleccionadas) - Muestra mesa con flores
    expect(floatingContent).toContain("title: 'Entretiempo'")
    expect(floatingContent).toContain("img: '/images/figma-product-roberto.webp'")
    expect(floatingContent).toContain('lg:left-[calc(50%-196px)] xl:left-[calc(50%-235px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%+165px)] xl:top-[calc(50%+195px)]')

    // 6. Interconexión: Arriba centro-der - Muestra reloj
    expect(floatingContent).toContain("title: 'Interconexión'")
    expect(floatingContent).toContain("img: '/images/figma-product-entretiempo.webp'")
    expect(floatingContent).toContain('lg:left-[calc(50%+188px)] xl:left-[calc(50%+230px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%-335px)] xl:top-[calc(50%-400px)]')

    // 7. Roberto: Flanco superior der - Muestra lámpara fondo verde oliva
    expect(floatingContent).toContain("title: 'Roberto'")
    expect(floatingContent).toContain("img: '/images/figma-product-interconexion.webp'")
    expect(floatingContent).toContain('lg:left-[calc(50%+200px)] xl:left-[calc(50%+245px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%-150px)] xl:top-[calc(50%-180px)]')

    // 8. Mai: Extremo superior der
    expect(floatingContent).toContain("title: 'Mai'")
    expect(floatingContent).toContain('lg:left-[calc(50%+320px)] xl:left-[calc(50%+390px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%-275px)] xl:top-[calc(50%-330px)]')

    // 9. Sagaón: Flanco inferior der
    expect(floatingContent).toContain("title: 'Sagaón'")
    expect(floatingContent).toContain('lg:left-[calc(50%+314px)] xl:left-[calc(50%+375px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%+135px)] xl:top-[calc(50%+160px)]')

    // 10. Reliquia: Extremo derecho medio
    expect(floatingContent).toContain("title: 'Reliquia'")
    expect(floatingContent).toContain('lg:left-[calc(50%+460px)] xl:left-[calc(50%+540px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%+5px)] xl:top-[calc(50%+10px)]')
  })

  it('Verifica el dimensionamiento contenido para evitar desbordes sobre la marquesina', () => {
    // Dimensiones ampliadas solicitadas para impacto visual
    expect(floatingContent).toContain('w-28 xs:w-32 sm:w-36 lg:w-[155px] xl:w-[185px] aspect-square')
  })

  it('Verifica que el contenedor de ZonaMacoHero tenga overflow-hidden y altura segura', () => {
    expect(heroContent).toContain('overflow-hidden')
    expect(heroContent).toMatch(/lg:min-h-\[\d+px\]/)
    expect(heroContent).toMatch(/xl:min-h-\[\d+px\]/)
  })
})
