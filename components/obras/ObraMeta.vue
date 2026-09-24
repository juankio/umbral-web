<template>
  <!-- Columna Derecha Fija / Sticky según Figma Frame 112:102 (Texto seleccionable) -->
  <div class="lg:sticky lg:top-24 space-y-6 lg:space-y-7 select-text">
    <!-- Título en Title Case exacto a Figma (Node 112:134) -->
    <div>
      <h2 ref="titleRef" class="font-barlow font-medium text-4xl sm:text-5xl lg:text-[60px] xl:text-[68px] text-black leading-none tracking-tight">
        {{ obra.title }}
      </h2>
    </div>

    <!-- Descripción Oficial en 2 Párrafos: Barlow Condensed Regular -->
    <div ref="descRef" class="space-y-4 font-barlow font-normal text-base sm:text-lg lg:text-[20px] text-neutral-800 leading-[1.25] text-left">
      <p v-for="(paragraph, idx) in descriptionParagraphs" :key="idx">
        {{ paragraph }}
      </p>
    </div>

    <!-- Ficha Técnica con Líneas Divisorias continuas (Line 7, Line 8, Line 9 de Figma) -->
    <div class="pt-2">
      <!-- Línea Divisoria 1 (Figma Line 9) con expansión horizontal -->
      <div ref="line1Ref" class="w-full h-[1.5px] bg-[#030303] my-4 lg:my-5 will-change-transform" />

      <!-- Fila 1: Publicado -->
      <div class="flex items-baseline justify-between gap-4 py-1">
        <span class="font-barlow font-medium text-lg sm:text-xl lg:text-[24px] text-[#3F3F3F] leading-none">
          Publicado
        </span>
        <span class="font-barlow font-normal text-base sm:text-lg lg:text-[22px] text-black text-right leading-none">
          {{ publishedDate }}
        </span>
      </div>

      <!-- Línea Divisoria 2 (Figma Line 7) con expansión horizontal -->
      <div ref="line2Ref" class="w-full h-[1.5px] bg-[#030303] my-4 lg:my-5 will-change-transform" />

      <!-- Fila 2: Materiales -->
      <div class="flex items-start justify-between gap-4 py-1">
        <span class="font-barlow font-medium text-lg sm:text-xl lg:text-[24px] text-[#3F3F3F] leading-none pt-1 flex-shrink-0">
          Materiales
        </span>
        <div class="flex flex-col items-end text-right space-y-1">
          <span
            v-for="(material, idx) in materialsList"
            :key="idx"
            class="font-barlow font-normal text-base sm:text-lg lg:text-[22px] text-black leading-[1.2]"
          >
            {{ material }}
          </span>
        </div>
      </div>

      <!-- Línea Divisoria 3 (Figma Line 8) con expansión horizontal -->
      <div ref="line3Ref" class="w-full h-[1.5px] bg-[#030303] my-4 lg:my-5 will-change-transform" />

      <!-- Fila 3: Diseñado por -->
      <div class="flex items-start justify-between gap-4 py-1">
        <span class="font-barlow font-medium text-lg sm:text-xl lg:text-[24px] text-[#3F3F3F] leading-none pt-1 flex-shrink-0">
          Diseñado por
        </span>
        <div class="flex flex-col items-end text-right space-y-1">
          <span
            v-for="(designer, idx) in obra.designers"
            :key="idx"
            class="font-barlow font-normal text-base sm:text-lg lg:text-[22px] text-black leading-[1.2]"
          >
            {{ designer }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'
import type { Obra } from '~/composables/useObras'

const props = defineProps<{
  obra: Obra
}>()

const titleRef = ref<HTMLElement | null>(null)
const descRef = ref<HTMLElement | null>(null)
const line1Ref = ref<HTMLElement | null>(null)
const line2Ref = ref<HTMLElement | null>(null)
const line3Ref = ref<HTMLElement | null>(null)

const { observeScrollReveal } = useScrollAnimation()

const publishedDate = computed(() => {
  return props.obra.publishedDate || '28/08/2026'
})

const materialsList = computed(() => {
  if (!props.obra.materials) return []
  return props.obra.materials
    .split(',')
    .map(item => item.trim())
    .filter(Boolean)
})

const descriptionParagraphs = computed(() => {
  if (!props.obra.description) return []
  if (props.obra.description.includes('\n\n')) {
    return props.obra.description.split('\n\n').filter(Boolean)
  }
  return [props.obra.description]
})

onMounted(() => {
  observeScrollReveal(titleRef, { type: 'heading', delay: 50 })
  observeScrollReveal(descRef, { type: 'paragraph', delay: 120 })
  observeScrollReveal(line1Ref, { type: 'divider', origin: 'left', delay: 180 })
  observeScrollReveal(line2Ref, { type: 'divider', origin: 'left', delay: 260 })
  observeScrollReveal(line3Ref, { type: 'divider', origin: 'left', delay: 340 })
})
</script>
