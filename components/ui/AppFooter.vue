<template>
  <footer class="w-full bg-[#0A0A0A] py-10 sm:py-14 px-6 sm:px-12 border-t border-white/10 text-white select-text">
    <div class="max-w-[1720px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8 items-start lg:items-center">
      <!-- Columna 1: Escuela de Arte y Diseño -->
      <div class="font-barlow font-bold text-sm sm:text-base tracking-[0.14em] uppercase text-white/95 leading-tight select-none">
        ESCUELA DE<br>
        ARTE Y DISEÑO<br>
        UNIVERSIDAD<br>
        DE MONTERREY
      </div>

      <!-- Columna 2: Logo CRGS con corte diagonal -->
      <div>
        <NuxtLink to="/crgs" class="inline-block hover:opacity-90 transition-opacity" aria-label="Centro Roberto Garza Sada">
          <img
            src="/images/footer-crgs.png"
            alt="Centro Roberto Garza Sada de Arte Arquitectura y Diseño"
            class="h-16 sm:h-20 w-auto object-contain"
          />
        </NuxtLink>
      </div>

      <!-- Columna 3: Enlaces oficiales -->
      <div class="flex flex-col space-y-2.5 font-barlow text-sm sm:text-base">
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
      <div class="flex items-center sm:justify-start lg:justify-end">
        <a
          href="https://www.udem.edu.mx"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3.5 sm:gap-4 group hover:opacity-90 transition-opacity"
          aria-label="Universidad de Monterrey"
        >
          <img src="/images/footer-udem.png" alt="UDEM" class="h-8 sm:h-10 w-auto object-contain brightness-110" />
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
