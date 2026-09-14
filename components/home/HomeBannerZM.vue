<template>
  <section class="w-full bg-white pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-20">
    <div class="max-w-[1240px] mx-auto px-6 sm:px-8">
      <!-- Caja rectangular contenida del mismo ancho que HomeIntro -->
      <div class="w-full bg-[#4A4A4A] py-7 sm:py-9 lg:py-10 px-6 sm:px-10 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 shadow-sm">
        <!-- Texto a la izquierda -->
        <h2 class="font-barlow font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#F6F6F6] uppercase tracking-wide leading-none text-center md:text-left">
          DEL 3 AL 7 DE FEBRERO 2027
        </h2>

        <!-- Botón blanco con micro-interacción magnética -->
        <div class="inline-block shrink-0">
          <NuxtLink
            ref="buttonRef"
            to="/zona-maco"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
            class="relative inline-flex items-center justify-center bg-white text-[#1C1C1C] font-barlow font-bold text-xl sm:text-2xl px-8 py-3 uppercase leading-none transition-colors duration-200 hover:bg-neutral-100 active:scale-[0.98] shadow-sm whitespace-nowrap will-change-transform select-none"
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

  const moveX = Math.max(-12, Math.min(12, distX * 0.22))
  const moveY = Math.max(-10, Math.min(10, distY * 0.28))

  animate(buttonRef.value, {
    translateX: moveX,
    translateY: moveY,
    duration: 200,
    ease: 'outQuad'
  })

  if (textRef.value) {
    animate(textRef.value, {
      translateX: moveX * 0.4,
      translateY: moveY * 0.4,
      duration: 200,
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
    ease: 'outCubic'
  })

  if (textRef.value) {
    animate(textRef.value, {
      translateX: 0,
      translateY: 0,
      duration: 550,
      ease: 'outCubic'
    })
  }
}

onUnmounted(() => {
  if (buttonRef.value) {
    animate(buttonRef.value, { translateX: 0, translateY: 0, duration: 0 })
  }
})
</script>
