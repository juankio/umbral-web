<template>
  <footer class="w-full bg-[#0A0A0A] py-5 sm:py-8 lg:py-14 px-4 sm:px-8 lg:px-12 border-t border-white/10 text-white select-text">
    <!-- 1. Versión Desktop 1:1 Figma (4 columnas completas en una sola fila) -->
    <div class="hidden lg:grid max-w-[1720px] mx-auto grid-cols-4 gap-8 items-center">
      <!-- Columna 1: Escuela de Arte y Diseño -->
      <div class="font-barlow font-bold text-base tracking-[0.14em] uppercase text-white/95 leading-tight select-none">
        ESCUELA DE<br>
        ARTE Y DISEÑO<br>
        UNIVERSIDAD<br>
        DE MONTERREY
      </div>

      <!-- Columna 2: Logo CRGS con corte diagonal -->
      <div>
        <NuxtLink to="/crgs" class="inline-block hover:opacity-90 transition-opacity" aria-label="Centro Roberto Garza Sada">
          <img
            src="/images/footer-crgs.webp"
            alt="Centro Roberto Garza Sada de Arte Arquitectura y Diseño"
            class="h-20 w-auto object-contain"
          />
        </NuxtLink>
      </div>

      <!-- Columna 3: Enlaces oficiales -->
      <div class="flex flex-col space-y-2.5 font-barlow text-base">
        <a
          v-for="link in officialLinks"
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white/90 hover:text-white underline underline-offset-4 decoration-1 decoration-white/30 hover:decoration-white transition-colors duration-200 w-fit"
        >
          {{ link.name }}
        </a>
      </div>

      <!-- Columna 4: Logotipo oficial UDEM -->
      <div class="flex items-center justify-end">
        <a
          href="https://www.udem.edu.mx"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-4 group hover:opacity-90 transition-opacity"
          aria-label="Universidad de Monterrey"
        >
          <img src="/images/footer-udem.webp" alt="UDEM" class="h-10 w-auto object-contain brightness-110" />
          <div class="h-8 w-[1.5px] bg-white/50" />
          <span class="font-barlow font-bold text-sm tracking-[0.16em] uppercase text-white leading-tight">
            UNIVERSIDAD<br>DE MONTERREY
          </span>
        </a>
      </div>
    </div>

    <!-- 2. Versión Celular Ultra Compacta 1:1 Figma (la variante más chiquita) -->
    <div class="flex lg:hidden items-center justify-between gap-3 sm:gap-6 max-w-lg mx-auto w-full py-1">
      <!-- Izquierda: Escuela de Arte y Diseño -->
      <div class="font-barlow font-bold text-[9px] sm:text-xs tracking-[0.12em] uppercase text-white/90 leading-tight select-none flex-shrink-0">
        ESCUELA DE<br>
        ARTE Y DISEÑO<br>
        UNIVERSIDAD<br>
        DE MONTERREY
      </div>

      <!-- Centro: Logo CRGS -->
      <div class="flex-shrink-0 flex items-center justify-center">
        <NuxtLink to="/crgs" class="inline-block hover:opacity-90 transition-opacity" aria-label="Centro Roberto Garza Sada">
          <img
            src="/images/footer-crgs.webp"
            alt="CRGS"
            class="h-9 sm:h-12 w-auto object-contain"
          />
        </NuxtLink>
      </div>

      <!-- Derecha: Logo UDEM -->
      <div class="flex-shrink-0 flex items-center justify-end">
        <a
          href="https://www.udem.edu.mx"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 sm:gap-2.5 group hover:opacity-90 transition-opacity"
          aria-label="Universidad de Monterrey"
        >
          <img src="/images/footer-udem.webp" alt="UDEM" class="h-5 sm:h-7 w-auto object-contain brightness-110" />
          <div class="h-5 sm:h-6 w-[1px] bg-white/40" />
          <span class="font-barlow font-bold text-[8px] sm:text-[10px] tracking-[0.14em] uppercase text-white leading-none">
            UNIVERSIDAD<br>DE MONTERREY
          </span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
interface FooterLink {
  name: string
  url: string
}

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
