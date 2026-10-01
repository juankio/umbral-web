<template>
  <footer ref="footerRef" class="w-full bg-[#070707] py-8 sm:py-12 lg:py-14 px-6 sm:px-10 lg:px-12 border-t border-white/10 text-white select-text will-change-transform">
    <div class="max-w-[1720px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-start lg:items-center">
      <!-- Bloque Izquierdo: Logotipo CRGS + Bloque tipográfico institucional -->
      <div class="flex items-center gap-4 sm:gap-6 justify-self-start">
        <NuxtLink
          to="/crgs"
          class="inline-block hover:opacity-90 hover:scale-105 transition-all duration-300 flex-shrink-0"
          aria-label="Centro Roberto Garza Sada"
        >
          <picture>
            <source srcset="/images/footer-crgs.webp" type="image/webp" />
            <img
              src="/images/footer-crgs.png"
              alt="Centro Roberto Garza Sada de Arte Arquitectura y Diseño"
              class="h-16 sm:h-20 w-auto object-contain"
            />
          </picture>
        </NuxtLink>
        <div class="font-barlow font-bold text-xs sm:text-sm lg:text-base tracking-[0.14em] uppercase text-white/95 leading-tight select-none">
          ESCUELA DE<br>
          ARTE Y DISEÑO<br>
          UNIVERSIDAD<br>
          DE MONTERREY
        </div>
      </div>

      <!-- Bloque Central: Enlaces oficiales en lista vertical limpia -->
      <div class="flex flex-col space-y-2.5 font-barlow text-sm sm:text-base justify-self-start lg:justify-self-center">
        <a
          v-for="link in officialLinks"
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white/80 hover:text-white underline underline-offset-4 decoration-1 decoration-white/30 hover:decoration-white hover:translate-x-1 transition-all duration-200 w-fit inline-block"
        >
          {{ link.name }}
        </a>
      </div>

      <!-- Bloque Derecho: Logotipo oficial UDEM -->
      <div class="flex items-center justify-start lg:justify-self-end">
        <a
          href="https://www.udem.edu.mx"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3 sm:gap-4 group hover:opacity-90 transition-opacity"
          aria-label="Universidad de Monterrey"
        >
          <picture>
            <source srcset="/images/footer-udem.webp" type="image/webp" />
            <img
              src="/images/footer-udem.png"
              alt="UDEM"
              class="h-8 sm:h-10 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform duration-300"
            />
          </picture>
          <div class="h-8 w-[1.5px] bg-white/50" />
          <span class="font-barlow font-bold text-xs sm:text-sm tracking-[0.16em] uppercase text-white leading-tight">
            UNIVERSIDAD<br>DE MONTERREY
          </span>
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
