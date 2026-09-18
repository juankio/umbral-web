<template>
  <section
    class="relative bg-white overflow-hidden min-h-[75vh] sm:min-h-[85vh] lg:min-h-[calc(100vh-80px)] flex items-center select-text"
  >
    <!-- Contenedor del Título a la izquierda según Figma (#332:303 / #240:6) -->
    <div class="relative z-10 max-w-[1920px] mx-auto w-full px-6 sm:px-12 lg:px-20 xl:px-28 py-16 lg:py-24">
      <h1
        class="font-barlow font-semibold text-4xl sm:text-6xl md:text-8xl lg:text-[120px] xl:text-[145px] text-[#070707] leading-[0.92] tracking-tight max-w-2xl xl:max-w-3xl"
      >
        Centro Roberto<br />
        Garza Sada
      </h1>
    </div>

    <!-- Triángulo Monumental Negro 1:1 Figma (Vector 1: #332:308 / #240:11)
         En Figma el triángulo se desborda por la derecha (x: 497 a 2707 en frame de 1920px),
         con el vértice superior en x: 1693px debajo de Nosotros y cortando el borde derecho a media altura -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      <svg
        viewBox="0 0 1920 1080"
        class="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <!-- Polígono del triángulo con desborde derecho exacto de Figma -->
        <polygon
          points="1693,150 2707,1180 503,1080"
          fill="#1C1C1C"
        />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
// Hero oficial de Nosotros / CRGS 1:1 con Figma (#332:301 / #240:2)
// El triángulo negro (Vector 1) desborda la pantalla por la derecha exactamente como en el archivo de diseño
</script>
