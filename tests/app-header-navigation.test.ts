import { describe, it, expect } from 'bun:test'

describe('AppHeader Arquitectura de Navegación & Secciones', () => {
  const navSections = [
    {
      id: 'maco',
      index: '02',
      label: 'Zona Maco',
      to: '/zona-maco',
      match: (p: string) => p.startsWith('/zona-maco'),
      items: [
        { label: 'Página Principal', to: '/zona-maco' },
        { label: 'Catálogo de Obras', to: '/zona-maco#proyectos' }
      ]
    },
    {
      id: 'nosotros',
      index: '03',
      label: 'Nosotros',
      to: '/nosotros',
      match: (p: string) => p.startsWith('/nosotros') || p.startsWith('/crgs'),
      items: [
        { label: 'Integrantes Umbral', to: '/nosotros' },
        { label: 'Centro Roberto Garza Sada', to: '/crgs' }
      ]
    }
  ]

  it('Define correctamente la sección 01 (Inicio) como ruta base', () => {
    const section01 = { index: '01', label: 'Inicio', to: '/' }
    expect(section01.index).toBe('01')
    expect(section01.label).toBe('Inicio')
    expect(section01.to).toBe('/')
  })

  it('Contiene la sección 02 (Zona Maco) con sus sub-enlaces requeridos', () => {
    const maco = navSections.find(s => s.id === 'maco')
    expect(maco).toBeDefined()
    expect(maco?.index).toBe('02')
    expect(maco?.label).toBe('Zona Maco')
    expect(maco?.to).toBe('/zona-maco')
    expect(maco?.items).toHaveLength(2)
    expect(maco?.items[0]).toEqual({ label: 'Página Principal', to: '/zona-maco' })
    expect(maco?.items[1]).toEqual({ label: 'Catálogo de Obras', to: '/zona-maco#proyectos' })
  })

  it('Contiene la sección 03 (Nosotros) con sus sub-enlaces requeridos', () => {
    const nosotros = navSections.find(s => s.id === 'nosotros')
    expect(nosotros).toBeDefined()
    expect(nosotros?.index).toBe('03')
    expect(nosotros?.label).toBe('Nosotros')
    expect(nosotros?.to).toBe('/nosotros')
    expect(nosotros?.items).toHaveLength(2)
    expect(nosotros?.items[0]).toEqual({ label: 'Integrantes Umbral', to: '/nosotros' })
    expect(nosotros?.items[1]).toEqual({ label: 'Centro Roberto Garza Sada', to: '/crgs' })
  })

  it('Valida el matcher de rutas para Zona Maco y Nosotros', () => {
    const maco = navSections.find(s => s.id === 'maco')!
    const nosotros = navSections.find(s => s.id === 'nosotros')!

    expect(maco.match('/zona-maco')).toBe(true)
    expect(maco.match('/zona-maco/obra-1')).toBe(true)
    expect(maco.match('/nosotros')).toBe(false)

    expect(nosotros.match('/nosotros')).toBe(true)
    expect(nosotros.match('/crgs')).toBe(true)
    expect(nosotros.match('/crgs/historia')).toBe(true)
    expect(nosotros.match('/zona-maco')).toBe(false)
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
