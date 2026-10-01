<template>
  <div
    class="relative w-full aspect-[16/9] sm:aspect-[1697/751] bg-neutral-950 overflow-hidden shadow-2xl border border-neutral-800 transition-all duration-500 rounded-xs"
    :class="{ 'group cursor-pointer hover:border-neutral-700': !isPlaying }"
    @click="!isPlaying && startVideo()"
  >
    <!-- MODO PORTADA: Sin divisores toscos, con esquineros arquitectónicos y triángulo central -->
    <template v-if="!isPlaying">
      <!-- Fotografía oficial del stand de exposición en Zona Maco -->
      <AppImage
        :src="posterSrc"
        alt="Exposición oficial de la Repentina en Zona Maco"
        img-class="w-full h-full object-cover opacity-85 transition-all duration-700 group-hover:opacity-95 group-hover:scale-[1.01]"
        wrapper-class="absolute inset-0 w-full h-full"
        loading="lazy"
      />

      <!-- Overlay sutil de galería -->
      <div class="absolute inset-0 bg-neutral-950/30 group-hover:bg-neutral-950/15 transition-colors duration-500" />

      <!-- Esquineros Arquitectónicos Minimalistas y Guías Perimetrales Sutiles -->
      <div class="absolute inset-3 sm:inset-5 pointer-events-none z-10">
        <!-- Esquina Superior Izquierda -->
        <span class="absolute top-0 left-0 w-3.5 h-3.5 border-t border-l border-white/50" />
        <!-- Esquina Superior Derecha -->
        <span class="absolute top-0 right-0 w-3.5 h-3.5 border-t border-r border-white/50" />
        <!-- Esquina Inferior Izquierda -->
        <span class="absolute bottom-0 left-0 w-3.5 h-3.5 border-b border-l border-white/50" />
        <!-- Esquina Inferior Derecha -->
        <span class="absolute bottom-0 right-0 w-3.5 h-3.5 border-b border-r border-white/50" />

        <!-- Metadatos perimetrales técnicos -->
        <div class="absolute top-1 left-3.5 sm:left-4 font-mono text-[9px] sm:text-[11px] uppercase tracking-widest text-neutral-300">
          REGISTRO AUDIOVISUAL · REPENTINA
        </div>
        <div class="absolute bottom-1 right-3.5 sm:right-4 font-mono text-[9px] sm:text-[11px] uppercase tracking-widest text-neutral-400 hidden sm:block">
          CRGS · ZONA MACO 2026
        </div>
      </div>

      <!-- Botón Central de Play Escultórico (Triángulo Figma estilizado e interactivo) -->
      <div class="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
        <button
          type="button"
          class="pointer-events-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-neutral-950/70 hover:bg-neutral-950/90 text-white border border-white/30 hover:border-white/80 backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-2xl group-hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer"
          aria-label="Reproducir video documental de la Repentina inline"
          @click.stop="startVideo"
        >
          <!-- Triángulo escultórico Vector 4 Figma (325:20) -->
          <svg
            class="w-6 h-6 sm:w-8 sm:h-8 translate-x-0.5 fill-white transition-transform duration-300 group-hover:scale-110"
            viewBox="0 0 121 139"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 0.43V138.93L121 69.36L0.5 0.43Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <span class="mt-3 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-white/85 drop-shadow">
          Ver Documental Inline
        </span>
      </div>
    </template>

    <!-- MODO REPRODUCCIÓN: Video inline en el marco, sin modal bloqueante ni divisores -->
    <template v-else>
      <iframe
        class="w-full h-full absolute inset-0 z-10 border-0"
        :src="embedUrl"
        title="Documental Repentina CRGS - Zona Maco"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />

      <!-- Botón flotante minimalista en la esquina para pausar/cerrar el video -->
      <button
        type="button"
        class="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 bg-neutral-950/85 hover:bg-neutral-900 text-neutral-200 hover:text-white border border-white/20 hover:border-white/50 backdrop-blur-md px-3 py-1.5 rounded-full font-mono text-[10px] sm:text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all duration-300 shadow-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Cerrar video y volver a portada"
        @click.stop="stopVideo"
      >
        <svg
          class="w-3.5 h-3.5 stroke-current"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
        <span>Cerrar</span>
      </button>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Props {
  posterSrc?: string
  videoUrl?: string
}

const props = withDefaults(defineProps<Props>(), {
  posterSrc: '/images/figma-zm-repentina-showcase.webp',
  videoUrl: 'https://www.youtube-nocookie.com/embed/Ro-pZcZIuPQ'
})

const isPlaying = ref(false)

const embedUrl = computed(() => {
  const separator = props.videoUrl.includes('?') ? '&' : '?'
  return `${props.videoUrl}${separator}autoplay=1&rel=0&modestbranding=1`
})

const startVideo = () => {
  isPlaying.value = true
}

const stopVideo = () => {
  isPlaying.value = false
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isPlaying.value) {
    stopVideo()
  }
}

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('keydown', handleKeydown)
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('keydown', handleKeydown)
  }
})
</script>
