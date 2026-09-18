export interface Advisor {
  id: string
  name: string
  role: string
  badge: string
  image: string
  bio: string
}

export const advisorsList: Advisor[] = [
  {
    id: 'natalia',
    name: 'Natalia Ceballos',
    role: 'Diseño Industrial & Packaging',
    badge: 'ASESORÍA · ZONA MACO 2026',
    image: '/images/figma-asesor-natalia.png',
    bio: 'Natalia es diseñadora industrial con una Maestría en Diseño y Desarrollo de Envase y Embalaje por la Universidad de Monterrey donde se graduó con Proyecto de Innovación Sobresaliente y Cum Laude y un segundo Máster en Diseño Estratégico e Innovación por Elisava en España.'
  },
  {
    id: 'sergio',
    name: 'Sergio Trujillo',
    role: 'Branding & Diseño Tipográfico',
    badge: 'ASESORÍA · ZONA MACO 2026',
    image: '/images/figma-asesor-sergio.png',
    bio: 'Sergio Trujillo es un diseñador multidisciplinario especializado en diseño de marca y diseño tipográfico. Cuenta con una licenciatura en Diseño de la Información por la Universidad de las Américas Puebla, una maestría en Identidad Gráfica y Branding por el London College of Communication y una maestría en Diseño de Tipografía por la University of Reading.'
  },
  {
    id: 'edgar',
    name: 'Edgar Morejón',
    role: 'Biotextiles & Moda Experimental',
    badge: 'ASESORÍA · ZONA MACO 2026',
    image: '/images/figma-asesor-edgar.png',
    bio: "Diseñador y docente con más de 18 años liderando su marca de lencería y 15 años formando talentos en moda. Su trabajo se centra en la investigación y desarrollo de bio textiles, explorando materiales sostenibles y técnicas innovadoras. Integra tecnología y sostenibilidad en clases como diseño experimental. Ha impulsado a estudiantes premiados internacionalmente, IDA International Design Awards, piezas expuestas en museos como MARCO y publicaciones en Harper's Bazaar."
  }
]

export const useAdvisors = () => {
  return {
    advisors: advisorsList
  }
}
