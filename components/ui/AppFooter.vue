<template>
  <footer ref="footerRef" class="w-full bg-[#000000] py-10 sm:py-14 lg:py-16 px-6 sm:px-10 lg:px-16 border-t border-white/10 text-white select-text will-change-transform">
    <div class="max-w-[1720px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 sm:gap-x-8 lg:gap-x-10 gap-y-8 sm:gap-y-10 items-center">
      <!-- 1. Bloque Oficial Escuela de Arte y Diseño -->
      <div class="flex items-center justify-start justify-self-start">
        <img
          src="/images/logo-escuela-official.png"
          alt="Escuela de Arte y Diseño - Universidad de Monterrey"
          class="h-11 xs:h-13 sm:h-15 lg:h-16 w-auto object-contain select-none"
        />
      </div>

      <!-- 2. Logotipo Diagonal Oficial Centro Roberto Garza Sada -->
      <div class="flex items-center justify-end sm:justify-center lg:justify-center justify-self-end sm:justify-self-center lg:justify-self-center">
        <NuxtLink
          to="/nosotros"
          class="inline-block hover:opacity-90 hover:scale-105 transition-all duration-300 flex-shrink-0"
          aria-label="Centro Roberto Garza Sada"
        >
          <img
            src="/images/footer-crgs.png"
            alt="Centro Roberto Garza Sada de Arte Arquitectura y Diseño"
            class="h-12 xs:h-14 sm:h-16 lg:h-18 w-auto object-contain select-none"
          />
        </NuxtLink>
      </div>

      <!-- 3. Logotipo Oficial UDEM | Universidad de Monterrey (1:1 Imagen Oficial) -->
      <div class="flex items-center justify-start sm:justify-center lg:justify-center justify-self-start sm:justify-self-center lg:justify-self-center">
        <a
          href="https://www.udem.edu.mx"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block group hover:opacity-90 transition-opacity"
          aria-label="Universidad de Monterrey"
        >
          <img
            src="/images/logo-udem-official.png"
            alt="UDEM | Universidad de Monterrey"
            class="h-7 xs:h-8 sm:h-9 lg:h-10 w-auto object-contain select-none"
          />
        </a>
      </div>

      <!-- 4. Logotipo Oficial ZONA MACO (1:1 Imagen Usuario) -->
      <div class="flex items-center justify-end sm:justify-center lg:justify-center justify-self-end sm:justify-self-center lg:justify-self-center">
        <a
          href="https://zsonamaco.com"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block group hover:opacity-90 hover:scale-105 transition-all duration-300"
          aria-label="Zona Maco México Arte Contemporáneo"
        >
          <img
            src="/images/logo-zona-maco-white.png"
            alt="ZONA MACO"
            class="h-8 xs:h-9 sm:h-10 lg:h-11 w-auto object-contain select-none"
          />
        </a>
      </div>

      <!-- 5. Lista Vertical de Enlaces Oficiales (1:1 Screenshot Usuario) -->
      <div class="col-span-2 md:col-span-1 lg:col-span-1 flex flex-col space-y-2 sm:space-y-2.5 font-barlow text-xs sm:text-sm justify-self-center md:justify-self-end lg:justify-self-end items-center md:items-end lg:items-end text-center md:text-right">
        <a
          v-for="link in officialLinks"
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white hover:text-white underline underline-offset-4 decoration-1 decoration-white/40 hover:decoration-white hover:-translate-x-0.5 transition-all duration-200 w-fit text-right"
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
