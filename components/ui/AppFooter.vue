<template>
  <footer class="w-full bg-[#0B0B0B] min-h-[340px] flex items-center py-14 md:py-16 select-none border-t border-white/5">
    <div class="max-w-[1720px] w-full mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center text-center md:text-left">
      <!-- Izquierda: Texto institucional CRGS y corte diagonal -->
      <div class="md:col-span-4 flex flex-col items-center md:items-start space-y-3">
        <span class="font-barlow text-xs sm:text-sm font-medium tracking-[0.2em] text-white/70 uppercase">
          ESCUELA DE ARTE Y DISEÑO · UNIVERSIDAD DE MONTERREY
        </span>
        <NuxtLink
          to="/crgs"
          class="group inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-90"
          aria-label="Centro Roberto Garza Sada de Arte Arquitectura y Diseño"
        >
          <div class="flex items-center gap-3">
            <span class="font-barlow font-bold text-base sm:text-lg text-white tracking-wider uppercase leading-tight">
              CENTRO ROBERTO GARZA SADA
            </span>
            <!-- Línea diagonal divisoria de corte -->
            <span class="h-6 w-[2px] bg-white/40 transform rotate-[25deg] inline-block shrink-0" aria-hidden="true" />
            <span class="font-barlow font-normal text-xs sm:text-sm text-white/80 tracking-widest uppercase leading-tight">
              DE ARTE ARQUITECTURA Y DISEÑO
            </span>
          </div>
        </NuxtLink>
      </div>

      <!-- Centro: 4 enlaces oficiales subrayados de Figma -->
      <div class="md:col-span-4 flex justify-center">
        <ul class="flex flex-col space-y-3 sm:space-y-4 font-barlow text-lg sm:text-xl md:text-2xl text-white leading-relaxed text-center md:text-left">
          <li>
            <a
              href="https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/centro-artes-udem"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative inline-block text-white/90 hover:text-white underline underline-offset-8 decoration-white/40 hover:decoration-[#F6D152] transition-colors duration-200 active:scale-95"
            >
              <span>Centro de Artes | UDEM</span>
            </a>
          </li>
          <li>
            <a
              href="https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/quienes-somos/historia"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative inline-block text-white/90 hover:text-white underline underline-offset-8 decoration-white/40 hover:decoration-[#F6D152] transition-colors duration-200 active:scale-95"
            >
              <span>Historia del CRGS</span>
            </a>
          </li>
          <li>
            <a
              href="https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/recorrido-crgs"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative inline-block text-white/90 hover:text-white underline underline-offset-8 decoration-white/40 hover:decoration-[#F6D152] transition-colors duration-200 active:scale-95"
            >
              <span>Recorridos</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.udem.edu.mx"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative inline-block text-white/90 hover:text-white underline underline-offset-8 decoration-white/40 hover:decoration-[#F6D152] transition-colors duration-200 active:scale-95"
            >
              <span>Universidad de Monterrey</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- Derecha: Logotipo oficial de UDEM con texto 'UNIVERSIDAD DE MONTERREY' -->
      <div class="md:col-span-4 flex justify-center md:justify-end">
        <a
          href="https://www.udem.edu.mx"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex flex-col items-center md:items-end space-y-2 group transition-transform duration-300 hover:scale-105 active:scale-95"
          aria-label="Universidad de Monterrey"
        >
          <img
            src="/images/footer-udem.png"
            alt="Logo UDEM"
            class="h-8 sm:h-10 md:h-12 w-auto object-contain brightness-110"
          />
          <span class="font-barlow text-xs sm:text-sm tracking-[0.22em] text-white/80 uppercase group-hover:text-white transition-colors">
            UNIVERSIDAD DE MONTERREY
          </span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer institucional oficial de Figma en fondo #0B0B0B con texto apilado,
// corte diagonal, 4 enlaces subrayados y logotipo oficial UDEM
</script>
