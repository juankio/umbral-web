<template>
  <div
    class="w-full bg-[#1C1C1C] text-white py-3.5 overflow-hidden select-none border-y border-neutral-800"
    aria-hidden="true"
  >
    <div class="animate-marquee whitespace-nowrap flex items-center gap-6">
      <span
        v-for="i in 12"
        :key="i"
        class="inline-flex items-center gap-6 font-barlow font-bold text-xl sm:text-2xl uppercase tracking-[0.25em] text-neutral-100"
      >
        <span>PENSAMIENTO. MATERIA. CREACIÓN.</span>
        <span class="w-1.5 h-1.5 rounded-full bg-neutral-500 inline-block" />
        <span class="text-neutral-400 font-light">UMBRAL \ CRGS</span>
        <span class="w-1.5 h-1.5 rounded-full bg-neutral-500 inline-block" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
// Ticker infinito con animación CSS nativa de alto rendimiento
</script>
