export type CareerCode = 'LINT' | 'LDM' | 'LDG' | 'LDI' | 'LART'

export interface Project {
  id: string
  slug: string
  title: string
  year: number
  price: number
  designers: string[]
  description: string
  subtext?: string
  hours: string
  quote: string
  materials: string[]
  publishedDate: string
  mainImage: string
  galleryImages: string[]
  accentColor: string
  isSelected?: boolean
}

export interface Career {
  code: CareerCode
  name: string
  title: string
  description: string
  image: string
  features?: string[]
}

export interface InspirationFigure {
  id: string
  name: string
  prefix?: string
  role: string
  bio: string
  image: string
  quote: string
}
