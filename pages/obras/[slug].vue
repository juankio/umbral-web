<template>
  <div v-if="obra" class="bg-white min-h-screen text-black">
    <!-- Barra de navegación/retorno sutil superior -->
    <nav class="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 pt-6 sm:pt-8 pb-2 sm:pb-4">
      <NuxtLink
        to="/zona-maco"
        class="inline-flex items-center gap-2 font-barlow font-normal text-sm sm:text-base text-neutral-600 hover:text-black transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-black group"
      >
        <span class="inline-block transition-transform duration-200 group-hover:-translate-x-1 select-none" aria-hidden="true">←</span>
        <span>Zona Maco / Catálogo de Obras</span>
      </NuxtLink>
    </nav>

    <!-- Split Layout: Galería a la izquierda y Ficha Técnica a la derecha -->
    <article class="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 py-6 sm:py-8 lg:py-12">
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

    <!-- Sección "Otros Proyectos Seleccionados" (Carrusel Horizontal Completo) -->
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
