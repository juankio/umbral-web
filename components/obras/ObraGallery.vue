<template>
  <div class="flex flex-col gap-8 lg:gap-12">
    <div
      v-for="(img, idx) in images"
      :key="idx"
      class="group relative bg-white border border-neutral-200 overflow-hidden shadow-sm hover:border-neutral-950 transition-all duration-500 ease-out"
    >
      <!-- Marco vertical arquitectónico de alta resolución -->
      <div class="relative aspect-[3/4] sm:aspect-[4/5] bg-neutral-100 overflow-hidden isolate">
        <img
          :src="img"
          :alt="`${title} - Fotografía vertical en alta resolución ${idx + 1}`"
          :loading="idx === 0 ? 'eager' : 'lazy'"
          decoding="async"
          class="w-full h-full object-cover grayscale-[6%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform transform-gpu"
        />

        <!-- Notación arquitectónica en esquina -->
        <div class="absolute top-4 left-4 font-mono text-xs uppercase tracking-widest bg-neutral-950/90 backdrop-blur-sm text-white px-3 py-1 border border-neutral-800 transition-transform duration-300 group-hover:-translate-y-0.5">
          FIG. 0{{ idx + 1 }} · DETALLE ARQUITECTÓNICO
        </div>

        <!-- Indicador técnico de alta definición -->
        <div class="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest bg-white/95 backdrop-blur-sm text-neutral-950 px-3 py-1.5 border border-neutral-300 shadow-sm flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span class="font-bold">ALTA RESOLUCIÓN</span>
        </div>
      </div>

      <!-- Ficha de registro al pie de imagen -->
      <div class="p-3.5 sm:p-4 border-t border-neutral-200/80 bg-white flex items-center justify-between font-mono text-xs text-neutral-500">
        <span class="truncate">Registro fotográfico · CRGS</span>
        <span class="text-neutral-900 font-medium flex-shrink-0 ml-2">{{ title }} · Archivo 2026</span>
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
