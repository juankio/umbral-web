<template>
  <footer ref="footerRef" class="w-full bg-[#070707] py-8 sm:py-12 lg:py-14 px-6 sm:px-10 lg:px-12 border-t border-white/10 text-white select-text will-change-transform">
    <div class="max-w-[1720px] mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-8 lg:gap-x-10 xl:gap-x-14 gap-y-8 sm:gap-y-10 items-start sm:items-center">
      <!-- Columna 1: Logotipo oficial UDEM -->
      <div class="flex items-center justify-start justify-self-start">
        <a
          href="https://www.udem.edu.mx"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2.5 sm:gap-4 group hover:opacity-90 transition-opacity"
          aria-label="Universidad de Monterrey"
        >
          <picture>
            <source srcset="/images/footer-udem.webp" type="image/webp" />
            <img
              src="/images/footer-udem.png"
              alt="UDEM"
              class="h-7 sm:h-9 lg:h-10 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform duration-300"
            />
          </picture>
          <div class="h-7 sm:h-8 w-[1.5px] bg-white/50" />
          <span class="font-barlow font-bold text-[10px] xs:text-xs sm:text-sm tracking-[0.14em] sm:tracking-[0.16em] uppercase text-white leading-tight">
            UNIVERSIDAD<br>DE MONTERREY
          </span>
        </a>
      </div>

      <!-- Columna 2: Logotipo oficial CRGS con enlace a /nosotros -->
      <div class="flex items-center justify-end sm:justify-center lg:justify-center justify-self-end sm:justify-self-center lg:justify-self-center">
        <NuxtLink
          to="/nosotros"
          class="inline-block hover:opacity-90 hover:scale-105 transition-all duration-300 flex-shrink-0"
          aria-label="Centro Roberto Garza Sada"
        >
          <picture>
            <source srcset="/images/footer-crgs.webp" type="image/webp" />
            <img
              src="/images/footer-crgs.png"
              alt="Centro Roberto Garza Sada de Arte Arquitectura y Diseño"
              class="h-12 xs:h-14 sm:h-20 w-auto object-contain"
            />
          </picture>
        </NuxtLink>
      </div>

      <!-- Columna 3: Bloque tipográfico institucional -->
      <div class="flex flex-col justify-start sm:justify-center lg:justify-center justify-self-start sm:justify-self-center lg:justify-self-center">
        <div class="font-barlow font-bold text-[11px] xs:text-xs sm:text-sm lg:text-base tracking-[0.14em] uppercase text-white/95 leading-tight select-none text-left">
          ESCUELA DE<br>
          ARTE Y DISEÑO<br>
          UNIVERSIDAD<br>
          DE MONTERREY
        </div>
      </div>

      <!-- Columna 4: Lista vertical de enlaces oficiales con subrayado -->
      <div class="flex flex-col space-y-2 sm:space-y-2.5 font-barlow text-xs xs:text-sm sm:text-base justify-self-end sm:justify-self-end lg:justify-self-end items-end sm:items-end lg:items-end">
        <a
          v-for="link in officialLinks"
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white/80 hover:text-white underline underline-offset-4 decoration-1 decoration-white/30 hover:decoration-white hover:-translate-x-0.5 lg:hover:-translate-x-1 transition-all duration-200 w-fit text-right"
        >
          {{ link.name }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'

interface FooterLink {
  name: string
  url: string
}

const footerRef = ref<HTMLElement | null>(null)
const { observeScrollReveal } = useScrollAnimation()

onMounted(() => {
  observeScrollReveal(footerRef, { type: 'heading', duration: 800, delay: 50 })
})

const officialLinks: FooterLink[] = [
  {
    name: 'Centro de Artes | UDEM',
    url: 'https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/centro-artes-udem'
  },
  {
    name: 'Historia del CRGS',
    url: 'https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/quienes-somos/historia'
  },
  {
    name: 'Recorridos',
    url: 'https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/recorrido-crgs'
  },
  {
    name: 'Universidad de Monterrey',
    url: 'https://www.udem.edu.mx'
  }
]
</script>
