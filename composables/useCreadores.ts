import type { AlumnoCreador } from '~/components/nosotros/NosotrosCreadorCard.vue'

export interface ProyectoCreador {
  id: string
  name: string
  align: 'left' | 'right'
  alumnos: AlumnoCreador[]
}

export const useCreadores = () => {
  const proyectos: ProyectoCreador[] = [
    {
      id: 'cimiento',
      name: 'Cimiento',
      align: 'left',
      alumnos: [
        { name: 'Diana Ruanova', career: 'Diseño Industrial', image: '/images/alumno-diana-ruanova.webp' },
        { name: 'Diego González', career: 'Diseño Industrial', image: '/images/alumno-diego-gonzalez.webp' },
        { name: 'Matías Romero', career: 'Diseño Industrial', image: '/images/alumno-matias-romero.webp' }
      ]
    },
    {
      id: 'curado',
      name: 'Curado',
      align: 'right',
      alumnos: [
        { name: 'Camila León', career: 'Diseño De Modas', image: '/images/alumno-camila-leon.webp' },
        { name: 'Carolina Saldaña', career: 'Diseño Gráfico', image: '/images/alumno-carolina-saldana.webp' },
        { name: 'Paula Aranda', career: 'Diseño De Modas', image: '/images/alumno-paula-aranda.webp' }
      ]
    },
    {
      id: 'encuadre',
      name: 'Encuadre',
      align: 'left',
      alumnos: [
        { name: 'Ximena Silva', career: 'Diseño Industrial', image: '/images/alumno-ximena-silva.webp' },
        { name: 'Daniela García', career: 'Diseño Industrial', image: '/images/alumno-daniela-garcia.webp' },
        { name: 'Regina Hinojosa', career: 'Diseño Industrial', image: '/images/alumno-regina-hinojosa.webp' }
      ]
    },
    {
      id: 'entretiempo',
      name: 'Entretiempo',
      align: 'right',
      alumnos: [
        { name: 'Paulina Amezcua', career: 'Diseño Industrial', image: '/images/alumno-diego-escamilla.webp' },
        { name: 'Oscar Cortés', career: 'Diseño Industrial', image: '/images/alumno-matias-romero.webp' },
        { name: 'Jimena Flores', career: 'Diseño Industrial', image: '/images/alumno-diana-ruanova.webp' }
      ]
    },
    {
      id: 'interconexion',
      name: 'Interconexión',
      align: 'left',
      alumnos: [
        { name: 'Cynthia Cazarin', career: 'Diseño Industrial', image: '/images/alumno-ximena-silva.webp' },
        { name: 'Jorge Lamoy', career: 'Diseño Industrial', image: '/images/alumno-diego-gonzalez.webp' },
        { name: 'Eugenio Gonzalez', career: 'Diseño Industrial', image: '/images/alumno-diego-escamilla.webp' }
      ]
    },
    {
      id: 'mai',
      name: 'Mai',
      align: 'right',
      alumnos: [
        { name: 'Cecilia Mañueco', career: 'Diseño Gráfico', image: '/images/alumno-camila-leon.webp' },
        { name: 'Natalia Saénz', career: 'Diseño Gráfico', image: '/images/alumno-carolina-saldana.webp' },
        { name: 'Isabella Pozas', career: 'Diseño Gráfico', image: '/images/alumno-paula-aranda.webp' },
        { name: 'Sara Abril', career: 'Diseño Gráfico', image: '/images/alumno-daniela-garcia.webp' }
      ]
    },
    {
      id: 'norte-rey',
      name: 'Norte Rey',
      align: 'left',
      alumnos: [
        { name: 'Amanda Peña', career: 'Diseño Gráfico', image: '/images/alumno-regina-galan.webp' },
        { name: 'Isabella Fuentes', career: 'Diseño Gráfico', image: '/images/alumno-melissa-marroquin.webp' }
      ]
    },
    {
      id: 'reliquia',
      name: 'Reliquia',
      align: 'right',
      alumnos: [
        { name: 'Regina Galán', career: 'Diseño Gráfico', image: '/images/alumno-regina-galan.webp' },
        { name: 'Melissa Marroquin', career: 'Diseño Gráfico', image: '/images/alumno-melissa-marroquin.webp' },
        { name: 'Diego Escamilla', career: 'Diseño Industrial', image: '/images/alumno-diego-escamilla.webp' }
      ]
    },
    {
      id: 'roberto',
      name: 'Roberto',
      align: 'left',
      alumnos: [
        { name: 'Roberto Flores', career: 'Diseño Industrial', image: '/images/alumno-diego-gonzalez.webp' },
        { name: 'Marlen Rendon', career: 'Diseño Industrial', image: '/images/alumno-regina-hinojosa.webp' },
        { name: 'Sofia Lammoglia', career: 'Diseño Industrial', image: '/images/alumno-diana-ruanova.webp' }
      ]
    },
    {
      id: 'sagaon',
      name: 'Sagaón',
      align: 'right',
      alumnos: [
        { name: 'Regina Galán', career: 'Diseño Gráfico', image: '/images/alumno-camila-leon.webp' },
        { name: 'Melissa Marroquin', career: 'Diseño Gráfico', image: '/images/alumno-carolina-saldana.webp' }
      ]
    }
  ]

  return { proyectos }
}
