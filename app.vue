<template>
  <div class="min-h-screen flex flex-col bg-[#FAFAFA] text-[#1C1C1C] antialiased selection:bg-[#1C1C1C] selection:text-white">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// Umbral - Centro Roberto Garza Sada · Universidad de Monterrey
useSeoMeta({
  title: 'UMBRAL · Centro Roberto Garza Sada | Universidad de Monterrey',
  ogTitle: 'UMBRAL · Centro Roberto Garza Sada | Universidad de Monterrey',
  description: 'Plataforma oficial del Centro Roberto Garza Sada (CRGS). Escuela de Arte, Arquitectura y Diseño de la Universidad de Monterrey. Zona Maco 2027.',
  ogDescription: 'Plataforma oficial del Centro Roberto Garza Sada (CRGS). Escuela de Arte, Arquitectura y Diseño de la Universidad de Monterrey. Zona Maco 2027.',
  ogImage: 'https://umbral-web-three.vercel.app/images/og-umbral.jpg',
  ogImageSecureUrl: 'https://umbral-web-three.vercel.app/images/og-umbral.jpg',
  ogImageType: 'image/jpeg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'UMBRAL · Centro Roberto Garza Sada - Universidad de Monterrey',
  ogUrl: 'https://umbral-web-three.vercel.app/',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'UMBRAL · Centro Roberto Garza Sada | Universidad de Monterrey',
  twitterDescription: 'Plataforma oficial del Centro Roberto Garza Sada (CRGS). Escuela de Arte, Arquitectura y Diseño de la Universidad de Monterrey. Zona Maco 2027.',
  twitterImage: 'https://umbral-web-three.vercel.app/images/og-umbral.jpg'
})
</script>
