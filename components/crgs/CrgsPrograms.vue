<template>
  <section id="programas-profesional" class="py-20 lg:py-32 bg-white border-b border-neutral-200 overflow-hidden">
    <div class="max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-16">
      <!-- Encabezado 1:1 Figma (Barlow Condensed 48px) -->
      <div class="max-w-5xl mb-20 lg:mb-28 space-y-4">
        <span class="font-barlow text-xs sm:text-sm uppercase tracking-[0.25em] text-neutral-500 font-semibold block">
          02 / Oferta Académica CRGS
        </span>
        <h2 class="font-barlow font-bold text-3xl sm:text-4xl lg:text-[48px] uppercase tracking-tight text-[#070707] leading-none">
          PROGRAMAS PROFESIONAL
        </h2>
        <p class="font-barlow text-2xl sm:text-3xl lg:text-[48px] font-normal text-neutral-800 leading-[1.08] tracking-tight">
          Aprende en clases de estudio dirigidas por la práctica e impartidas por una facultad de artistas y diseñadores.
        </p>
      </div>

      <!-- Grid / Lista de Programas Académicos con Retratos y Máscaras Geométricas -->
      <div class="space-y-20 lg:space-y-28">
        <article
          v-for="(prog, idx) in programs"
          :key="prog.code"
          class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 transition-all duration-700 ease-out"
          :class="idx % 2 === 1 ? 'lg:flex-row-reverse' : ''"
        >
          <!-- Retrato de Estudiante con Máscara Angular Arquitectónica -->
          <div class="w-full lg:w-1/2 flex justify-center">
            <div
              class="relative w-full max-w-[560px] aspect-[4/3] overflow-hidden bg-neutral-100 shadow-lg group"
              :style="{ clipPath: prog.clipPath }"
            >
              <img
                :src="prog.image"
                :alt="`Estudiante de ${prog.name}`"
                class="w-full h-full object-cover grayscale-[25%] contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                loading="eager"
              />
              <div class="absolute inset-0 bg-neutral-950/10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
            </div>
          </div>

          <!-- Información de Carrera -->
          <div class="w-full lg:w-1/2 space-y-4 max-w-xl">
            <div class="flex items-center gap-3">
              <span class="font-sans text-xs font-bold uppercase tracking-widest px-3 py-1 bg-[#070707] text-white inline-block">
                {{ prog.code }}
              </span>
              <span class="font-barlow text-xs uppercase tracking-widest text-neutral-400">
                Licenciatura Profesional
              </span>
            </div>

            <h3 class="font-barlow font-semibold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#070707] leading-none">
              {{ prog.name }}
            </h3>

            <p class="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed">
              {{ prog.description }}
            </p>

            <div class="pt-2">
              <a
                :href="prog.link"
                target="_blank"
                rel="noopener noreferrer"
                class="font-barlow font-bold text-sm uppercase tracking-widest text-[#070707] hover:text-neutral-500 inline-flex items-center gap-2 border-b-2 border-[#070707] hover:border-neutral-400 pb-1 transition-colors group"
              >
                <span>Plan de Estudios Oficial</span>
                <svg class="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 12L12 4M5 4h7v7" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
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
  description: string
  image: string
  clipPath: string
  link: string
}

const programs: Program[] = [
  {
    code: 'LINT',
    name: 'Lic. en Diseño de Interiores',
    description: 'Transforma atmósferas y espacios habitables integrando iluminación arquitectónica, tecnología constructiva y habitabilidad sensible.',
    image: '/images/crgs-student-lint.png',
    clipPath: 'polygon(0% 12%, 88% 0%, 100% 88%, 12% 100%)',
    link: 'https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/academia/profesional/licenciatura-en-diseno-de-interiores'
  },
  {
    code: 'LDM',
    name: 'Lic. en Diseño de Modas',
    description: 'Desarrolla colecciones indumentarias y experimentación textil con una visión contemporánea enfocada en procesos circulares, patronaje tridimensional e innovación conceptual.',
    image: '/images/crgs-student-ldm.png',
    clipPath: 'polygon(14% 0%, 100% 14%, 86% 100%, 0% 86%)',
    link: 'https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/academia/profesional/licenciatura-en-diseno-de-moda'
  },
  {
    code: 'LDI',
    name: 'Lic. en Diseño Industrial',
    description: 'Estudia la Licenciatura en Diseño Industrial en UDEM y desarrolla productos innovadores con un enfoque en funcionalidad, estética para el mercado global.',
    image: '/images/crgs-student-ldi.png',
    clipPath: 'polygon(0% 16%, 92% 0%, 100% 84%, 8% 100%)',
    link: 'https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/academia/profesional/licenciatura-en-diseno-industrial'
  },
  {
    code: 'LDG',
    name: 'Lic. en Diseño Gráfico',
    description: 'Domina los sistemas de comunicación visual, tipografía experimental, narrativa digital, branding dinámico y proyectos editoriales de alto impacto.',
    image: '/images/crgs-student-ldg.png',
    clipPath: 'polygon(12% 0%, 100% 16%, 88% 100%, 0% 84%)',
    link: 'https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/academia/profesional/licenciatura-en-diseno-grafico'
  },
  {
    code: 'LAED',
    name: 'Lic. en Arte',
    description: 'Explora la producción artística interdisciplinaria, la experimentación visual, la animación, los medios digitales y el pensamiento crítico contemporáneo en talleres de estudio.',
    image: '/images/crgs-student-laed.png',
    clipPath: 'polygon(0% 14%, 86% 0%, 100% 86%, 14% 100%)',
    link: 'https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/academia/profesional/licenciatura-en-artes'
  }
]
</script>
