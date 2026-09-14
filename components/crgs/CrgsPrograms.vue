<template>
  <section class="py-16 lg:py-24 bg-[#FAFAFA] border-b border-neutral-200" id="programas">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-neutral-200">
        <div>
          <span class="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-2">
            02 / Oferta Académica
          </span>
          <h2 class="font-barlow font-bold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tightest text-neutral-950">
            Programas Profesionales
          </h2>
        </div>
        <p class="font-barlow text-xl text-neutral-600 font-light max-w-md">
          Formación multidisciplinaria que conecta arte, arquitectura, moda y diseño de producto.
        </p>
      </div>

      <!-- Programs Grid (5 Carreras) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="prog in programs"
          :key="prog.code"
          class="bg-white border border-neutral-200 overflow-hidden flex flex-col justify-between group hover:border-neutral-900 transition-all duration-300 hover:shadow-lg"
        >
          <div>
            <!-- Image Frame -->
            <div class="relative aspect-[16/10] bg-neutral-100 overflow-hidden">
              <img
                :src="prog.image"
                :alt="prog.name"
                class="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-500"
              />
              <div class="absolute top-3 left-3">
                <span class="px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-widest bg-neutral-950 text-white">
                  {{ prog.code }}
                </span>
              </div>
              <div class="absolute bottom-3 right-3">
                <span class="px-2 py-0.5 text-[11px] font-mono uppercase bg-white/90 text-neutral-800 border border-neutral-200">
                  {{ prog.duration }}
                </span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <span class="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block mb-1">
                Licenciatura Profesional
              </span>
              <h3 class="font-barlow font-bold text-2xl uppercase tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors">
                {{ prog.name }}
              </h3>
              <p class="font-sans text-xs sm:text-sm text-neutral-600 mt-3 leading-relaxed">
                {{ prog.description }}
              </p>
            </div>
          </div>

          <!-- Bottom Footer -->
          <div class="p-6 pt-0 border-t border-neutral-100 mt-4 flex items-center justify-between font-mono text-xs">
            <span class="text-neutral-400">{{ prog.credits }}</span>
            <a
              :href="prog.link"
              target="_blank"
              rel="noopener noreferrer"
              class="font-barlow font-bold text-sm uppercase tracking-wider text-neutral-900 group-hover:underline flex items-center gap-1"
            >
              Plan de Estudios
              <svg class="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 12L12 4M5 4h7v7" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Program {
  code: string
  name: string
  duration: string
  credits: string
  description: string
  image: string
  link: string
}

const programs: Program[] = [
  {
    code: 'LINT',
    name: 'Diseño de Interiores',
    duration: '9 Semestres',
    credits: 'Acreditación CACEI',
    description: 'Transforma atmósferas y espacios habitables integrando iluminación, ergonomía, tecnología constructiva y psicología ambiental.',
    image: '/images/carrera-lint.png',
    link: 'https://www.udem.edu.mx/es/arte-arquitectura-diseno/licenciatura-en-diseno-de-interiores'
  },
  {
    code: 'LDM',
    name: 'Diseño de Modas',
    duration: '9 Semestres',
    credits: 'Acreditación Internacional',
    description: 'Crea colecciones textiles, indumentaria de vanguardia y patrones tridimensionales con un enfoque en sostenibilidad e identidad contemporánea.',
    image: '/images/carrera-design.png',
    link: 'https://www.udem.edu.mx/es/arte-arquitectura-diseno/licenciatura-en-diseno-de-modas'
  },
  {
    code: 'LDG',
    name: 'Diseño Gráfico',
    duration: '9 Semestres',
    credits: 'Premios Quórum & Behance',
    description: 'Domina los sistemas de comunicación visual, identidades de marca, tipografía experimental, diseño editorial y experiencias multimedia.',
    image: '/images/crgs-details.png',
    link: 'https://www.udem.edu.mx/es/arte-arquitectura-diseno/licenciatura-en-diseno-grafico'
  },
  {
    code: 'LDI',
    name: 'Diseño Industrial',
    duration: '9 Semestres',
    credits: 'Convenios Red Dot',
    description: 'Diseña objetos, mobiliario, productos manufacturados y soluciones para la industria con alto valor estético, funcional y productivo.',
    image: '/images/crgs-geometry.png',
    link: 'https://www.udem.edu.mx/es/arte-arquitectura-diseno/licenciatura-en-diseno-industrial'
  },
  {
    code: 'LART',
    name: 'Artes',
    duration: '9 Semestres',
    credits: 'Producción en Taller',
    description: 'Desarrolla discursos plásticos, escultura monumental, pintura, instalación y nuevos medios con sólida formación teórico-crítica.',
    image: '/images/obra-escultura.png',
    link: 'https://www.udem.edu.mx/es/arte-arquitectura-diseno/licenciatura-en-artes'
  }
]
</script>
