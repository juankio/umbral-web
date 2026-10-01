<template>
  <div
    class="relative w-full aspect-[1697/751] max-h-[64vh] bg-neutral-950 overflow-hidden shadow-2xl transition-all duration-500 rounded-none border border-neutral-800/80 cursor-pointer"
    :class="{ 'group hover:border-neutral-700': !isPlaying, 'cursor-default': isPlaying }"
    role="button"
    tabindex="0"
    :aria-label="isPlaying ? 'Reproductor de video documental' : 'Reproducir video documental de la Repentina'"
    @click="!isPlaying && startVideo()"
    @keydown.enter="!isPlaying && startVideo()"
    @keydown.space.prevent="!isPlaying && startVideo()"
  >
    <!-- MODO PORTADA: CERO TEXTO. Marco a sangre 1:1 con captura de Figma -->
    <template v-if="!isPlaying">
      <!-- Fotografía oficial del stand de exposición en Zona Maco a sangre -->
      <AppImage
        :src="posterSrc"
        alt="Exposición oficial de la Repentina en Zona Maco"
        img-class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
        wrapper-class="absolute inset-0 w-full h-full"
        loading="lazy"
      />

      <!-- Trazado vectorial oficial exacto de Figma: diagonales en X y triángulo central de Play (Vector 4 / Node 325:20) -->
      <svg
        class="absolute inset-0 w-full h-full pointer-events-none z-10 transition-opacity duration-300 group-hover:opacity-90"
        viewBox="0 0 1697 751"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="0" x2="1697" y2="751" stroke="rgba(0,0,0,0.65)" stroke-width="1.2" />
        <line x1="0" y1="751" x2="1697" y2="0" stroke="rgba(0,0,0,0.65)" stroke-width="1.2" />
        <g transform="translate(788, 305)">
          <path
            d="M0.5 0.432983V138.933L121 69.3623L1.61097 0.432983"
            fill="rgba(255,255,255,0.3)"
            stroke="#000000"
            stroke-width="1.5"
          />
        </g>
      </svg>
    </template>

    <!-- MODO REPRODUCCIÓN: Video inline ocupando todo el marco -->
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
