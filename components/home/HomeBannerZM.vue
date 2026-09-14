<template>
  <section class="w-full bg-[#141414] text-white border-y border-neutral-800 py-12 lg:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
        <!-- Left: Date Announcement & Title -->
        <div class="space-y-2 text-center lg:text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-neutral-800/80 border border-neutral-700 text-xs font-mono uppercase tracking-widest text-neutral-300">
            <span class="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Centro Citibanamex · Ciudad de México</span>
          </div>

          <h2 class="font-barlow font-bold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tightest leading-none text-white">
            DEL 3 AL 7 DE FEBRERO 2027
          </h2>

          <p class="font-barlow text-xl sm:text-2xl text-neutral-400 font-light tracking-wide">
            Pabellón CRGS / UMBRAL · Sección Diseño & Arte Contemporáneo
          </p>
        </div>

        <!-- Right: Action Button and Badges -->
        <div class="flex flex-col sm:flex-row items-center gap-4">
          <NuxtLink
            to="/zona-maco"
            class="px-8 py-4 bg-white text-neutral-950 hover:bg-neutral-100 font-barlow font-bold text-lg uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] flex items-center gap-3 group border border-white"
          >
            <span>VER UBICACIÓN & OBRAS</span>
            <svg
              class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Banner de llamado a Zona Maco 2027
</script>
