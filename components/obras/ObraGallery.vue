<template>
  <!-- Columna Izquierda: Galería Vertical de Alta Resolución + Fotograma de Video según Figma -->
  <div class="flex flex-col gap-10 sm:gap-14 lg:gap-16 select-text">
    <!-- Cascada de Fotografías Puras de Alta Resolución -->
    <div
      v-for="(img, idx) in images"
      :key="idx"
      class="w-full overflow-hidden bg-white"
    >
      <img
        :src="img"
        :alt="`${title} - Fotografía ${idx + 1}`"
        :loading="idx === 0 ? 'eager' : 'lazy'"
        decoding="async"
        class="w-full h-auto object-cover block shadow-xs"
      />
    </div>

    <!-- Fotograma Panorámico de Video con Play (Figma Node 112:115 / 113:335) -->
    <div class="w-full flex flex-col pt-2">
      <div class="relative w-full aspect-[1209/568] bg-neutral-900 overflow-hidden shadow-sm border border-black/80 group">
        <img
          src="/images/figma-obra-video-frame.png"
          alt="Fotograma de proceso en taller"
          class="w-full h-full object-cover"
          loading="lazy"
          draggable="false"
        />
        <div
          class="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/25 transition-colors cursor-pointer"
          role="button"
          aria-label="Reproducir video del taller"
        >
          <svg viewBox="0 0 116 141" class="w-12 sm:w-16 lg:w-20 h-auto cursor-pointer hover:scale-110 transition-transform select-none" fill="none">
            <path d="M0.502 0.428V140.081L115.038 69.931L1.558 0.428" stroke="white" stroke-width="1.8" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  images: string[]
  title: string
}>()
</script>
