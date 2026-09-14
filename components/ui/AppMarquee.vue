<template>
  <div
    class="animate-marquee-hover-boost group relative w-full h-[141px] bg-[#1C1C1C] flex items-center overflow-hidden select-none cursor-pointer"
    aria-hidden="true"
  >
    <div class="animate-marquee whitespace-nowrap flex items-center group-hover:opacity-95 transition-opacity duration-300">
      <div
        v-for="i in 8"
        :key="i"
        class="flex items-center flex-shrink-0"
      >
        <span class="font-barlow text-3xl md:text-[48px] font-normal text-white tracking-widest uppercase px-6 md:px-10 transition-colors duration-500 group-hover:text-amber-100">
          PENSAMIENTO. MATERIA. CREACIÓN.
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Marquee infinito continuo con aceleración cinética al hover
</script>
