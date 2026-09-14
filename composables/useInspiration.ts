import type { InspirationFigure } from '../types'

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
    getAllInspirationFigures,
    getInspirationFigureById,
  }
}
