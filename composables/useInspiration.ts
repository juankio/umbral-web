import type { InspirationFigure } from '../types'

export interface InspirationSlide {
  id: string
  name: string
  badge: string
  paragraphs: string[]
  image: string
  clipPath: string
  alt: string
}

export const inspirationCarouselSlides: InspirationSlide[] = [
  {
    id: 'margarita',
    name: '† Doña Margarita Garza Sada de Fernández',
    badge: 'Principal benefactora',
    paragraphs: [
      'De su padre, Don Roberto Garza Sada, heredó el amor por el arte, la inteligencia para los negocios, y su compromiso para el desarrollo de la comunidad.',
      'Fue la principal benefactora del Centro Roberto Garza Sada de Arte, Arquitectura y Diseño de la Universidad de Monterrey, el cual visionó como un “portal de conocimiento y un crisol para la creatividad” y para el cual invitó a colaborar en su creación al reconocido arquitecto japonés Tadao Ando.',
      'Durante su vida hizo innumerables contribuciones en educación, arte y filantropía.'
    ],
    image: '/images/margarita-garza-sada.png',
    clipPath: 'polygon(0% 100%, 65% 0%, 100% 100%)',
    alt: 'Doña Margarita Garza Sada de Fernández'
  },
  {
    id: 'roberto',
    name: '† Don Roberto Garza Sada',
    badge: 'Patrón e Inspiración',
    paragraphs: [
      'El Centro lleva el nombre de Don Roberto Garza Sada como homenaje a quien dejara en la UDEM una huella más de su generoso espíritu y de su voluntad por impulsar el desarrollo cultural de nuestra sociedad.',
      'El CRGS, sin duda, cristaliza sus intereses y grandes pasiones. Ingeniero de profesión, Roberto Garza Sada, fue por sus obras y sus talentos personales, un arquitecto, un diseñador y un artista; un espíritu innovador, generoso y sensible que marcó su tiempo y su entorno.',
      'Sus aspiraciones superaron, en mucho, la esfera de la empresa, para volcarse generosamente hacia la promoción del arte, la educación y la cultura.'
    ],
    image: '/images/roberto-garza-sada.png',
    clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)',
    alt: 'Don Roberto Garza Sada'
  },
  {
    id: 'tadao',
    name: 'Tadao Ando',
    badge: 'Premio Pritzker 1995 · Arquitecto',
    paragraphs: [
      'El Centro Roberto Garza Sada (CRGS) fue diseñado por Tadao Ando, ganador del Premio Pritzker 1995 y uno de los arquitectos más reconocidos en el mundo. Su primera obra en Latinoamérica, refleja la trascendencia del proyecto.',
      'Tadao Ando nació en 1941 en Osaka, Japón. En 1969, estableció la compañía Tadao Ando Architect & Associates y, desde entonces, ha sido reconocido por sus numerosos trabajos en Japón y en otros países. Entre sus reconocimientos se incluyen virtualmente todos los premios que Japón concede para la arquitectura y las artes, así como grandes premios internacionales.'
    ],
    image: '/images/tadao-ando.png',
    clipPath: 'polygon(0% 50%, 100% 0%, 100% 100%)',
    alt: 'Tadao Ando'
  }
]

export const inspirationFigures: InspirationFigure[] = [
  {
    id: 'roberto-garza-sada',
    prefix: 'Homenaje',
    name: 'Don Roberto Garza Sada',
    role: 'Ingeniero, filántropo y promotor del arte y la cultura',
    bio: 'Pionero e impulsor incansable de la educación superior en México. Su legado inspira la creación del CRGS como un centro de excelencia para detonar la creatividad, la técnica y el compromiso social.',
    image: '/images/roberto-garza-sada.png',
    quote: '“La educación y el arte transforman de raíz el espíritu de una comunidad.”',
  },
  {
    id: 'margarita-garza-sada',
    prefix: 'Principal benefactora',
    name: 'Doña Margarita Garza Sada de Fernández',
    role: 'Mecenas cultural y benefactora visionaria del CRGS',
    bio: 'Principal benefactora que soñó un espacio sin precedentes para las artes en Monterrey y convocó personalmente a Tadao Ando para crear La Puerta de la Creación, un umbral monumental hacia el conocimiento.',
    image: '/images/margarita-garza-sada.png',
    quote: '“Un espacio donde la imaginación encuentre alas y el arte transforme la vida.”',
  },
  {
    id: 'tadao-ando',
    prefix: 'Premio Pritzker 1995',
    name: 'Tadao Ando',
    role: 'Arquitecto y autor de La Puerta de la Creación',
    bio: 'Maestro de la arquitectura contemporánea y galardonado con el Premio Pritzker en 1995. Diseñó el Centro Roberto Garza Sada como su primera obra construida en Latinoamérica, esculpiendo un vano monumental de concreto que rinde tributo a las montañas de Monterrey.',
    image: '/images/tadao-ando.png',
    quote: '“La arquitectura solo se vuelve memorable cuando dialoga con la luz, el viento y el espíritu de quienes la habitan.”',
  },
]

export function useInspiration() {
  const getAllInspirationFigures = (): InspirationFigure[] => inspirationFigures

  const getInspirationFigureById = (id: string): InspirationFigure | undefined => {
    return inspirationFigures.find((f) => f.id === id)
  }

  return {
    inspirationFigures,
    inspirationCarouselSlides,
    getAllInspirationFigures,
    getInspirationFigureById,
  }
}
