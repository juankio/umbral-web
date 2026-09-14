<template>
  <div class="space-y-6 lg:space-y-8">
    <div
      v-for="(img, idx) in images"
      :key="idx"
      class="group relative bg-white border border-neutral-200 overflow-hidden shadow-sm hover:border-neutral-900 hover:shadow-xl transition-all duration-500 ease-out"
    >
      <!-- Image frame -->
      <div class="relative aspect-[4/3] sm:aspect-[16/11] bg-neutral-100 overflow-hidden cursor-zoom-in">
        <img
          :src="img"
          :alt="`${title} - Vista ${idx + 1}`"
          class="w-full h-full object-cover grayscale-[12%] group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out will-change-transform"
          loading="lazy"
        />

        <!-- Subtle architectural light veil -->
        <div class="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/[0.04] transition-colors duration-500 pointer-events-none" />

        <!-- Figure notation -->
        <div class="absolute top-4 left-4 font-mono text-xs uppercase tracking-widest bg-black/85 backdrop-blur-sm text-white px-3 py-1 border border-neutral-700 transition-transform duration-300 group-hover:translate-x-1">
          FIG. 0{{ idx + 1 }} · VISTA ARQUITECTÓNICA
        </div>

        <div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 font-mono text-[10px] uppercase tracking-widest bg-white/95 backdrop-blur-sm text-neutral-900 px-2.5 py-1 border border-neutral-300 shadow-sm flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>ALTA RESOLUCIÓN</span>
        </div>
      </div>

      <!-- Caption bar -->
      <div class="p-4 border-t border-neutral-100 bg-[#FAFAFA] flex items-center justify-between font-mono text-xs text-neutral-500 transition-colors duration-300 group-hover:bg-white">
        <span>Registro fotográfico de taller</span>
        <span class="text-neutral-700 font-medium">{{ title }} · Archivo CRGS</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  images: string[]
  title: string
}>()
</script>
