<template>
  <!-- Columna Izquierda: Fotografías limpias y puras en cascada vertical -->
  <div class="flex flex-col gap-8 sm:gap-10 lg:gap-12 select-none">
    <div
      v-for="(img, idx) in images"
      :key="idx"
      class="w-full overflow-hidden bg-neutral-100"
    >
      <img
        :src="img"
        :alt="`${title} - Fotografía ${idx + 1}`"
        :loading="idx === 0 ? 'eager' : 'lazy'"
        decoding="async"
        class="w-full h-auto object-cover block shadow-xs"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  images: string[]
  title: string
}>()
</script>
