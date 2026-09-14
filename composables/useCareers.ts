import type { Career, CareerCode } from '../types'

export const careers: Career[] = [
  {
    code: 'LINT',
    name: 'Diseño de Interiores',
    title: 'Licenciatura en Diseño de Interiores',
    description:
      'Estudia la Licenciatura en Diseño de Interiores en UDEM, y transforma diferentes espacios con creatividad, creando ambientes funcionales, estéticos e impactantes.',
    image: '/images/carrera-lint.png',
    features: [
      'Espacios habitables, comerciales y efímeros',
      'Iluminación y confort acústico',
      'Materiales sustentables y tecnología aplicada',
    ],
  },
  {
    code: 'LDM',
    name: 'Diseño de Moda',
    title: 'Licenciatura en Diseño de Moda',
    description:
      'Estudia la Licenciatura en Diseño de Moda en UDEM y crea tendencias innovadoras con una formación integral en diseño, moda en la industria textil.',
    image: '/images/carrera-design.png',
    features: [
      'Patronaje experimental y alta confección',
      'Innovación textil e indumentaria circular',
      'Dirección creativa y estilismo',
    ],
  },
  {
    code: 'LDG',
    name: 'Diseño Gráfico',
    title: 'Licenciatura en Diseño Gráfico',
    description:
      'Estudia la Licenciatura en Diseño Gráfico en UDEM y desarrolla tu creatividad con técnicas innovadoras, preparándote para liderar el mundo del diseño visual.',
    image: '/images/carrera-design.png',
    features: [
      'Identidad visual y branding estratégico',
      'Tipografía y diseño editorial contemporáneo',
      'Narrativas digitales y diseño de interacción',
    ],
  },
  {
    code: 'LDI',
    name: 'Diseño Industrial',
    title: 'Licenciatura en Diseño Industrial',
    description:
      'Estudia la Licenciatura en Diseño Industrial en UDEM y desarrolla productos innovadores con un enfoque en funcionalidad, estética para el mercado global.',
    image: '/images/carrera-lint.png',
    features: [
      'Desarrollo y manufactura de productos',
      'Modelado 3D, prototipado rápido y ergonomía',
      'Soluciones sostenibles para el mercado global',
    ],
  },
]

export function useCareers() {
  const getAllCareers = (): Career[] => careers

  const getCareerByCode = (code: CareerCode | string): Career | undefined => {
    return careers.find((c) => c.code.toLowerCase() === code.toLowerCase())
  }

  return {
    careers,
    getAllCareers,
    getCareerByCode,
  }
}
