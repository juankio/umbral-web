export interface Obra {
  slug: string
  title: string
  subtitle?: string
  category: 'Diseño' | 'Arte Contemporáneo' | 'Diseño Emergente' | 'Arte Moderno'
  price: string
  year: string
  edition?: string
  designers: string[]
  materials: string
  dimensions: string
  hours: string
  quote: string
  description: string
  heroImage: string
  gallery: string[]
  colorBadge?: string
}

export const useObras = () => {
  const obras: Obra[] = [
    {
      slug: 'encuadre',
      title: 'Encuadre',
      subtitle: 'Exploración geométrica del vacío y la masa',
      category: 'Diseño',
      price: '$500 USD',
      year: '2026',
      edition: 'Edición limitada 1/10',
      designers: ['Ana Sofía Martínez', 'Carlos Lozano'],
      materials: 'Concreto arquitectónico pulido, acero negro oxidado y vidrio óptico',
      dimensions: '45 × 32 × 18 cm',
      hours: '140 horas de producción y acabado artesanal',
      quote: 'El encuadre no encierra el espacio; le otorga una pausa para dialogar con la luz natural.',
      description: 'Inspirada en el monumental corte parabólico de Tadao Ando en La Puerta de la Creación, "Encuadre" condensa la tensión entre la pesadez telúrica del concreto y la permeabilidad lumínica. La pieza articula planos inclinados que enmarcan sombras dinámicas según el cenit solar.',
      heroImage: '/images/obra-encuadre-hero.png',
      gallery: [
        '/images/obra-encuadre-hero.png',
        '/images/obra-encuadre-1.png',
        '/images/obra-encuadre-2.png',
        '/images/obra-encuadre-3.png'
      ],
      colorBadge: 'bg-neutral-900 text-white'
    },
    {
      slug: 'roberto',
      title: 'Roberto',
      subtitle: 'Homenaje a la vocación filantrópica e industrial',
      category: 'Arte Moderno',
      price: '$750 USD',
      year: '2026',
      edition: 'Pieza única',
      designers: ['Mateo Villarreal'],
      materials: 'Bronce vaciado a la cera perdida, base en cantera gris',
      dimensions: '60 × 25 × 25 cm',
      hours: '180 horas',
      quote: 'La materia recuerda el carácter firme de quienes levantaron una escuela sobre la montaña.',
      description: 'Una abstracción tectónica de la solidez y visión del mecenazgo industrial regiomontano. Superficies ásperas contrastadas con aristas afiladas como navajas de afeitar.',
      heroImage: '/images/obra-roberto.png',
      gallery: [
        '/images/obra-roberto.png',
        '/images/obra-escultura.png'
      ],
      colorBadge: 'bg-umbral-terracotta text-white'
    },
    {
      slug: 'interconexion',
      title: 'Interconexión',
      subtitle: 'Flujos neuronales y convergencia multidisciplinaria',
      category: 'Diseño Emergente',
      price: '$420 USD',
      year: '2026',
      edition: 'Serie de 5',
      designers: ['Mariana Garza', 'Diego Sada'],
      materials: 'Aluminio anodizado mate y filamento bio-polímero translúcido',
      dimensions: '38 × 38 × 12 cm',
      hours: '95 horas',
      quote: 'Ninguna disciplina existe aislada dentro del umbral del CRGS.',
      description: 'Representa el nodo colaborativo entre arte, diseño y tecnología. La urdimbre de líneas genera una celosía cinemática que muta según la perspectiva del observador.',
      heroImage: '/images/obra-interconexion.png',
      gallery: [
        '/images/obra-interconexion.png',
        '/images/crgs-details.png'
      ],
      colorBadge: 'bg-umbral-green text-white'
    },
    {
      slug: 'entretiempo',
      title: 'Entretiempo',
      subtitle: 'Pausa gravitacional sobre el hormigón',
      category: 'Arte Contemporáneo',
      price: '$890 USD',
      year: '2026',
      edition: 'Edición 2/3',
      designers: ['Valentina Morales'],
      materials: 'Resina fenólica ámbar, escoria volcánica y latón cepillado',
      dimensions: '52 × 30 × 30 cm',
      hours: '210 horas',
      quote: 'El tiempo se suspende en el pliegue entre el día y la noche.',
      description: 'Pieza que captura la temporalidad de la luz en el cañón de Huasteca. Los estratos translúcidos retienen gradientes cálidos de oro y ámbar.',
      heroImage: '/images/obra-entretiempo.png',
      gallery: [
        '/images/obra-entretiempo.png',
        '/images/obra-encuadre-2.png'
      ],
      colorBadge: 'bg-umbral-amber text-white'
    },
    {
      slug: 'sagaon',
      title: 'Sagaón',
      subtitle: 'Tipografía monumental como monumento táctil',
      category: 'Diseño',
      price: '$380 USD',
      year: '2026',
      edition: 'Edición de 12',
      designers: ['Emilio Sagaón', 'CRGS Type Lab'],
      materials: 'Madera de mezquite recuperado y tinta tipográfica mineral',
      dimensions: '70 × 50 × 6 cm',
      hours: '85 horas',
      quote: 'La letra es estructura antes de ser sonido.',
      description: 'Una exploración de la letra no como signo legible inmediato sino como volumen arquitectónico habitable y contundente.',
      heroImage: '/images/obra-sagaon.png',
      gallery: [
        '/images/obra-sagaon.png',
        '/images/obra-encuadre-1.png'
      ],
      colorBadge: 'bg-neutral-800 text-white'
    },
    {
      slug: 'reliquia',
      title: 'Reliquia',
      subtitle: 'Testimonio mineral de la cantera de Monterrey',
      category: 'Arte Moderno',
      price: '$620 USD',
      year: '2026',
      edition: 'Pieza única',
      designers: ['Lucía Domínguez'],
      materials: 'Piedra caliza erosionada y hoja de plata pura 999',
      dimensions: '35 × 28 × 22 cm',
      hours: '110 horas',
      quote: 'La montaña nos provee la piedra y el viento le talla su memoria.',
      description: 'Pieza arqueológica ficticia rescatada del subsuelo donde se asientan las zapatas de La Puerta de la Creación.',
      heroImage: '/images/obra-reliquia.png',
      gallery: [
        '/images/obra-reliquia.png',
        '/images/crgs-details.png'
      ],
      colorBadge: 'bg-neutral-700 text-white'
    },
    {
      slug: 'mai',
      title: 'Mai',
      subtitle: 'Cerámica de alta temperatura y cenizas de encino',
      category: 'Diseño Emergente',
      price: '$340 USD',
      year: '2026',
      edition: 'Serie de 8',
      designers: ['Camila Tanaka Treviño'],
      materials: 'Gres refractario, esmalte shino y chamota fina',
      dimensions: '28 × 24 × 24 cm',
      hours: '75 horas',
      quote: 'El fuego concluye la conversación que las manos iniciaron con el barro.',
      description: 'Cruce entre la tradición cerámica japonesa y la flora del semidesierto neoleonés, evocando simplicidad wabi-sabi.',
      heroImage: '/images/obra-mai.png',
      gallery: [
        '/images/obra-mai.png',
        '/images/obra-encuadre-3.png'
      ],
      colorBadge: 'bg-umbral-terracotta text-white'
    },
    {
      slug: 'cimiento',
      title: 'Cimiento',
      subtitle: 'Viga de compresión y anclaje gravitacional',
      category: 'Diseño',
      price: '$1,150 USD',
      year: '2026',
      edition: 'Edición 1/5',
      designers: ['Sebastián Cruz', 'Rodrigo Ramos'],
      materials: 'Viga IPR recuperada, concreto aparente sellado',
      dimensions: '110 × 40 × 35 cm',
      hours: '160 horas',
      quote: 'Todo vuelo arquitectónico precisa un punto de apoyo inexorable.',
      description: 'Tributo directo al cálculo estructural del voladizo de 30 metros del edificio CRGS. Fuerza pura y equilibrio límite.',
      heroImage: '/images/obra-cimiento.png',
      gallery: [
        '/images/obra-cimiento.png',
        '/images/crgs-building.png'
      ],
      colorBadge: 'bg-neutral-900 text-white'
    },
    {
      slug: 'curado',
      title: 'Curado',
      subtitle: 'Monocromo táctil y pigmentos botánicos',
      category: 'Arte Contemporáneo',
      price: '$590 USD',
      year: '2026',
      edition: 'Pieza única',
      designers: ['Paulina Treviño'],
      materials: 'Lino belga crudo, carbón de ébano y cola de conejo',
      dimensions: '120 × 90 cm',
      hours: '130 horas',
      quote: 'El lienzo respira cuando la pintura renuncia a la saturación.',
      description: 'Superficie austera que absorbe la luz incidente, creando una presencia casi táctil en el muro.',
      heroImage: '/images/obra-curado.png',
      gallery: [
        '/images/obra-curado.png',
        '/images/crgs-geometry.png'
      ],
      colorBadge: 'bg-neutral-800 text-white'
    },
    {
      slug: 'desmadre',
      title: 'Desmadre',
      subtitle: 'Orden fractal nacido del caos de taller',
      category: 'Diseño Emergente',
      price: '$480 USD',
      year: '2026',
      edition: 'Serie de 4',
      designers: ['Rodrigo Garza', 'Estudio Repentina'],
      materials: 'Sobrantes de corte CNC, acrílico fundido y resina epóxica',
      dimensions: '55 × 45 × 15 cm',
      hours: '105 horas',
      quote: 'En el clímax de la repentina, el desorden se transforma en rigor geométrico.',
      description: 'Una oda al proceso frenético de las 48 horas de la Repentina. Los descartes de corte industrial son reensamblados en una pieza vibrante.',
      heroImage: '/images/obra-desmadre.png',
      gallery: [
        '/images/obra-desmadre.png',
        '/images/hero-arch.svg'
      ],
      colorBadge: 'bg-umbral-purple text-white'
    }
  ]

  const getObraBySlug = (slug: string): Obra | undefined => {
    return obras.find(o => o.slug === slug)
  }

  const getRelatedObras = (currentSlug: string, limit = 4): Obra[] => {
    return obras.filter(o => o.slug !== currentSlug).slice(0, limit)
  }

  return {
    obras,
    getObraBySlug,
    getRelatedObras
  }
}
