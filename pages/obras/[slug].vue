<template>
  <div v-if="obra" class="bg-white min-h-screen text-black">
    <!-- 1. Hero de la Obra: Foto enmarcada + Título 96px + Línea divisoria Line 6 -->
    <ObraHero :obra="obra" />

    <!-- 2. Split Layout Exacto Figma (y: 1271 a 3800) -->
    <article class="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 py-10 lg:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start">
        <!-- Columna Izquierda (Scrollable): Galería de Fotos + Fotograma de Video Oficial -->
        <div class="lg:col-span-7">
          <ObraGallery :images="obra.gallery" :title="obra.title" />
        </div>

        <!-- Columna Derecha (Fija / Sticky): Ficha Técnica Limpia y Metadatos -->
        <div class="lg:col-span-5 self-stretch">
          <ObraMeta :obra="obra" />
        </div>
      </div>
    </article>

    <!-- 3. Sección "Otros proyectos seleccionados" (Carrusel Horizontal Completo) -->
    <ObraRelated :related="relatedObras" />
  </div>

  <div v-else class="max-w-7xl mx-auto px-4 py-32 text-center bg-white min-h-screen">
    <h1 class="font-barlow font-medium text-5xl text-black uppercase tracking-tight">Obra no encontrada</h1>
    <NuxtLink to="/zona-maco" class="mt-6 inline-block font-barlow text-xl text-neutral-600 underline uppercase tracking-wider hover:text-black transition-colors">
      Volver al catálogo de Zona Maco
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useObras } from '~/composables/useObras'

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const { obras, getObraBySlug } = useObras()

const obra = computed(() => getObraBySlug(slug.value))
const relatedObras = computed(() => obras) // pasar toda la colección para que el carrusel muestre todos

useSeoMeta({
  title: computed(() => obra.value ? `${obra.value.title} · Zona Maco 2026 | UMBRAL` : 'Obra · UMBRAL'),
  description: computed(() => obra.value?.description || 'Detalle de la obra seleccionada para Zona Maco 2026.')
})
</script>
