<template>
  <!-- Columna Izquierda: Galería Vertical de Alta Resolución según Figma -->
  <div class="flex flex-col gap-10 lg:gap-14 select-none">
    <article
      v-for="(img, idx) in images"
      :key="idx"
      class="group relative bg-white border border-neutral-300 shadow-sm hover:shadow-xl transition-all duration-500 ease-out"
    >
      <!-- Marco de la Fotografía -->
      <div class="relative w-full overflow-hidden bg-neutral-100 isolate">
        <img
          :src="img"
          :alt="`${title} - Fotografía de alta resolución ${idx + 1}`"
          :loading="idx === 0 ? 'eager' : 'lazy'"
          decoding="async"
          class="w-full h-auto max-h-[900px] object-cover grayscale-[3%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform transform-gpu"
        />

        <!-- Notación de figura arquitectónica discreta -->
        <div class="absolute top-4 left-4 font-barlow font-medium text-xs sm:text-sm uppercase tracking-wider bg-black/85 text-white px-3 py-1 border border-neutral-800 backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-0.5">
          FIG. 0{{ idx + 1 }} · VISTA DE OBRA
        </div>
      </div>

      <!-- Pie de fotografía editorial -->
      <div class="px-5 py-3 border-t border-neutral-200 bg-white flex items-center justify-between font-barlow text-sm sm:text-base text-neutral-600">
        <span class="tracking-wide">Archivo Zona Maco · Centro Roberto Garza Sada</span>
        <span class="text-black font-medium tracking-wide uppercase">{{ title }} · 2026</span>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  images: string[]
  title: string
}>()
</script>
