import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

describe('Sección Creadores De Las Piezas (1:1 Figma Nodos 407:65, 503:218, 463:678, 493:120, 463:676)', () => {
  const repentinaPath = resolve(__dirname, '../components/nosotros/NosotrosGanadoresRepentina.vue')
  const cardPath = resolve(__dirname, '../components/nosotros/NosotrosCreadorCard.vue')
  const repentinaCode = readFileSync(repentinaPath, 'utf-8')
  const cardCode = readFileSync(cardPath, 'utf-8')

  it('1. Encabezado Oficial: contiene triángulo amarillo Figma sin subtítulo ni línea global', () => {
    // Triángulo amarillo oficial
    expect(repentinaCode).toContain('fill="#F6D152"')
    expect(repentinaCode).toContain('viewBox="0 0 497 230"')
    expect(repentinaCode).toMatch(/w-\[320px\]\s+sm:w-\[400px\]\s+lg:w-\[460px\]\s+xl:w-\[497px\]/)
    
    // Título monumental centrado
    expect(repentinaCode).toContain('Creadores De Las Piezas')
    expect(repentinaCode).toMatch(/font-barlow\s+font-normal\s+text-4xl\s+sm:text-5xl\s+lg:text-6xl\s+text-\[#070707\]/)

    // NO hay subtítulo ni línea divisoria global debajo del título
    expect(repentinaCode).not.toContain('Alumnos de la Escuela de Arte y Diseño')
    expect(repentinaCode).not.toContain('subtextRef')
  })

  it('2. Contenedor Maestro Amplio para ritmo editorial', () => {
    expect(repentinaCode).toMatch(/max-w-\[1500px\]\s+xl:max-w-\[1600px\]/)
  })

  it('3. Fila 1: Cimiento alineada a la izquierda', () => {
    expect(repentinaCode).toContain('Cimiento')
    expect(repentinaCode).toMatch(/font-barlow\s+text-2xl\s+sm:text-3xl\s+text-\[#070707\]\s+mb-4/)
    expect(repentinaCode).toMatch(/max-w-\[1050px\]\s+lg:max-w-\[1150px\]\s+mr-auto/)
    expect(repentinaCode).toContain('Diana Ruanova')
    expect(repentinaCode).toContain('Diego González')
    expect(repentinaCode).toContain('Matías Romero')
    expect(repentinaCode).toContain('/images/alumno-diana-ruanova.webp')
    expect(repentinaCode).toContain('/images/alumno-diego-gonzalez.webp')
    expect(repentinaCode).toContain('/images/alumno-matias-romero.webp')
  })

  it('4. Fila 2: Curado desplazada a la derecha', () => {
    expect(repentinaCode).toContain('Curado')
    expect(repentinaCode).toMatch(/max-w-\[1050px\]\s+lg:max-w-\[1150px\]\s+ml-auto/)
    expect(repentinaCode).toContain('Camila León')
    expect(repentinaCode).toContain('Carolina Saldaña')
    expect(repentinaCode).toContain('Paula Aranda')
    expect(repentinaCode).toContain('Diseño De Modas')
    expect(repentinaCode).toContain('Diseño Gráfico')
    expect(repentinaCode).toContain('/images/alumno-camila-leon.webp')
    expect(repentinaCode).toContain('/images/alumno-carolina-saldana.webp')
    expect(repentinaCode).toContain('/images/alumno-paula-aranda.webp')
  })

  it('5. Fila 3: Encuadre alineada a la izquierda', () => {
    expect(repentinaCode).toContain('Encuadre')
    expect(repentinaCode).toMatch(/max-w-\[1050px\]\s+lg:max-w-\[1150px\]\s+mr-auto/)
    expect(repentinaCode).toContain('Ximena Silva')
    expect(repentinaCode).toContain('Daniela García')
    expect(repentinaCode).toContain('Regina Hinojosa')
    expect(repentinaCode).toContain('/images/alumno-ximena-silva.webp')
    expect(repentinaCode).toContain('/images/alumno-daniela-garcia.webp')
    expect(repentinaCode).toContain('/images/alumno-regina-hinojosa.webp')
  })

  it('6. Fila 4: Curado desplazada a la derecha (1:1 Figma nodo 503:149)', () => {
    expect(repentinaCode).toContain('FILA 4: Curado (DESPLAZADA A LA DERECHA - 1:1 FIGMA)')
    expect(repentinaCode).toContain('curado-bottom-')
  })

  it('7. Líneas divisorias individuales y de cierre de cada fila', () => {
    expect(repentinaCode).toContain('h-[1.5px] bg-[#070707]')
  })

  it('8. Tarjetas de alumnos modulares y estilos requeridos', () => {
    expect(cardCode).toContain('aspect-square bg-[#EAEAEA] overflow-hidden')
    expect(cardCode).toContain('grayscale contrast-105')
    expect(cardCode).toContain('font-barlow font-normal text-lg sm:text-xl lg:text-[22px] text-[#070707] mt-2 leading-tight')
    expect(cardCode).toContain('font-barlow font-normal text-xs sm:text-sm text-neutral-600 mt-0.5 leading-snug')
  })
})
