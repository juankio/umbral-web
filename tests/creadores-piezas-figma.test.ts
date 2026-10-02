import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

describe('Sección Creadores De Las Piezas (10 Proyectos Oficiales 1:1 Figma)', () => {
  const repentinaPath = resolve(__dirname, '../components/nosotros/NosotrosGanadoresRepentina.vue')
  const creadoresPath = resolve(__dirname, '../composables/useCreadores.ts')
  const cardPath = resolve(__dirname, '../components/nosotros/NosotrosCreadorCard.vue')
  const repentinaCode = readFileSync(repentinaPath, 'utf-8')
  const creadoresCode = readFileSync(creadoresPath, 'utf-8')
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
    expect(creadoresCode).toContain('Cimiento')
    expect(creadoresCode).toContain('Diana Ruanova')
    expect(creadoresCode).toContain('Diego González')
    expect(creadoresCode).toContain('Matías Romero')
    expect(creadoresCode).toContain('/images/alumno-diana-ruanova.webp')
    expect(creadoresCode).toContain('/images/alumno-diego-gonzalez.webp')
    expect(creadoresCode).toContain('/images/alumno-matias-romero.webp')
  })

  it('4. Fila 2: Curado desplazada a la derecha', () => {
    expect(creadoresCode).toContain('Curado')
    expect(creadoresCode).toContain('Camila León')
    expect(creadoresCode).toContain('Carolina Saldaña')
    expect(creadoresCode).toContain('Paula Aranda')
    expect(creadoresCode).toContain('Diseño De Modas')
    expect(creadoresCode).toContain('Diseño Gráfico')
    expect(creadoresCode).toContain('/images/alumno-camila-leon.webp')
    expect(creadoresCode).toContain('/images/alumno-carolina-saldana.webp')
    expect(creadoresCode).toContain('/images/alumno-paula-aranda.webp')
  })

  it('5. Fila 3: Encuadre alineada a la izquierda', () => {
    expect(creadoresCode).toContain('Encuadre')
    expect(creadoresCode).toContain('Ximena Silva')
    expect(creadoresCode).toContain('Daniela García')
    expect(creadoresCode).toContain('Regina Hinojosa')
    expect(creadoresCode).toContain('/images/alumno-ximena-silva.webp')
    expect(creadoresCode).toContain('/images/alumno-daniela-garcia.webp')
    expect(creadoresCode).toContain('/images/alumno-regina-hinojosa.webp')
  })

  it('6. Los 10 proyectos oficiales en zigzag (Cimiento, Curado, Encuadre, Entretiempo, Interconexión, Mai, Norte Rey, Reliquia, Roberto, Sagaón)', () => {
    const diezProyectos = [
      'Cimiento', 'Curado', 'Encuadre', 'Entretiempo', 'Interconexión',
      'Mai', 'Norte Rey', 'Reliquia', 'Roberto', 'Sagaón'
    ]
    diezProyectos.forEach(p => {
      expect(creadoresCode).toContain(p)
    })
    expect(repentinaCode).toContain('useCreadores')
    expect(repentinaCode).toContain('max-w-[1050px]')
  })

  it('7. Líneas divisorias individuales de cada fila en zigzag', () => {
    expect(repentinaCode).toContain('h-[1.5px] bg-[#070707]')
  })

  it('8. Tarjetas de alumnos modulares y estilos requeridos', () => {
    expect(cardCode).toContain('aspect-square bg-[#EAEAEA] overflow-hidden')
    expect(cardCode).toContain('grayscale contrast-105')
    expect(cardCode).toMatch(/font-barlow font-normal text-sm xs:text-base sm:text-xl lg:text-\[22px\] text-\[#070707\]/)
    expect(cardCode).toMatch(/font-barlow font-normal text-\[10px\] xs:text-xs sm:text-sm text-neutral-600/)
  })
})
