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
    expect(floatingContent).toContain('lg:left-[calc(50%-170px)] xl:left-[calc(50%-190px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%-310px)] xl:top-[calc(50%-335px)]')

    // 2. Curado: Flanco superior izq
    expect(floatingContent).toContain("title: 'Curado'")
    expect(floatingContent).toContain('lg:left-[calc(50%-370px)] xl:left-[calc(50%-410px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%-195px)] xl:top-[calc(50%-215px)]')

    // 3. Cimiento: Extremo izquierdo medio
    expect(floatingContent).toContain("title: 'Cimiento'")
    expect(floatingContent).toContain('lg:left-[calc(50%-530px)] xl:left-[calc(50%-595px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%+15px)] xl:top-[calc(50%+20px)]')

    // 4. Encuadre: Flanco inferior izq
    expect(floatingContent).toContain("title: 'Encuadre'")
    expect(floatingContent).toContain('lg:left-[calc(50%-330px)] xl:left-[calc(50%-365px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%+160px)] xl:top-[calc(50%+185px)]')

    // 5. Entretiempo: Fondo centro-izq (abajo de Seleccionadas) - Muestra mesa con flores
    expect(floatingContent).toContain("title: 'Entretiempo'")
    expect(floatingContent).toContain("img: '/images/figma-product-roberto.webp'")
    expect(floatingContent).toContain('lg:left-[calc(50%-130px)] xl:left-[calc(50%-145px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%+175px)] xl:top-[calc(50%+200px)]')

    // 6. Interconexión: Arriba centro-der - Muestra reloj
    expect(floatingContent).toContain("title: 'Interconexión'")
    expect(floatingContent).toContain("img: '/images/figma-product-entretiempo.webp'")
    expect(floatingContent).toContain('lg:left-[calc(50%+180px)] xl:left-[calc(50%+210px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%-300px)] xl:top-[calc(50%-325px)]')

    // 7. Roberto: Flanco superior der - Muestra lámpara fondo verde oliva
    expect(floatingContent).toContain("title: 'Roberto'")
    expect(floatingContent).toContain("img: '/images/figma-product-interconexion.webp'")
    expect(floatingContent).toContain('lg:left-[calc(50%+220px)] xl:left-[calc(50%+250px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%-130px)] xl:top-[calc(50%-145px)]')

    // 8. Mai: Extremo superior der
    expect(floatingContent).toContain("title: 'Mai'")
    expect(floatingContent).toContain('lg:left-[calc(50%+360px)] xl:left-[calc(50%+410px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%-210px)] xl:top-[calc(50%-235px)]')

    // 9. Sagaón: Flanco inferior der
    expect(floatingContent).toContain("title: 'Sagaón'")
    expect(floatingContent).toContain('lg:left-[calc(50%+310px)] xl:left-[calc(50%+350px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%+165px)] xl:top-[calc(50%+190px)]')
    // Asegurar que no quede en la posición vieja que causaba colisión con el footer
    expect(floatingContent).not.toContain('lg:top-[calc(50%+215px)]')
    expect(floatingContent).not.toContain('xl:top-[calc(50%+235px)]')

    // 10. Reliquia: Extremo derecho medio
    expect(floatingContent).toContain("title: 'Reliquia'")
    expect(floatingContent).toContain('lg:left-[calc(50%+490px)] xl:left-[calc(50%+555px)]')
    expect(floatingContent).toContain('lg:top-[calc(50%+20px)] xl:top-[calc(50%+25px)]')
  })

  it('Verifica el dimensionamiento contenido para evitar desbordes sobre la marquesina', () => {
    // Dimensiones ampliadas solicitadas para impacto visual
    expect(floatingContent).toContain('w-28 xs:w-32 sm:w-36 lg:w-[165px] xl:w-[195px] aspect-square')
  })

  it('Verifica que el contenedor de ZonaMacoHero tenga overflow-hidden y altura segura', () => {
    expect(heroContent).toContain('overflow-hidden')
    expect(heroContent).toContain('lg:min-h-[740px]')
    expect(heroContent).toContain('xl:min-h-[780px]')
  })
})
