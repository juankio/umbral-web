<template>
  <footer ref="footerRef" class="w-full bg-[#000000] py-10 sm:py-14 lg:py-16 px-6 sm:px-10 lg:px-14 border-t border-white/10 text-white select-text will-change-transform">
    <!-- Desktop (lg+): Flex con justify-between para espaciado matemáticamente idéntico entre cada uno de los 5 bloques -->
    <div class="max-w-[1720px] mx-auto hidden lg:flex items-center justify-between">
      <!-- 1. UDEM -->
      <div class="flex items-center justify-center shrink-0">
        <a
          href="https://www.udem.edu.mx"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block hover:opacity-90 transition-opacity"
          aria-label="Universidad de Monterrey"
        >
          <img
            src="/images/logo-udem-official.png"
            alt="UDEM | Universidad de Monterrey"
            class="h-10 xl:h-11 w-auto object-contain select-none"
          />
        </a>
      </div>

      <!-- 2. CRGS -->
      <div class="flex items-center justify-center shrink-0">
        <NuxtLink
          to="/nosotros"
          class="inline-block hover:opacity-90 hover:scale-105 transition-all duration-300"
          aria-label="Centro Roberto Garza Sada"
        >
          <img
            src="/images/footer-crgs.png"
            alt="Centro Roberto Garza Sada de Arte Arquitectura y Diseño"
            class="h-16 xl:h-17 w-auto object-contain select-none"
          />
        </NuxtLink>
      </div>

      <!-- 3. Escuela de Arte y Diseño -->
      <div class="flex items-center justify-center shrink-0">
        <img
          src="/images/logo-escuela-official.png"
          alt="Escuela de Arte y Diseño - Universidad de Monterrey"
          class="h-13 xl:h-14 w-auto object-contain select-none"
        />
      </div>

      <!-- 4. ZONA MACO -->
      <div class="flex items-center justify-center shrink-0">
        <a
          href="https://zsonamaco.com"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block hover:opacity-90 hover:scale-105 transition-all duration-300"
          aria-label="Zona Maco México Arte Contemporáneo"
        >
          <img
            src="/images/logo-zona-maco-white.png"
            alt="ZONA MACO"
            class="h-10 xl:h-11 w-auto object-contain select-none"
          />
        </a>
      </div>

      <!-- 5. Enlaces Oficiales -->
      <div class="flex flex-col space-y-1.5 font-barlow text-sm text-right shrink-0">
        <a
          v-for="link in officialLinks"
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white hover:text-white underline underline-offset-4 decoration-1 decoration-white/40 hover:decoration-white hover:-translate-x-0.5 transition-all duration-200 w-fit self-end"
        >
          {{ link.name }}
        </a>
      </div>
    </div>

    <!-- Mobile / Tablet (< lg): Cuadrícula simétrica 2x2 para logos y enlaces centrados abajo -->
    <div class="lg:hidden max-w-lg mx-auto flex flex-col gap-8 items-center">
      <div class="w-full grid grid-cols-2 gap-x-6 gap-y-8 items-center justify-items-center">
        <!-- 1. UDEM -->
        <a href="https://www.udem.edu.mx" target="_blank" rel="noopener noreferrer">
          <img src="/images/logo-udem-official.png" alt="UDEM" class="h-8 xs:h-9 w-auto object-contain" />
        </a>
        <!-- 2. CRGS -->
        <NuxtLink to="/nosotros">
          <img src="/images/footer-crgs.png" alt="CRGS" class="h-13 xs:h-15 w-auto object-contain" />
        </NuxtLink>
        <!-- 3. Escuela -->
        <img src="/images/logo-escuela-official.png" alt="Escuela de Arte" class="h-11 xs:h-13 w-auto object-contain" />
        <!-- 4. ZONA MACO -->
        <a href="https://zsonamaco.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/logo-zona-maco-white.png" alt="ZONA MACO" class="h-8 xs:h-9 w-auto object-contain" />
        </a>
      </div>

      <!-- 5. Enlaces -->
      <div class="flex flex-col space-y-2 font-barlow text-xs sm:text-sm text-center items-center pt-2 border-t border-white/10 w-full">
        <a
          v-for="link in officialLinks"
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white underline underline-offset-4 decoration-1 decoration-white/30"
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
