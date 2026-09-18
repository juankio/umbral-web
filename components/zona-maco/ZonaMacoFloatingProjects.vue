<template>
  <div class="hidden lg:block absolute inset-0 pointer-events-none z-20 overflow-hidden select-none">
    <div class="relative w-full h-full max-w-[1720px] mx-auto">
      <!-- 1. Top-Left: Encuadre (escalinata terracota) -->
      <NuxtLink
        to="/obras/encuadre"
        class="floating-card absolute left-4 sm:left-8 lg:left-12 xl:left-20 top-[8%] sm:top-[10%] -rotate-3 hover:rotate-0 w-24 sm:w-32 lg:w-40 xl:w-48 aspect-square bg-white p-1.5 sm:p-2 shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500 ease-out hover:scale-108 hover:z-30 pointer-events-auto group focus:outline-none"
        aria-label="Ver obra Encuadre"
      >
        <div class="w-full h-full relative overflow-hidden bg-[#EDEDED]">
          <img
            src="/images/figma-product-encuadre.png"
            alt="Encuadre"
            class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="eager"
            draggable="false"
          />
          <div class="absolute bottom-1.5 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span class="font-barlow font-medium text-xs sm:text-sm text-black uppercase bg-white/90 px-1.5 py-0.5 shadow-xs">
              Encuadre
            </span>
          </div>
        </div>
      </NuxtLink>

      <!-- 2. Mid-Left: Interconexión (torre geométrica oliva) -->
      <NuxtLink
        to="/obras/interconexion"
        class="floating-card absolute left-8 sm:left-14 lg:left-20 xl:left-32 top-[44%] -translate-y-1/2 rotate-2 hover:rotate-0 w-22 sm:w-28 lg:w-36 xl:w-44 aspect-square bg-white p-1.5 sm:p-2 shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500 ease-out hover:scale-108 hover:z-30 pointer-events-auto group focus:outline-none"
        aria-label="Ver obra Interconexión"
      >
        <div class="w-full h-full relative overflow-hidden bg-[#434B2E]">
          <img
            src="/images/figma-product-interconexion.png"
            alt="Interconexión"
            class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="eager"
            draggable="false"
          />
          <div class="absolute bottom-1.5 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span class="font-barlow font-medium text-xs sm:text-sm text-black uppercase bg-white/90 px-1.5 py-0.5 shadow-xs">
              Interconexión
            </span>
          </div>
        </div>
      </NuxtLink>

      <!-- 3. Bottom-Left: Curado (libro magenta editorial) -->
      <NuxtLink
        to="/obras/curado"
        class="floating-card absolute left-4 sm:left-10 lg:left-16 xl:left-24 bottom-[10%] sm:bottom-[12%] -rotate-2 hover:rotate-0 w-24 sm:w-32 lg:w-40 xl:w-46 aspect-square bg-white p-1.5 sm:p-2 shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500 ease-out hover:scale-108 hover:z-30 pointer-events-auto group focus:outline-none"
        aria-label="Ver obra Curado"
      >
        <div class="w-full h-full relative overflow-hidden bg-[#DCDCDC]">
          <img
            src="/images/figma-product-curado.png"
            alt="Curado"
            class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="eager"
            draggable="false"
          />
          <div class="absolute bottom-1.5 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span class="font-barlow font-medium text-xs sm:text-sm text-black uppercase bg-white/90 px-1.5 py-0.5 shadow-xs">
              Curado
            </span>
          </div>
        </div>
      </NuxtLink>

      <!-- 4. Top-Right: Roberto (mesa escultórica de madera y metal) -->
      <NuxtLink
        to="/obras/roberto"
        class="floating-card absolute right-4 sm:right-10 lg:right-16 xl:right-24 top-[6%] sm:top-[8%] rotate-3 hover:rotate-0 w-26 sm:w-36 lg:w-44 xl:w-52 aspect-square bg-white p-1.5 sm:p-2 shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500 ease-out hover:scale-108 hover:z-30 pointer-events-auto group focus:outline-none"
        aria-label="Ver obra Roberto"
      >
        <div class="w-full h-full relative overflow-hidden bg-[#E5E5E0]">
          <img
            src="/images/figma-product-roberto.png"
            alt="Roberto"
            class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="eager"
            draggable="false"
          />
          <div class="absolute bottom-1.5 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span class="font-barlow font-medium text-xs sm:text-sm text-black uppercase bg-white/90 px-1.5 py-0.5 shadow-xs">
              Roberto
            </span>
          </div>
        </div>
      </NuxtLink>

      <!-- 5. Mid-Right: Sagaón (jarrón cerámico) -->
      <NuxtLink
        to="/obras/sagaon"
        class="floating-card absolute right-8 sm:right-16 lg:right-22 xl:right-36 top-[46%] -translate-y-1/2 -rotate-3 hover:rotate-0 w-24 sm:w-32 lg:w-40 xl:w-46 aspect-square bg-white p-1.5 sm:p-2 shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500 ease-out hover:scale-108 hover:z-30 pointer-events-auto group focus:outline-none"
        aria-label="Ver obra Sagaón"
      >
        <div class="w-full h-full relative overflow-hidden bg-[#D5CFC9]">
          <img
            src="/images/figma-product-sagaon.png"
            alt="Sagaón"
            class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="eager"
            draggable="false"
          />
          <div class="absolute bottom-1.5 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span class="font-barlow font-medium text-xs sm:text-sm text-black uppercase bg-white/90 px-1.5 py-0.5 shadow-xs">
              Sagaón\
            </span>
          </div>
        </div>
      </NuxtLink>

      <!-- 6. Bottom-Right: Entretiempo (reloj madera y vidrio) -->
      <NuxtLink
        to="/obras/entretiempo"
        class="floating-card absolute right-4 sm:right-10 lg:right-16 xl:right-24 bottom-[8%] sm:bottom-[10%] rotate-2 hover:rotate-0 w-26 sm:w-34 lg:w-42 xl:w-48 aspect-square bg-white p-1.5 sm:p-2 shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500 ease-out hover:scale-108 hover:z-30 pointer-events-auto group focus:outline-none"
        aria-label="Ver obra Entretiempo"
      >
        <div class="w-full h-full relative overflow-hidden bg-[#EAEAEA]">
          <img
            src="/images/figma-product-entretiempo.png"
            alt="Entretiempo"
            class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="eager"
            draggable="false"
          />
          <div class="absolute bottom-1.5 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span class="font-barlow font-medium text-xs sm:text-sm text-black uppercase bg-white/90 px-1.5 py-0.5 shadow-xs">
              Entretiempo\
            </span>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { animate } from 'animejs'

onMounted(() => {
  if (!import.meta.client) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  // Micro-animación de respiración/flotación sutil y asimétrica
  animate('.floating-card', {
    translateY: [-6, 6],
    duration: 3400,
    delay: (_el, i) => i * 380,
    direction: 'alternate',
    loop: true,
    ease: 'inOutSine'
  })
})
</script>
