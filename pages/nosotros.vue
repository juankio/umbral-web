<template>
  <div class="bg-white min-h-screen overflow-x-hidden selection:bg-[#1C1C1C] selection:text-white">
    <NosotrosHero />
    <NosotrosAsesores />
    <NosotrosDisenoGrafico />
    <NosotrosDisenoInteriores />
  </div>
</template>

<script setup lang="ts">
import NosotrosHero from '~/components/nosotros/NosotrosHero.vue'
import NosotrosAsesores from '~/components/nosotros/NosotrosAsesores.vue'
import NosotrosDisenoGrafico from '~/components/nosotros/NosotrosDisenoGrafico.vue'
import NosotrosDisenoInteriores from '~/components/nosotros/NosotrosDisenoInteriores.vue'

useSeoMeta({
  title: 'Integrantes Umbral · UMBRAL',
  ogTitle: 'Integrantes Umbral · UMBRAL',
  description: 'Conoce a los integrantes, asesores y alumnas detrás del sistema visual y espacial de Umbral, Centro Roberto Garza Sada · Universidad de Monterrey.',
  ogDescription: 'Conoce a los integrantes, asesores y alumnas detrás del sistema visual y espacial de Umbral, Centro Roberto Garza Sada · Universidad de Monterrey.',
  ogImage: 'https://umbral-web-three.vercel.app/images/og-umbral.jpg',
  ogUrl: 'https://umbral-web-three.vercel.app/nosotros',
  twitterCard: 'summary_large_image'
})
</script>
