<template>
  <div class="bg-white min-h-screen overflow-x-clip selection:bg-[#1C1C1C] selection:text-white">
    <!-- 1. Portada Monumental Oscura (con marquesina al ras de 100dvh) -->
    <NosotrosHero />

    <!-- 2. Creadores De Las Piezas (Ganadores Repentina) -->
    <NosotrosGanadoresRepentina />

    <!-- 3. Stand de Diseño Gráfico -->
    <NosotrosDisenoGrafico />

    <!-- 4. Stand De Diseño De Interiores (con fotos reales) -->
    <NosotrosDisenoInteriores />

    <!-- 5. Asesores de Proyectos al pie -->
    <NosotrosAsesores />
  </div>
</template>

<script setup lang="ts">
import NosotrosHero from '~/components/nosotros/NosotrosHero.vue'
import NosotrosGanadoresRepentina from '~/components/nosotros/NosotrosGanadoresRepentina.vue'
import NosotrosDisenoGrafico from '~/components/nosotros/NosotrosDisenoGrafico.vue'
import NosotrosDisenoInteriores from '~/components/nosotros/NosotrosDisenoInteriores.vue'
import NosotrosAsesores from '~/components/nosotros/NosotrosAsesores.vue'

useSeoMeta({
  title: 'Integrantes de Umbral · UMBRAL',
  ogTitle: 'Integrantes de Umbral · UMBRAL',
  description: 'Conoce a los integrantes, creadores de las piezas, alumnas de stands y asesores detrás de Umbral en Zona Maco 2027 · Centro Roberto Garza Sada · Universidad de Monterrey.',
  ogDescription: 'Conoce a los integrantes, creadores de las piezas, alumnas de stands y asesores detrás de Umbral en Zona Maco 2027 · Centro Roberto Garza Sada · Universidad de Monterrey.',
  ogImage: 'https://umbral-web-three.vercel.app/images/og-umbral.jpg',
  ogUrl: 'https://umbral-web-three.vercel.app/integrantes',
  twitterCard: 'summary_large_image'
})
</script>
