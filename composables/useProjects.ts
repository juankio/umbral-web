import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'encuadre', slug: 'encuadre', title: 'Encuadre', year: 2026, price: 500, accentColor: '#13650F', isSelected: true,
    designers: ['Ximena Silva', 'Daniela García', 'Regina Hinojosa'],
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
    designers: ['Roberto Flores', 'Marlen Rendon', 'Sofia Lammoglia'],
    materials: ['Concreto polimérico', 'Acero laminado', 'Pigmentos minerales'],
    publishedDate: '15/09/2026', quote: '“El rigor estructural como expresión de permanencia.”',
    hours: 'Aproximadamente 480 horas de taller y fundición.',
    description: 'Identidad Regiomontana: Conexión directa con la herencia industrial y la disponibilidad del acero en Nuevo León.\n\nEsencia Brutalista: Estética cruda, honesta y de alto impacto visual mediante la lámina de acero.\n\nSe busca que la persona que compre nuestro producto, se lleve una parte del crgs indirectamente y que sea parte de su espacio.',
    subtext: 'Colección permanente CRGS.',
    mainImage: '/images/obra-roberto.webp',
    galleryImages: ['/images/obra-roberto.webp', '/images/crgs-geometry.webp'],
  },
  {
    id: 'interconexion', slug: 'interconexion', title: 'Interconexión', year: 2026, price: 600, accentColor: '#E16A5F', isSelected: false,
    designers: ['Cynthia Cazarin', 'Jorge Lamoy', 'Eugenio Gonzalez'],
    materials: ['Filamentos tensores', 'Aluminio anodizado', 'Resina traslúcida'],
    publishedDate: '02/10/2026', quote: '“Puentes invisibles entre materia y experiencia.”',
    hours: 'Aproximadamente 920 horas de montaje y calibración.',
    description: 'La propuesta nace de la combinación entre la identidad industrial y la cultura del norte de México y el brutalismo. A través de una jarra y un conjunto de cuatro vasos, se busca representar la unión familiar en la hora de la comida tan característica de Monterrey, y los colores junto con el diseño el brutalismo.\n\nLa cerámica, el concreto y el acero de la varilla se integran en piezas de geometría sólida, donde cada material expresa una parte de la identidad del concepto: calidez, unión e industria.',
    subtext: 'Instalación de sitio específico.',
    mainImage: '/images/obra-interconexion.webp',
    galleryImages: ['/images/obra-interconexion.webp', '/images/crgs-details.webp'],
  },
  {
    id: 'entretiempo', slug: 'entretiempo', title: 'Entretiempo', year: 2026, price: 550, accentColor: '#E69D37', isSelected: false,
    designers: ['Paulina Amezcua', 'Oscar Cortés', 'Jimena Flores'],
    materials: ['Madera tratada', 'Vidrio templado', 'Latón cepillado'],
    publishedDate: '11/10/2026', quote: '“El tiempo suspendido en el umbral de la luz.”',
    hours: 'Aproximadamente 650 horas de modelado y experimentación.',
    description: 'El CRGS, como obra de arte brutalista, interrumpe, impone y revela un antes y un después en la vida de cada uno de las personas que cruzan sus puertas.',
    subtext: 'Estudio de luz cenital.',
    mainImage: '/images/obra-entretiempo.webp',
    galleryImages: ['/images/obra-entretiempo.webp', '/images/crgs-building.webp'],
  },
  {
    id: 'sagaon', slug: 'sagaon', title: 'Sagaón', year: 2026, price: 480, accentColor: '#A5BCD5', isSelected: false,
    designers: ['Camila Vargas', 'Graciela Santiago'],
    materials: ['Cobre electropulido', 'Mármol travertino', 'Tinta litográfica'],
    publishedDate: '24/10/2026', quote: '“Trazos tipográficos convertidos en volumen.”',
    hours: 'Aproximadamente 530 horas de grabado y ensamble.',
    description: 'Nace de la convivencia entre dos fuerzas: la naturaleza imponente del paisaje norteño y la transformación de una ciudad industrial. La sierra, la piedra caliza, las grutas y el agua se traducen en formas, vacíos y texturas, mientras materiales como el encino, la anacahuita, el cuero y la palma conservan fragmentos de ese territorio.\n\nEl jarrón convierte el paisaje en materia: su vacío evoca la Huasteca y sus encapsulados preservan la identidad natural y artesanal del norte, creando un objeto donde lo áspero y lo orgánico, lo permanente y lo efímero, coexisten.',
    subtext: 'Gráfica ambiental y tridimensional.',
    mainImage: '/images/obra-sagaon.webp',
    galleryImages: ['/images/obra-sagaon.webp', '/images/crgs-facade.svg'],
  },
  {
    id: 'reliquia', slug: 'reliquia', title: 'Reliquia', year: 2026, price: 520, accentColor: '#F6D152', isSelected: false,
    designers: ['Regina Galán', 'Melissa Marroquin', 'Diego Escamilla'],
    materials: ['Bronce fundido', 'Cerámica de alta temperatura', 'Textil encerado'],
    publishedDate: '05/11/2026', quote: '“El vestigio del pasado como génesis de lo nuevo.”',
    hours: 'Aproximadamente 740 horas de orfebrería experimental.',
    description: 'Una parte de nuestra cultura noroestense que pasa desapercibido, pero ha dejado una huella profunda en nuestra historia. La citricultura como reflejo de resiliencia, esfuerzo y tradición, ha marcado generaciones enteras y se convierte hoy en una reliquia que preserva el legado de nuestra tierra.',
    subtext: 'Memoria matérica y textil.',
    mainImage: '/images/obra-reliquia.webp',
    galleryImages: ['/images/obra-reliquia.webp', '/images/obra-escultura.webp'],
  },
  {
    id: 'mai', slug: 'mai', title: 'Mai', year: 2026, price: 490, accentColor: '#7B4680', isSelected: false,
    designers: ['Cecilia Mañueco', 'Natalia Saénz', 'Isabella Pozas', 'Sara Abril'],
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
    designers: ['Diana Ruanova', 'Diego González', 'Matías Romero'],
    materials: ['Hormigón lavado', 'Piedra caliza triturada', 'Acero de refuerzo'],
    publishedDate: '01/12/2026', quote: '“Sostener no es solo soportar peso, es definir el lugar.”',
    hours: 'Aproximadamente 880 horas de vaciado y texturizado.',
    description: 'Esta pieza busca interpretar el brutalismo del edificio CRGS a partir de la idea de un diseño honesto, donde la estructura se muestra tal como es, sin añadir elementos decorativos que busquen ocultarla o disfrazarla.',
    subtext: 'Masa, equilibrio y tierra.',
    mainImage: '/images/obra-cimiento.webp',
    galleryImages: ['/images/obra-cimiento.webp', '/images/crgs-building.webp'],
  },
  {
    id: 'curado', slug: 'curado', title: 'Curado', year: 2026, price: 470, accentColor: '#A5BCD5', isSelected: false,
    designers: ['Camila León', 'Carolina Saldaña', 'Paula Aranda'],
    materials: ['Cera microcristalina', 'Hierro oxidado controlado', 'Yeso alabastro'],
    publishedDate: '12/12/2026', quote: '“La pátina es el registro visible de la paciencia.”',
    hours: 'Aproximadamente 450 horas de curado y tratamiento.',
    description: 'México es un país con una cultura muy abundante, parte de esa cultura es la la gente cotidiana, específicamente como deciden representar, vestir.\n\nNuevo León siendo un estado pegado a estados unidos gana un reconocimiento de ser un lugar con una gran influencia estadounidense, ¿que tan "mexicano" queda nuevo león?\n\nQueremos retar el estereotipo, enseñar quien es el neoleonés actual, puede ser exactamente quien piensas o puede que no.\n\nLa indumentaria es una de las maneras de representarnos al mundo, hay muchas decisiones detrás de lo que usamos, por mas inocentes o "sin importancia" que parezcan. La vestimenta representa una manera de identidad y que mejor forma de demostrar quien es el neoleonés de hoy que con la que se pone.\n\nNo buscamos clasificar a las personas, sino observar las distintas realidades que conforman un mismo estado.',
    subtext: 'Alquimia matérica.',
    mainImage: '/images/obra-curado.webp',
    galleryImages: ['/images/obra-curado.webp', '/images/crgs-details.webp'],
  },
  {
    id: 'norte-rey', slug: 'norte-rey', title: 'Norte Rey', year: 2026, price: 620, accentColor: '#E16A5F', isSelected: false,
    designers: ['Amanda Peña', 'Isabella Fuentes'],
    materials: ['Materiales de desecho de taller', 'Acrílicos fluorescentes', 'Hierro soldado'],
    publishedDate: '20/12/2026', quote: '“Del caos ordenado nace el nuevo lenguaje plástico.”',
    hours: 'Aproximadamente 1100 horas de experimentación colectiva.',
    description: '"Norte Rey" toma como punto de partida el vinilo como objeto y como experiencia. Su formato circular, inspirado directamente en un disco, se despliega hacia abajo, revelando progresivamente el contenido como si se estuviera descubriendo un álbum nuevo.\n\nCada edición funciona como una cápsula de su genero, acompañada por un CD con sonidos emblemáticos y una postal coleccionable.\n\nTres géneros. Tres escenas. Un mismo territorio.',
    subtext: 'Manifiesto de ruptura del taller abierto.',
    mainImage: '/images/obra-desmadre.webp',
    galleryImages: ['/images/obra-desmadre.webp', '/images/tadao-arch.svg'],
  },
]

export function useProjects() {
  const getAllProjects = (): Project[] => projects

  const getProjectBySlug = (slug: string): Project | undefined => {
    if (slug === 'desmadre') return projects.find((p) => p.slug === 'norte-rey' || p.id === 'norte-rey')
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
