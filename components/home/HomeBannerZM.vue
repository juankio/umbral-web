<template>
  <section class="w-full bg-white py-4 sm:py-6 lg:py-8">
    <div class="max-w-[1280px] mx-auto px-6 sm:px-12">
      <!-- Caja contenida piedra carbón con detalle arquitectónico -->
      <div class="relative w-full bg-[#1C1C1C] border border-[#2E2E2E] py-6 sm:py-8 px-8 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 shadow-sm">
        <!-- Cotas técnicas en las 4 esquinas del marco -->
        <span class="absolute top-2 left-2 font-mono text-[10px] text-white/20 select-none pointer-events-none">+</span>
        <span class="absolute top-2 right-2 font-mono text-[10px] text-white/20 select-none pointer-events-none">+</span>
        <span class="absolute bottom-2 left-2 font-mono text-[10px] text-white/20 select-none pointer-events-none">+</span>
        <span class="absolute bottom-2 right-2 font-mono text-[10px] text-white/20 select-none pointer-events-none">+</span>

        <!-- Columna Izquierda: Micro-tag y Fechas Oficiales -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left z-10">
          <div class="flex items-center gap-2 mb-1.5 font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase select-none">
            <span class="inline-block w-1.5 h-1.5 bg-[#F6D152] rounded-full animate-ping"></span>
            <span>REPENTINA · ZONA MACO</span>
          </div>
          <h2 class="font-barlow font-bold text-3xl sm:text-4xl lg:text-[46px] text-white tracking-wide uppercase leading-none">
            DEL 3 AL 7 DE FEBRERO 2027
          </h2>
        </div>

        <!-- Columna Derecha: Botón blanco impecable con atracción magnética al cursor y elevación -->
        <div class="inline-block shrink-0 z-10">
          <NuxtLink
            ref="buttonRef"
            to="/zona-maco"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
            class="relative inline-flex items-center justify-center font-barlow font-bold text-xl sm:text-2xl text-black px-8 py-3.5 bg-white hover:bg-neutral-50 transition-all shadow-md hover:shadow-2xl hover:scale-[1.03] uppercase leading-none whitespace-nowrap select-none active:scale-95 will-change-transform"
          >
            <span ref="textRef" class="inline-block pointer-events-none will-change-transform">
              VER UBICACIÓN
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { animate } from 'animejs'

const buttonRef = ref<HTMLElement | null>(null)
const textRef = ref<HTMLElement | null>(null)
let isPointerFine = false
let prefersReducedMotion = false

onMounted(() => {
  if (!import.meta.client) return
  isPointerFine = window.matchMedia('(pointer: fine)').matches
  prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
})

const handleMouseMove = (e: MouseEvent) => {
  if (!isPointerFine || prefersReducedMotion || !buttonRef.value) return
  const rect = buttonRef.value.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  const distX = e.clientX - centerX
  const distY = e.clientY - centerY

  const moveX = Math.max(-14, Math.min(14, distX * 0.28))
  const moveY = Math.max(-10, Math.min(10, distY * 0.32))

  animate(buttonRef.value, {
    translateX: moveX,
    translateY: moveY - 3,
    duration: 180,
    ease: 'outQuad'
  })

  if (textRef.value) {
    animate(textRef.value, {
      translateX: moveX * 0.45,
      translateY: moveY * 0.45,
      duration: 180,
      ease: 'outQuad'
    })
  }
}

const handleMouseLeave = () => {
  if (!buttonRef.value || prefersReducedMotion) return
  animate(buttonRef.value, {
    translateX: 0,
    translateY: 0,
    duration: 550,
    ease: 'outElastic(1, .6)'
  })

  if (textRef.value) {
    animate(textRef.value, {
      translateX: 0,
      translateY: 0,
      duration: 550,
      ease: 'outElastic(1, .6)'
    })
  }
}

onUnmounted(() => {
  if (buttonRef.value) {
    animate(buttonRef.value, { translateX: 0, translateY: 0, duration: 0 })
  }
})
</script>
