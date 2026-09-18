<template>
  <section
    id="hero-triangle"
    class="relative w-full h-[50vh] min-h-[420px] max-h-[520px] bg-white flex items-center justify-center px-4 sm:px-8 py-8 select-none overflow-hidden"
  >
    <ZonaMacoHeroTriangle />
  </section>
</template>

<script setup lang="ts">
import ZonaMacoHeroTriangle from './ZonaMacoHeroTriangle.vue'

defineEmits<{ (e: 'select', category: string): void }>()
</script>
