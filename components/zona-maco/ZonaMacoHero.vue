<template>
  <section
    id="hero-triangle"
    class="relative w-full min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] bg-white flex flex-col items-center justify-center px-6 py-8 sm:py-12 select-none"
  >
    <ZonaMacoHeroTriangle />
  </section>
</template>

<script setup lang="ts">
import ZonaMacoHeroTriangle from './ZonaMacoHeroTriangle.vue'

defineEmits<{ (e: 'select', category: string): void }>()
</script>
