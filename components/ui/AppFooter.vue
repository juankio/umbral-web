<template>
  <footer class="w-full bg-[#1C1C1C] min-h-[358px] flex items-center py-12 md:py-0">
    <div class="max-w-[1720px] w-full mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center text-center md:text-left">
      <!-- Izquierda: Logo CRGS con elevación sutil -->
      <div class="md:col-span-4 flex justify-center md:justify-start">
        <NuxtLink to="/crgs" class="inline-block transition-transform duration-300 hover:scale-105 active:scale-95" aria-label="Centro Roberto Garza Sada">
          <img
            src="/images/footer-crgs.png"
            alt="Centro Roberto Garza Sada"
            class="h-16 sm:h-20 md:h-24 w-auto object-contain brightness-110"
          />
        </NuxtLink>
      </div>

      <!-- Centro: 4 enlaces oficiales con subrayado expansivo y feedback táctil -->
      <div class="md:col-span-4 flex justify-center">
        <ul class="flex flex-col space-y-2 sm:space-y-3 font-barlow text-xl md:text-[30px] text-white leading-relaxed text-center md:text-left">
          <li>
            <NuxtLink
              to="/crgs"
              class="group relative inline-block text-white/90 hover:text-white transition-colors duration-200 active:scale-95"
            >
              <span>Centro de Artes I UDEM</span>
              <span class="absolute bottom-0 left-0 w-full h-[2px] bg-[#F6D152] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out pointer-events-none" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/crgs"
              class="group relative inline-block text-white/90 hover:text-white transition-colors duration-200 active:scale-95"
            >
              <span>Historia del CRGS</span>
              <span class="absolute bottom-0 left-0 w-full h-[2px] bg-[#F6D152] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out pointer-events-none" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/crgs"
              class="group relative inline-block text-white/90 hover:text-white transition-colors duration-200 active:scale-95"
            >
              <span>Recorridos</span>
              <span class="absolute bottom-0 left-0 w-full h-[2px] bg-[#F6D152] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out pointer-events-none" />
            </NuxtLink>
          </li>
          <li>
            <a
              href="https://www.udem.edu.mx"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative inline-block text-white/90 hover:text-white transition-colors duration-200 active:scale-95"
            >
              <span>Universidad de Monterrey</span>
              <span class="absolute bottom-0 left-0 w-full h-[2px] bg-[#F6D152] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out pointer-events-none" />
            </a>
          </li>
        </ul>
      </div>

      <!-- Derecha: Logo UDEM con micro-escala -->
      <div class="md:col-span-4 flex justify-center md:justify-end">
        <a
          href="https://www.udem.edu.mx"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block transition-transform duration-300 hover:scale-105 active:scale-95"
          aria-label="Universidad de Monterrey"
        >
          <img
            src="/images/footer-udem.png"
            alt="Universidad de Monterrey"
            class="h-10 sm:h-12 md:h-14 w-auto object-contain"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer institucional oficial de Figma con subrayado expansivo y feedback táctil
</script>
