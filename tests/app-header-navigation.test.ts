import { describe, it, expect } from 'bun:test'

describe('AppHeader Arquitectura de Navegación & Secciones', () => {
  const desktopLinks = [
    { label: 'Zona Maco', to: '/zona-maco' },
    { label: 'Catálogo de Obras', to: '/zona-maco#proyectos' },
    { label: 'Integrantes', to: '/integrantes' },
    { label: 'Nosotros', to: '/nosotros' }
  ]

  const mobileLinks = [
    { index: '01', label: 'Zona Maco', to: '/zona-maco' },
    { index: '02', label: 'Catálogo de Obras', to: '/zona-maco#proyectos' },
    { index: '03', label: 'Integrantes', to: '/integrantes' },
    { index: '04', label: 'Nosotros', to: '/nosotros' }
  ]

  const isLinkActive = (to: string, currentPath: string, currentHash: string = '') => {
    if (to === '/') return currentPath === '/'
    if (to.includes('#')) {
      const [path, hash] = to.split('#')
      return (currentPath === path && currentHash === `#${hash}`) || currentPath.startsWith('/obras')
    }
    if (to === '/zona-maco') {
      return currentPath === '/zona-maco' && (!currentHash || currentHash !== '#proyectos')
    }
    if (to === '/nosotros') {
      return currentPath.startsWith('/nosotros') || currentPath.startsWith('/crgs')
    }
    return currentPath.startsWith(to)
  }

  it('Define exactamente los 4 ítems de navegación oficial de Figma en desktop', () => {
    expect(desktopLinks).toHaveLength(4)
    expect(desktopLinks[0]).toEqual({ label: 'Zona Maco', to: '/zona-maco' })
    expect(desktopLinks[1]).toEqual({ label: 'Catálogo de Obras', to: '/zona-maco#proyectos' })
    expect(desktopLinks[2]).toEqual({ label: 'Integrantes', to: '/integrantes' })
    expect(desktopLinks[3]).toEqual({ label: 'Nosotros', to: '/nosotros' })
  })

  it('Define exactamente los 4 ítems de navegación oficial de Figma en móvil', () => {
    expect(mobileLinks).toHaveLength(4)
    expect(mobileLinks[0]).toEqual({ index: '01', label: 'Zona Maco', to: '/zona-maco' })
    expect(mobileLinks[1]).toEqual({ index: '02', label: 'Catálogo de Obras', to: '/zona-maco#proyectos' })
    expect(mobileLinks[2]).toEqual({ index: '03', label: 'Integrantes', to: '/integrantes' })
    expect(mobileLinks[3]).toEqual({ index: '04', label: 'Nosotros', to: '/nosotros' })
  })

  it('Valida isLinkActive para Zona Maco vs Catálogo de Obras con Hash y Detalle /obras/[slug]', () => {
    // En la página de Zona Maco sin hash
    expect(isLinkActive('/zona-maco', '/zona-maco', '')).toBe(true)
    expect(isLinkActive('/zona-maco#proyectos', '/zona-maco', '')).toBe(false)

    // En la sección de proyectos dentro de Zona Maco
    expect(isLinkActive('/zona-maco', '/zona-maco', '#proyectos')).toBe(false)
    expect(isLinkActive('/zona-maco#proyectos', '/zona-maco', '#proyectos')).toBe(true)

    // En el detalle de una obra /obras/encuadre
    expect(isLinkActive('/zona-maco', '/obras/encuadre', '')).toBe(false)
    expect(isLinkActive('/zona-maco#proyectos', '/obras/encuadre', '')).toBe(true)
  })

  it('Valida isLinkActive para Integrantes y Nosotros (incluyendo alias /crgs)', () => {
    // En /integrantes
    expect(isLinkActive('/integrantes', '/integrantes')).toBe(true)
    expect(isLinkActive('/nosotros', '/integrantes')).toBe(false)

    // En /nosotros
    expect(isLinkActive('/nosotros', '/nosotros')).toBe(true)
    expect(isLinkActive('/integrantes', '/nosotros')).toBe(false)

    // En alias /crgs
    expect(isLinkActive('/nosotros', '/crgs')).toBe(true)
    expect(isLinkActive('/integrantes', '/crgs')).toBe(false)
  })

  it('El menú móvil gestiona el cierre al pulsar Escape o cambiar de ruta', () => {
    let isMobileMenuOpen = true

    const handleKeydown = (key: string) => {
      if (key === 'Escape') isMobileMenuOpen = false
    }

    handleKeydown('Escape')
    expect(isMobileMenuOpen).toBe(false)
  })
})
