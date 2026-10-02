<template>
  <div class="bg-white min-h-screen">
    <CrgsHero />
    <CrgsPuertaCreacion />
    <CrgsPrograms />
    <CrgsInformacionAcademica />
  </div>
</template>

<script setup lang="ts">
import CrgsHero from '~/components/crgs/CrgsHero.vue'
import CrgsPuertaCreacion from '~/components/crgs/CrgsPuertaCreacion.vue'
import CrgsPrograms from '~/components/crgs/CrgsPrograms.vue'
import CrgsInformacionAcademica from '~/components/crgs/CrgsInformacionAcademica.vue'

// Redirección permanente y alias de compatibilidad hacia /nosotros
definePageMeta({
  middleware: [
    () => navigateTo('/nosotros', { redirectCode: 301 })
  ]
})

useSeoMeta({
  title: 'Nosotros · Centro Roberto Garza Sada | UMBRAL',
  description: 'Conoce el Centro Roberto Garza Sada de la Universidad de Monterrey, La Puerta de la Creación diseñada por Tadao Ando y su oferta académica en Arte y Diseño.'
})
</script>
