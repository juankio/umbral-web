<template>
  <section
    id="hero-triangle"
    class="relative w-full min-h-[600px] sm:min-h-[750px] lg:min-h-[850px] h-[90vh] bg-white flex items-center justify-center px-4 sm:px-8 py-12 select-none overflow-hidden"
  >
    <ZonaMacoHeroTriangle />
  </section>
</template>

<script setup lang="ts">
import ZonaMacoHeroTriangle from './ZonaMacoHeroTriangle.vue'

defineEmits<{ (e: 'select', category: string): void }>()
</script>
