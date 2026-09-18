<template>
  <div
    class="relative overflow-hidden"
    :class="wrapperClass"
  >
    <!-- Skeleton Shimmer Placeholder (Visible mientras carga) -->
    <div
      v-if="showSkeleton && !isLoaded && !hasError"
      aria-hidden="true"
      class="absolute inset-0 bg-neutral-100 flex items-center justify-center pointer-events-none z-0"
    >
      <!-- Animación Shimmer sutil tipo Vercel/Linear -->
      <div class="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      
      <!-- Icono geométrico minimalista en marca de agua -->
      <svg class="w-6 h-6 text-neutral-300 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    </div>

    <!-- Imagen con Fallback y Modern Picture Tag -->
    <picture v-if="!hasError" class="w-full h-full block">
      <source
        v-if="webpSrc"
        :srcset="computedWebpSrc"
        type="image/webp"
      />
      <img
        ref="imgRef"
        :src="computedFallbackSrc"
        :alt="alt"
        :loading="loading"
        :fetchpriority="fetchpriority"
        :decoding="decoding"
        :draggable="draggable"
        class="transition-opacity duration-500 ease-out"
        :class="[
          imgClass,
          isLoaded ? 'opacity-100' : 'opacity-0'
        ]"
        @load="onLoad"
        @error="onError"
      />
    </picture>

    <!-- Estado de Error por Red Caída / Falla de Conexión -->
    <div
      v-else
      class="absolute inset-0 bg-neutral-100 flex flex-col items-center justify-center p-4 text-center z-10"
    >
      <svg class="w-7 h-7 text-neutral-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
      <span class="font-barlow text-xs text-neutral-500 block mb-2">Error de conexión al cargar imagen</span>
      <button
        type="button"
        class="font-barlow text-xs font-medium text-black px-2.5 py-1 bg-white border border-neutral-300 hover:border-black transition-colors rounded-xs shadow-2xs cursor-pointer"
        @click="retryLoad"
      >
        Reintentar
      </button>
    </div>

    <!-- Slot opcional para overlays como velos hover -->
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface Props {
  src: string
  alt?: string
  wrapperClass?: string
  imgClass?: string
  loading?: 'lazy' | 'eager'
  fetchpriority?: 'auto' | 'high' | 'low'
  decoding?: 'async' | 'sync' | 'auto'
  draggable?: boolean
  showSkeleton?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  alt: '',
  wrapperClass: 'w-full h-full',
  imgClass: 'w-full h-full object-cover',
  loading: 'lazy',
  fetchpriority: 'auto',
  decoding: 'async',
  draggable: false,
  showSkeleton: true
})

const isLoaded = ref(false)
const hasError = ref(false)
const retryKey = ref(0)
const imgRef = ref<HTMLImageElement | null>(null)

// Detección y generación automática de ruta WebP
const webpSrc = computed(() => {
  if (!props.src) return ''
  if (props.src.endsWith('.svg')) return ''
  if (props.src.endsWith('.webp')) return props.src
  if (props.src.endsWith('.png') || props.src.endsWith('.jpg') || props.src.endsWith('.jpeg')) {
    return props.src.replace(/\.(png|jpg|jpeg)$/i, '.webp')
  }
  return ''
})

const computedWebpSrc = computed(() => {
  if (!webpSrc.value) return ''
  return retryKey.value > 0 ? `${webpSrc.value}?retry=${retryKey.value}` : webpSrc.value
})

const computedFallbackSrc = computed(() => {
  if (!props.src) return ''
  return retryKey.value > 0 ? `${props.src}?retry=${retryKey.value}` : props.src
})

const onLoad = () => {
  isLoaded.value = true
  hasError.value = false
}

const onError = () => {
  hasError.value = true
  isLoaded.value = false
}

const retryLoad = () => {
  hasError.value = false
  isLoaded.value = false
  retryKey.value++
}

// Si la imagen ya fue cargada por caché del navegador antes de montar
onMounted(() => {
  if (imgRef.value?.complete && imgRef.value.naturalWidth > 0) {
    isLoaded.value = true
  }
})
</script>

<style scoped>
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>
