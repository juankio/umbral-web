import { describe, it, expect } from 'bun:test'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

describe('Zona Maco Hero & Floating Projects Figma Frame 325:2 Alignment', () => {
  const floatingPath = resolve(import.meta.dir, '../components/zona-maco/ZonaMacoFloatingProjects.vue')
  const floatingContent = readFileSync(floatingPath, 'utf-8')

  const heroPath = resolve(import.meta.dir, '../components/zona-maco/ZonaMacoHero.vue')
  const heroContent = readFileSync(heroPath, 'utf-8')

  it('Verifica las 10 obras seleccionadas y sus posiciones exactas en Figma Frame 325:2', () => {
    // 1. Desmadre: Arriba centro-izq
    expect(floatingContent).toContain("title: 'Desmadre'")
    expect(floatingContent).toContain('lg:left-[calc(50%-160px)] xl:left-[calc(50%-180px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%-260px)] xl:top-[calc(50%-290px)]')

    // 2. Curado: Flanco superior izq
    expect(floatingContent).toContain("title: 'Curado'")
    expect(floatingContent).toContain('lg:left-[calc(50%-330px)] xl:left-[calc(50%-370px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%-150px)] xl:top-[calc(50%-170px)]')

    // 3. Cimiento: Extremo izquierdo medio
    expect(floatingContent).toContain("title: 'Cimiento'")
    expect(floatingContent).toContain('lg:left-[calc(50%-480px)] xl:left-[calc(50%-540px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%+10px)] xl:top-[calc(50%+15px)]')

    // 4. Encuadre: Flanco inferior izq
    expect(floatingContent).toContain("title: 'Encuadre'")
    expect(floatingContent).toContain('lg:left-[calc(50%-330px)] xl:left-[calc(50%-370px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%+140px)] xl:top-[calc(50%+160px)]')

    // 5. Entretiempo: Fondo centro-izq (abajo de Seleccionadas) - Muestra mesa con flores
    expect(floatingContent).toContain("title: 'Entretiempo'")
    expect(floatingContent).toContain("img: '/images/figma-product-roberto.webp'")
    expect(floatingContent).toContain('lg:left-[calc(50%-160px)] xl:left-[calc(50%-180px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%+150px)] xl:top-[calc(50%+170px)]')

    // 6. Interconexión: Arriba centro-der - Muestra reloj
    expect(floatingContent).toContain("title: 'Interconexión'")
    expect(floatingContent).toContain("img: '/images/figma-product-entretiempo.webp'")
    expect(floatingContent).toContain('lg:left-[calc(50%+160px)] xl:left-[calc(50%+190px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%-270px)] xl:top-[calc(50%-300px)]')

    // 7. Roberto: Flanco superior der - Muestra lámpara fondo verde oliva
    expect(floatingContent).toContain("title: 'Roberto'")
    expect(floatingContent).toContain("img: '/images/figma-product-interconexion.webp'")
    expect(floatingContent).toContain('lg:left-[calc(50%+170px)] xl:left-[calc(50%+200px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%-80px)] xl:top-[calc(50%-90px)]')

    // 8. Mai: Extremo superior der
    expect(floatingContent).toContain("title: 'Mai'")
    expect(floatingContent).toContain('lg:left-[calc(50%+330px)] xl:left-[calc(50%+380px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%-210px)] xl:top-[calc(50%-240px)]')

    // 9. Sagaón: Flanco inferior der
    expect(floatingContent).toContain("title: 'Sagaón'")
    expect(floatingContent).toContain('lg:left-[calc(50%+300px)] xl:left-[calc(50%+340px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%+140px)] xl:top-[calc(50%+160px)]')
    // Asegurar que no quede en la posición vieja que causaba colisión con el footer
    expect(floatingContent).not.toContain('lg:top-[calc(50%+215px)]')
    expect(floatingContent).not.toContain('xl:top-[calc(50%+235px)]')

    // 10. Reliquia: Extremo derecho medio
    expect(floatingContent).toContain("title: 'Reliquia'")
    expect(floatingContent).toContain('lg:left-[calc(50%+460px)] xl:left-[calc(50%+520px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%+10px)] xl:top-[calc(50%+15px)]')
  })

  it('Verifica el dimensionamiento contenido para evitar desbordes sobre la marquesina', () => {
    // Dimensiones contenidas especificadas
    expect(floatingContent).toContain('w-24 sm:w-26 lg:w-28 xl:w-32 aspect-square')
    // No usar tamaños desproporcionados previos
    expect(floatingContent).not.toContain('xl:w-42')
    expect(floatingContent).not.toContain('xl:w-40')
    expect(floatingContent).not.toContain('xl:w-34')
  })

  it('Verifica que el contenedor de ZonaMacoHero tenga overflow-hidden y altura segura', () => {
    expect(heroContent).toContain('overflow-hidden')
    expect(heroContent).toContain('lg:min-h-[740px]')
    expect(heroContent).toContain('xl:min-h-[780px]')
  })
})
