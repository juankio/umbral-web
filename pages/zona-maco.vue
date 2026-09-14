<template>
  <div class="bg-white min-h-screen">
    <ZonaMacoHero @select="handleCategorySelect" />
    <ZonaMacoContext />
    <ZonaMacoProjectsCarousel ref="carouselComponentRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ZonaMacoHero from '~/components/zona-maco/ZonaMacoHero.vue'
import ZonaMacoContext from '~/components/zona-maco/ZonaMacoContext.vue'
import ZonaMacoProjectsCarousel from '~/components/zona-maco/ZonaMacoProjectsCarousel.vue'

useSeoMeta({
  title: 'Zona Maco 2026 · Expositores CRGS | UMBRAL',
  description: 'Catálogo de obras seleccionadas del Centro Roberto Garza Sada para Zona Maco 2026. A través del Umbral.'
})

const carouselComponentRef = ref<{ setCategory: (cat: string) => void; scrollToCategory: (cat: string) => void } | null>(null)

const categoryMap: Record<string, string> = {
  'ARTE CONTEMPORÁNEO': 'Arte Contemporáneo',
  'ARTE MODERNO': 'Arte Moderno',
  'DISEÑO EMERGENTE': 'Diseño Emergente',
  'DISEÑO': 'Diseño'
}

const handleCategorySelect = (rawCat: string) => {
  const target = categoryMap[rawCat] || 'Todas'
  if (carouselComponentRef.value?.setCategory) {
    carouselComponentRef.value.setCategory(target)
  }
}
</script>
