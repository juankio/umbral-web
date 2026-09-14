<template>
  <div v-if="obra" class="bg-white min-h-screen">
    <!-- Hero con triángulos laterales animados y fotografía central según Figma -->
    <ObraHero :obra="obra" />

    <!-- Split Layout Exacto Figma "Obras layout" -->
    <article class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        <!-- Columna Izquierda: Fotos en Vertical y Alta Resolución (lg:col-span-7) -->
        <div class="lg:col-span-7">
          <ObraGallery :images="obra.gallery" :title="obra.title" />
        </div>

        <!-- Columna Derecha: Ficha Técnica y Metadatos Estáticos / Sticky (lg:col-span-5) -->
        <div class="lg:col-span-5">
          <ObraMeta :obra="obra" />
        </div>
      </div>
    </article>

    <!-- Sección "Otros proyectos seleccionados" -->
    <ObraRelated :related="relatedObras" />
  </div>

  <div v-else class="max-w-7xl mx-auto px-4 py-32 text-center bg-white min-h-screen">
    <h1 class="font-barlow font-bold text-4xl text-neutral-950 uppercase tracking-tightest">Obra no encontrada</h1>
    <NuxtLink to="/zona-maco" class="mt-4 inline-block font-barlow text-lg text-neutral-600 underline uppercase tracking-wider">
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
const { getObraBySlug, getRelatedObras } = useObras()

const obra = computed(() => getObraBySlug(slug.value))
const relatedObras = computed(() => getRelatedObras(slug.value, 4))

useSeoMeta({
  title: computed(() => obra.value ? `${obra.value.title} · Zona Maco 2026 | UMBRAL` : 'Obra · UMBRAL'),
  description: computed(() => obra.value?.description || 'Detalle de la obra seleccionada para Zona Maco 2026.')
})
</script>
