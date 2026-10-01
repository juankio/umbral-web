<template>
  <section id="repentina" class="py-8 sm:py-12 lg:py-14 bg-[#1C1C1C] border-b border-neutral-900 select-none">
    <div class="w-full px-4 sm:px-6 lg:px-8">
      <div ref="frameRef">
        <ZonaMacoContextVideo class="w-full max-w-[1380px] xl:max-w-[1540px] mx-auto" />
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
