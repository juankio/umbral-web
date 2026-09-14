<template>
  <div v-if="obra">
    <article class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <!-- Columna Izquierda Fija/Sticky con Metadata -->
        <div class="lg:col-span-5">
          <ObraMeta :obra="obra" />
        </div>

        <!-- Columna Derecha con Galería de Imágenes en Alta Resolución -->
        <div class="lg:col-span-7">
          <ObraGallery :images="obra.gallery" :title="obra.title" />
        </div>
      </div>
    </article>

    <!-- Carrusel Inferior de Proyectos Relacionados -->
    <ObraRelated :related="relatedObras" />
  </div>

  <div v-else class="max-w-7xl mx-auto px-4 py-32 text-center">
    <h1 class="font-barlow font-bold text-4xl text-neutral-900 uppercase">Obra no encontrada</h1>
    <NuxtLink to="/zona-maco" class="mt-4 inline-block font-barlow text-lg text-neutral-600 underline">
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
  title: computed(() => obra.value ? `${obra.value.title} · Zona Maco 2027 | UMBRAL` : 'Obra · UMBRAL'),
  description: computed(() => obra.value?.description || 'Detalle de la obra seleccionada para Zona Maco 2027.')
})
</script>
