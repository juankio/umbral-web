<template>
  <section
    id="repentina"
    class="py-6 sm:py-8 lg:py-10 bg-[#1C1C1C] border-b border-neutral-900 select-none flex items-center justify-center"
  >
    <div class="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div ref="frameRef" class="w-full flex items-center justify-center">
        <ZonaMacoContextVideo class="w-full max-w-[1200px] xl:max-w-[1320px] 2xl:max-w-[1400px] max-h-[64vh]" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'
import ZonaMacoContextVideo from './ZonaMacoContextVideo.vue'

const frameRef = ref<HTMLElement | null>(null)
const { observeScrollReveal } = useScrollAnimation()

onMounted(() => {
  observeScrollReveal(frameRef, { type: 'image', delay: 100 })
})
</script>
