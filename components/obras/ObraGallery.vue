<template>
  <div class="space-y-6 lg:space-y-8">
    <div
      v-for="(img, idx) in images"
      :key="idx"
      class="group relative bg-white border border-neutral-200 overflow-hidden shadow-sm hover:border-neutral-900 hover:shadow-lg transition-[border-color,box-shadow] duration-500 ease-out"
    >
      <!-- Image frame -->
      <div class="relative aspect-[4/3] sm:aspect-[16/11] bg-neutral-100 overflow-hidden cursor-zoom-in isolate">
        <img
          :src="img"
          :alt="`${title} - Fotografía de alta resolución ${idx + 1}`"
          class="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-[transform,filter] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform transform-gpu"
          loading="lazy"
        />

        <!-- Figure notation -->
        <div class="absolute top-4 left-4 font-mono text-xs uppercase tracking-widest bg-neutral-950/85 backdrop-blur-sm text-white px-3 py-1 border border-neutral-700 transition-transform duration-500 ease-out group-hover:-translate-y-0.5">
          FIG. 0{{ idx + 1 }} · DETALLE ARQUITECTÓNICO
        </div>

        <!-- High-res indicator -->
        <div class="absolute bottom-4 right-4 opacity-90 font-mono text-[10px] uppercase tracking-widest bg-white/95 backdrop-blur-sm text-neutral-900 px-2.5 py-1 border border-neutral-300 shadow-sm flex items-center gap-1.5 transition-transform duration-500 ease-out group-hover:-translate-y-0.5">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>ALTA RESOLUCIÓN</span>
        </div>
      </div>

      <!-- Caption bar -->
      <div class="p-4 border-t border-neutral-100 bg-white flex items-center justify-between font-mono text-xs text-neutral-500">
        <span>Registro fotográfico oficial · Taller CRGS</span>
        <span class="text-neutral-900 font-medium">{{ title }} · Archivo 2026</span>
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
