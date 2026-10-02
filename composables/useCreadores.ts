import type { AlumnoCreador } from '~/components/nosotros/NosotrosCreadorCard.vue'

export interface ProyectoCreador {
  id: string
  name: string
  align: 'left' | 'right'
  alumnos: AlumnoCreador[]
}

// Las 6 fotografías oficiales solicitadas por el usuario para los 10 equipos
const FOTO_DIANA = '/images/alumno-diana-ruanova.webp'
const FOTO_DIEGO = '/images/alumno-diego-gonzalez.webp'
const FOTO_MATIAS = '/images/alumno-matias-romero.webp'
const FOTO_CAMILA = '/images/alumno-camila-leon.webp'
const FOTO_CAROLINA = '/images/alumno-carolina-saldana.webp'
const FOTO_PAULA = '/images/alumno-paula-aranda.webp'

export const useCreadores = () => {
  const proyectos: ProyectoCreador[] = [
    {
      id: 'cimiento',
      name: 'Cimiento',
      align: 'left',
      alumnos: [
        { name: 'Diana Ruanova', career: 'Diseño Industrial', image: FOTO_DIANA },
        { name: 'Diego González', career: 'Diseño Industrial', image: FOTO_DIEGO },
        { name: 'Matías Romero', career: 'Diseño Industrial', image: FOTO_MATIAS }
      ]
    },
    {
      id: 'curado',
      name: 'Curado',
      align: 'right',
      alumnos: [
        { name: 'Camila León', career: 'Diseño De Modas', image: FOTO_CAMILA },
        { name: 'Carolina Saldaña', career: 'Diseño Gráfico', image: FOTO_CAROLINA },
        { name: 'Paula Aranda', career: 'Diseño De Modas', image: FOTO_PAULA }
      ]
    },
    {
      id: 'encuadre',
      name: 'Encuadre',
      align: 'left',
      alumnos: [
        { name: 'Ximena Silva', career: 'Diseño Industrial', image: FOTO_DIANA },
        { name: 'Daniela García', career: 'Diseño Industrial', image: FOTO_CAMILA },
        { name: 'Regina Hinojosa', career: 'Diseño Industrial', image: FOTO_CAROLINA }
      ]
    },
    {
      id: 'entretiempo',
      name: 'Entretiempo',
      align: 'right',
      alumnos: [
        { name: 'Paulina Amezcua', career: 'Diseño Industrial', image: FOTO_PAULA },
        { name: 'Oscar Cortés', career: 'Diseño Industrial', image: FOTO_DIEGO },
        { name: 'Jimena Flores', career: 'Diseño Industrial', image: FOTO_MATIAS }
      ]
    },
    {
      id: 'interconexion',
      name: 'Interconexión',
      align: 'left',
      alumnos: [
        { name: 'Cynthia Cazarin', career: 'Diseño Industrial', image: FOTO_CAMILA },
        { name: 'Jorge Lamoy', career: 'Diseño Industrial', image: FOTO_DIEGO },
        { name: 'Eugenio Gonzalez', career: 'Diseño Industrial', image: FOTO_MATIAS }
      ]
    },
    {
      id: 'mai',
      name: 'Mai',
      align: 'right',
      alumnos: [
        { name: 'Cecilia Mañueco', career: 'Diseño Gráfico', image: FOTO_DIANA },
        { name: 'Natalia Saénz', career: 'Diseño Gráfico', image: FOTO_CAROLINA },
        { name: 'Isabella Pozas', career: 'Diseño Gráfico', image: FOTO_PAULA },
        { name: 'Sara Abril', career: 'Diseño Gráfico', image: FOTO_CAMILA }
      ]
    },
    {
      id: 'norte-rey',
      name: 'Norte Rey',
      align: 'left',
      alumnos: [
        { name: 'Amanda Peña', career: 'Diseño Gráfico', image: FOTO_DIANA },
        { name: 'Isabella Fuentes', career: 'Diseño Gráfico', image: FOTO_CAROLINA }
      ]
    },
    {
      id: 'reliquia',
      name: 'Reliquia',
      align: 'right',
      alumnos: [
        { name: 'Regina Galán', career: 'Diseño Gráfico', image: FOTO_PAULA },
        { name: 'Melissa Marroquin', career: 'Diseño Gráfico', image: FOTO_CAMILA },
        { name: 'Diego Escamilla', career: 'Diseño Industrial', image: FOTO_DIEGO }
      ]
    },
    {
      id: 'roberto',
      name: 'Roberto',
      align: 'left',
      alumnos: [
        { name: 'Roberto Flores', career: 'Diseño Industrial', image: FOTO_MATIAS },
        { name: 'Marlen Rendon', career: 'Diseño Industrial', image: FOTO_DIANA },
        { name: 'Sofia Lammoglia', career: 'Diseño Industrial', image: FOTO_CAROLINA }
      ]
    },
    {
      id: 'sagaon',
      name: 'Sagaón',
      align: 'right',
      alumnos: [
        { name: 'Regina Galán', career: 'Diseño Gráfico', image: FOTO_CAMILA },
        { name: 'Melissa Marroquin', career: 'Diseño Gráfico', image: FOTO_PAULA }
      ]
    }
  ]

  return { proyectos }
}
