import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

describe('Secciones Stands y Asesores (1:1 Figma Nodos 417:275, 413:144, 460:447, 503:221, 503:224, 503:227)', () => {
  const graficoPath = resolve(__dirname, '../components/nosotros/NosotrosDisenoGrafico.vue')
  const interioresPath = resolve(__dirname, '../components/nosotros/NosotrosDisenoInteriores.vue')
  const asesoresPath = resolve(__dirname, '../components/nosotros/NosotrosAsesores.vue')

  const graficoCode = readFileSync(graficoPath, 'utf-8')
  const interioresCode = readFileSync(interioresPath, 'utf-8')
  const asesoresCode = readFileSync(asesoresPath, 'utf-8')

  it('1. Stand de Diseño Gráfico: triángulo azul, título y 3 alumnas en B&W', () => {
    // Triángulo azul oficial
    expect(graficoCode).toContain('fill="#A5BCD5"')
    expect(graficoCode).toContain('viewBox="0 0 456 188"')
    expect(graficoCode).toContain('w-[280px] sm:w-[350px] lg:w-[410px] xl:w-[456px]')

    // Título monumental centrado
    expect(graficoCode).toContain('Stand de Diseño Gráfico')
    expect(graficoCode).toMatch(/font-barlow\s+font-normal\s+text-4xl\s+sm:text-5xl\s+lg:text-6xl\s+text-\[#070707\]/)

    // Cero subtítulos y cero máscaras 3D
    expect(graficoCode).not.toContain('subtextRef')
    expect(graficoCode).not.toContain('Alumnas de la Licenciatura')
    expect(graficoCode).not.toContain('NosotrosInfiniteCarousel')

    // 3 Alumnas
    expect(graficoCode).toContain('Natalia Nuñez')
    expect(graficoCode).toContain('/images/figma-grafico-natalia-nunez.webp')
    expect(graficoCode).toContain('Miranda Salazar')
    expect(graficoCode).toContain('/images/figma-grafico-miranda-salazar.webp')
    expect(graficoCode).toContain('Luciana Yañez')
    expect(graficoCode).toContain('/images/figma-grafico-luciana-yanez.webp')

    // Línea horizontal negra debajo
    expect(graficoCode).toContain('h-[1.5px] bg-[#070707]')

    // Límite de líneas (<150 líneas)
    expect(graficoCode.split('\n').length).toBeLessThan(150)
  })

  it('2. Stand De Diseño De Interiores: triángulo rosa, título y 3 alumnas en B&W', () => {
    // Triángulo rosa oficial
    expect(interioresCode).toContain('fill="#D291A1"')
    expect(interioresCode).toContain('viewBox="0 0 364 211"')
    expect(interioresCode).toContain('w-[240px] sm:w-[300px] lg:w-[340px] xl:w-[364px]')

    // Título monumental centrado
    expect(interioresCode).toContain('Stand De Diseño De Interiores')
    expect(interioresCode).toMatch(/font-barlow\s+font-normal\s+text-4xl\s+sm:text-5xl\s+lg:text-6xl\s+text-\[#070707\]/)

    // Cero subtítulos y cero máscaras 3D
    expect(interioresCode).not.toContain('subtextRef')
    expect(interioresCode).not.toContain('conceptualizaron la museografía')
    expect(interioresCode).not.toContain('NosotrosInfiniteCarousel')

    // 3 Alumnas
    expect(interioresCode).toContain('Yanetsy Reta')
    expect(interioresCode).toContain('/images/figma-interiores-yanetsy-clean.webp')
    expect(interioresCode).toContain('Regina García')
    expect(interioresCode).toContain('/images/figma-interiores-regina-clean.webp')
    expect(interioresCode).toContain('Andrea Tamez')
    expect(interioresCode).toContain('/images/figma-interiores-andrea-clean.webp')

    // Línea horizontal negra debajo
    expect(interioresCode).toContain('h-[1.5px] bg-[#070707]')

    // Límite de líneas (<150 líneas)
    expect(interioresCode.split('\n').length).toBeLessThan(150)
  })

  it('3. Asesores de Proyectos: triángulo naranja, título y 12 asesores B&W en 4 filas de 3', () => {
    // Triángulo naranja oficial
    expect(asesoresCode).toContain('fill="#E69D37"')
    expect(asesoresCode).toContain('viewBox="0 0 269 283"')
    expect(asesoresCode).toContain('w-[180px] sm:w-[220px] lg:w-[250px] xl:w-[269px]')

    // Título monumental centrado
    expect(asesoresCode).toContain('Asesores de Proyectos')
    expect(asesoresCode).toMatch(/font-barlow\s+font-normal\s+text-4xl\s+sm:text-5xl\s+lg:text-6xl\s+text-\[#070707\]/)

    // Cero subtítulos y cero carrusel
    expect(asesoresCode).not.toContain('subtextRef')
    expect(asesoresCode).not.toContain('Profesores de la Escuela')
    expect(asesoresCode).not.toContain('NosotrosInfiniteCarousel')

    // Retícula escalonada de 4 columnas (3-1 alternando)
    expect(asesoresCode).toContain('grid-cols-2 sm:grid-cols-2 lg:grid-cols-4')
    expect(asesoresCode).toContain('colStartClasses')
    expect(asesoresCode).toContain('lg:col-start-1')
    expect(asesoresCode).toContain('lg:col-start-4')

    // Fila 1
    expect(asesoresCode).toContain('Jessica Ochoa')
    expect(asesoresCode).toContain('Decana de la Escuela de Arte y Diseño')
    expect(asesoresCode).toContain('/images/figma-asesor-jessica-ochoa.webp')
    expect(asesoresCode).toContain('Nohemi Gamboa')
    expect(asesoresCode).toContain('/images/figma-asesor-nohemi-original.webp')
    expect(asesoresCode).toContain('Natalia Ceballos')
    expect(asesoresCode).toContain('/images/figma-asesor-natalia-ceballos.webp')

    // Fila 2
    expect(asesoresCode).toContain('Cristobal Guerra')
    expect(asesoresCode).toContain('Director del Programa Académico LDG')
    expect(asesoresCode).toContain('/images/figma-asesor-cristobal-guerra.webp')
    expect(asesoresCode).toContain('Sergio Trujillo')
    expect(asesoresCode).toContain('Asesor de Diseño Gráfico')
    expect(asesoresCode).toContain('/images/figma-asesor-sergio-trujillo.webp')
    expect(asesoresCode).toContain('Edgar Morejón')
    expect(asesoresCode).toContain('Asesor de Diseño de Modas')
    expect(asesoresCode).toContain('/images/figma-asesor-edgar-morejon.webp')

    // Fila 3
    expect(asesoresCode).toContain('Amparo Vázquez')
    expect(asesoresCode).toContain('Asesora Invitada')
    expect(asesoresCode).toContain('/images/figma-asesor-amparo-vazquez.webp')
    expect(asesoresCode).toContain('Agustín Plancarte')
    expect(asesoresCode).toContain('Asesor de Diseño Industrial')
    expect(asesoresCode).toContain('/images/figma-asesor-agustin-plancarte.webp')
    expect(asesoresCode).toContain('Mafer Culebra')
    expect(asesoresCode).toContain('Asesor de Diseño Industrial')
    expect(asesoresCode).toContain('/images/figma-asesor-mafer-culebra.webp')

    // Fila 4
    expect(asesoresCode).toContain('María Eugenia Santos')
    expect(asesoresCode).toContain('Directora de Programa Académico LINT')
    expect(asesoresCode).toContain('/images/figma-asesor-maria-eugenia-santos.webp')
    expect(asesoresCode).toContain('Daniela Santos')
    expect(asesoresCode).toContain('Directora del Programa Académico LDI')
    expect(asesoresCode).toContain('/images/figma-asesor-daniela-santos.webp')
    expect(asesoresCode).toContain('María de los Angeles Castillo')
    expect(asesoresCode).toContain('Asesor de Diseño de Interiores')
    expect(asesoresCode).toContain('/images/figma-asesor-maria-angeles-castillo.webp')

    // Línea horizontal negra completa al pie de asesores (1:1 Figma)
    expect(asesoresCode).toContain('h-[1.5px] bg-[#070707]')

    // Límite de líneas (<150 líneas)
    expect(asesoresCode.split('\n').length).toBeLessThan(150)
  })
})
