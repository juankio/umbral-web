import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'encuadre', slug: 'encuadre', title: 'Encuadre', year: 2026, price: 500, accentColor: '#13650F', isSelected: true,
    designers: ['Ximena Silva', 'Daniela García', 'María Regina Hinojosa'],
    materials: ['Cemento de color', 'Barro', 'Yeso cerámico', 'Acrílicos de colores', 'Geopolímeros'],
    publishedDate: '28/08/2026', quote: '“Ciudades dentro de Ciudades.”',
    hours: 'Aproximadamente 1234 horas de producción por pieza.',
    description: 'Exploración modular sobre la espacialidad arquitectónica y los límites entre escultura y habitabilidad.',
    subtext: 'Pieza seleccionada para Zona Maco 2027.',
    mainImage: '/images/obra-encuadre-1.webp',
    galleryImages: ['/images/obra-encuadre-1.webp', '/images/obra-encuadre-2.webp', '/images/obra-encuadre-3.webp', '/images/obra-encuadre-hero.webp'],
  },
  {
    id: 'roberto', slug: 'roberto', title: 'Roberto', year: 2026, price: 450, accentColor: '#7B4680', isSelected: false,
    designers: ['Carlos Mendoza', 'Sofía Villarreal'],
    materials: ['Concreto polimérico', 'Acero laminado', 'Pigmentos minerales'],
    publishedDate: '15/09/2026', quote: '“El rigor estructural como expresión de permanencia.”',
    hours: 'Aproximadamente 480 horas de taller y fundición.',
    description: 'Homenaje a la solidez geométrica y la visión cultural del Centro Roberto Garza Sada.',
    subtext: 'Colección permanente CRGS.',
    mainImage: '/images/obra-roberto.webp',
    galleryImages: ['/images/obra-roberto.webp', '/images/crgs-geometry.webp'],
  },
  {
    id: 'interconexion', slug: 'interconexion', title: 'Interconexión', year: 2026, price: 600, accentColor: '#E16A5F', isSelected: false,
    designers: ['Andrés Cantú', 'Valeria Morales'],
    materials: ['Filamentos tensores', 'Aluminio anodizado', 'Resina traslúcida'],
    publishedDate: '02/10/2026', quote: '“Puentes invisibles entre materia y experiencia.”',
    hours: 'Aproximadamente 920 horas de montaje y calibración.',
    description: 'Mapeo sensorial y visual que entrelaza trayectorias humanas con la materialidad del espacio.',
    subtext: 'Instalación de sitio específico.',
    mainImage: '/images/obra-interconexion.webp',
    galleryImages: ['/images/obra-interconexion.webp', '/images/crgs-details.webp'],
  },
  {
    id: 'entretiempo', slug: 'entretiempo', title: 'Entretiempo', year: 2026, price: 550, accentColor: '#E69D37', isSelected: false,
    designers: ['Mauricio Garza', 'Elena Treviño'],
    materials: ['Madera tratada', 'Vidrio templado', 'Latón cepillado'],
    publishedDate: '11/10/2026', quote: '“El tiempo suspendido en el umbral de la luz.”',
    hours: 'Aproximadamente 650 horas de modelado y experimentación.',
    description: 'Pausa lumínica y sombras proyectadas que interactúan con el vano monumental del CRGS.',
    subtext: 'Estudio de luz cenital.',
    mainImage: '/images/obra-entretiempo.webp',
    galleryImages: ['/images/obra-entretiempo.webp', '/images/crgs-building.webp'],
  },
  {
    id: 'sagaon', slug: 'sagaon', title: 'Sagaón', year: 2026, price: 480, accentColor: '#A5BCD5', isSelected: false,
    designers: ['Javier Sagaón', 'Renata Elizondo'],
    materials: ['Cobre electropulido', 'Mármol travertino', 'Tinta litográfica'],
    publishedDate: '24/10/2026', quote: '“Trazos tipográficos convertidos en volumen.”',
    hours: 'Aproximadamente 530 horas de grabado y ensamble.',
    description: 'Composición tipográfica y espacial inspirada en la gráfica editorial y la señalética brutalista.',
    subtext: 'Gráfica ambiental y tridimensional.',
    mainImage: '/images/obra-sagaon.webp',
    galleryImages: ['/images/obra-sagaon.webp', '/images/crgs-facade.svg'],
  },
  {
    id: 'reliquia', slug: 'reliquia', title: 'Reliquia', year: 2026, price: 520, accentColor: '#F6D152', isSelected: false,
    designers: ['Lucía Benítez', 'Mateo Sada'],
    materials: ['Bronce fundido', 'Cerámica de alta temperatura', 'Textil encerado'],
    publishedDate: '05/11/2026', quote: '“El vestigio del pasado como génesis de lo nuevo.”',
    hours: 'Aproximadamente 740 horas de orfebrería experimental.',
    description: 'Reinterpretación contemporánea de artefactos industriales y memoria tangible del taller.',
    subtext: 'Memoria matérica y textil.',
    mainImage: '/images/obra-reliquia.webp',
    galleryImages: ['/images/obra-reliquia.webp', '/images/obra-escultura.webp'],
  },
  {
    id: 'mai', slug: 'mai', title: 'Mai', year: 2026, price: 490, accentColor: '#7B4680', isSelected: false,
    designers: ['Mariana Ibarra', 'Esteban Ramos'],
    materials: ['Neopreno prensado', 'Fibra de carbono', 'Pigmento orgánico'],
    publishedDate: '18/11/2026', quote: '“Fluidez y contención en un único gesto formal.”',
    hours: 'Aproximadamente 610 horas de patronaje y moldeado.',
    description: 'Síntesis orgánica inspirada en los pliegues textiles y la ergonomía del cuerpo en movimiento.',
    subtext: 'Cuerpo, espacio y forma textil.',
    mainImage: '/images/obra-mai.webp',
    galleryImages: ['/images/obra-mai.webp', '/images/hero-arch.svg'],
  },
  {
    id: 'cimiento', slug: 'cimiento', title: 'Cimiento', year: 2026, price: 580, accentColor: '#13650F', isSelected: false,
    designers: ['Rodrigo Lozano', 'Camila Flores'],
    materials: ['Hormigón lavado', 'Piedra caliza triturada', 'Acero de refuerzo'],
    publishedDate: '01/12/2026', quote: '“Sostener no es solo soportar peso, es definir el lugar.”',
    hours: 'Aproximadamente 880 horas de vaciado y texturizado.',
    description: 'El bloque inicial que sostiene la memoria y proyecta la gravedad tectónica del CRGS.',
    subtext: 'Masa, equilibrio y tierra.',
    mainImage: '/images/obra-cimiento.webp',
    galleryImages: ['/images/obra-cimiento.webp', '/images/crgs-building.webp'],
  },
  {
    id: 'curado', slug: 'curado', title: 'Curado', year: 2026, price: 470, accentColor: '#A5BCD5', isSelected: false,
    designers: ['Paulina Garza', 'David Serna'],
    materials: ['Cera microcristalina', 'Hierro oxidado controlado', 'Yeso alabastro'],
    publishedDate: '12/12/2026', quote: '“La pátina es el registro visible de la paciencia.”',
    hours: 'Aproximadamente 450 horas de curado y tratamiento.',
    description: 'Proceso de transformación superficial donde el tiempo sella y embellece la materia viva.',
    subtext: 'Alquimia matérica.',
    mainImage: '/images/obra-curado.webp',
    galleryImages: ['/images/obra-curado.webp', '/images/crgs-details.webp'],
  },
  {
    id: 'desmadre', slug: 'desmadre', title: 'Desmadre', year: 2026, price: 620, accentColor: '#E16A5F', isSelected: false,
    designers: ['Colectivo Taller Abierto CRGS'],
    materials: ['Materiales de desecho de taller', 'Acrílicos fluorescentes', 'Hierro soldado'],
    publishedDate: '20/12/2026', quote: '“Del caos ordenado nace el nuevo lenguaje plástico.”',
    hours: 'Aproximadamente 1100 horas de experimentación colectiva.',
    description: 'Catarsis creativa colectiva que cuestiona la sobriedad mediante fricción estética y energía plástica.',
    subtext: 'Manifiesto de ruptura del taller abierto.',
    mainImage: '/images/obra-desmadre.webp',
    galleryImages: ['/images/obra-desmadre.webp', '/images/tadao-arch.svg'],
  },
]

export function useProjects() {
  const getAllProjects = (): Project[] => projects

  const getProjectBySlug = (slug: string): Project | undefined => {
    return projects.find((p) => p.slug === slug || p.id === slug)
  }

  const getRelatedProjects = (currentSlug: string, limit = 3): Project[] => {
    return projects.filter((p) => p.slug !== currentSlug && p.id !== currentSlug).slice(0, limit)
  }

  return {
    projects,
    getAllProjects,
    getProjectBySlug,
    getRelatedProjects,
  }
}
