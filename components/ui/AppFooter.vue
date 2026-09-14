<template>
  <footer class="w-full bg-[#1C1C1C] min-h-[358px] flex items-center py-12 md:py-0">
    <div class="max-w-[1720px] w-full mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center text-center md:text-left">
      <!-- Izquierda: Logo CRGS -->
      <div class="md:col-span-4 flex justify-center md:justify-start">
        <NuxtLink to="/crgs" class="inline-block" aria-label="Centro Roberto Garza Sada">
          <img
            src="/images/footer-crgs.png"
            alt="Centro Roberto Garza Sada"
            class="h-16 sm:h-20 md:h-24 w-auto object-contain brightness-110"
          />
        </NuxtLink>
      </div>

      <!-- Centro: 4 enlaces oficiales subrayados -->
      <div class="md:col-span-4 flex justify-center">
        <ul class="flex flex-col space-y-1 sm:space-y-2 font-barlow text-xl md:text-[32px] text-white underline leading-relaxed text-center md:text-left">
          <li>
            <NuxtLink to="/crgs" class="hover:text-neutral-300 transition-colors">
              Centro de Artes I UDEM
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/crgs" class="hover:text-neutral-300 transition-colors">
              Historia del CRGS
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/crgs" class="hover:text-neutral-300 transition-colors">
              Recorridos
            </NuxtLink>
          </li>
          <li>
            <a
              href="https://www.udem.edu.mx"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-neutral-300 transition-colors"
            >
              Universidad de Monterrey
            </a>
          </li>
        </ul>
      </div>

      <!-- Derecha: Logo UDEM -->
      <div class="md:col-span-4 flex justify-center md:justify-end">
        <a
          href="https://www.udem.edu.mx"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block"
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
// Footer institucional oficial de Figma (Altura ~358px, fondo #1C1C1C)
</script>
