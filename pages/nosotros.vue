<template>
  <div class="bg-white min-h-screen">
    <!-- 1. Hero Institucional Centro Roberto Garza Sada -->
    <CrgsHero />

    <!-- 2. La Puerta de la Creación (Arquitectura & Video Tadao Ando) -->
    <CrgsPuertaCreacion />

    <!-- 3. Oferta Académica / Programas Profesionales -->
    <CrgsPrograms />

    <!-- 4. Díptico Más Información de Carreras / CTA Integrantes -->
    <CrgsInformacionAcademica />
  </div>
</template>

<script setup lang="ts">
import CrgsHero from '~/components/crgs/CrgsHero.vue'
import CrgsPuertaCreacion from '~/components/crgs/CrgsPuertaCreacion.vue'
import CrgsPrograms from '~/components/crgs/CrgsPrograms.vue'
import CrgsInformacionAcademica from '~/components/crgs/CrgsInformacionAcademica.vue'

useSeoMeta({
  title: 'Nosotros · Centro Roberto Garza Sada | UMBRAL',
  ogTitle: 'Nosotros · Centro Roberto Garza Sada | UMBRAL',
  description: 'Conoce el Centro Roberto Garza Sada de la Universidad de Monterrey, La Puerta de la Creación diseñada por Tadao Ando y su oferta académica en Arte, Arquitectura y Diseño.',
  ogDescription: 'Conoce el Centro Roberto Garza Sada de la Universidad de Monterrey, La Puerta de la Creación diseñada por Tadao Ando y su oferta académica en Arte, Arquitectura y Diseño.',
  ogImage: 'https://umbral-web-three.vercel.app/images/og-umbral.jpg',
  ogUrl: 'https://umbral-web-three.vercel.app/nosotros',
  twitterCard: 'summary_large_image'
})
</script>
