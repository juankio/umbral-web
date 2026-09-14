<template>
  <header
    class="sticky top-0 z-50 w-full bg-white transition-all duration-200"
    :class="isScrolled ? 'border-b border-neutral-200 shadow-sm' : ''"
  >
    <div class="max-w-[1720px] mx-auto px-6 sm:px-12 py-5 flex items-center justify-between">
      <!-- Logo Umbral izquierda -->
      <NuxtLink to="/" class="inline-flex items-center" aria-label="Ir al inicio de Umbral">
        <img
          src="/images/logo-umbral.png"
          alt="Umbral"
          class="h-10 sm:h-12 w-auto object-contain"
        />
      </NuxtLink>

      <!-- Navegación desktop derecha -->
      <nav class="hidden md:flex items-center gap-10">
        <NuxtLink
          to="/zona-maco"
          class="inline-flex items-center gap-2.5 font-barlow text-[28px] sm:text-[32px] font-normal text-black normal-case border-b-[3px] border-[#A3A3A3] pb-0.5 hover:border-black transition-colors"
        >
          <span>Zona Maco</span>
          <img
            src="/images/nav-chevron.svg"
            alt=""
            class="w-4 h-2.5 object-contain"
            aria-hidden="true"
          />
        </NuxtLink>

        <NuxtLink
          to="/crgs"
          class="font-barlow text-[28px] sm:text-[32px] font-normal text-black normal-case border-b-[3px] border-[#A3A3A3] pb-0.5 hover:border-black transition-colors"
        >
          Nosotros
        </NuxtLink>
      </nav>

      <!-- Botón móvil -->
      <button
        type="button"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden p-2 text-black focus:outline-none"
        aria-label="Alternar menú de navegación"
      >
        <svg
          v-if="!isMobileMenuOpen"
          class="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          class="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Menú móvil desplegable -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden border-t border-neutral-200 bg-white px-6 py-6 flex flex-col gap-6"
    >
      <NuxtLink
        to="/zona-maco"
        @click="isMobileMenuOpen = false"
        class="inline-flex items-center justify-between font-barlow text-[28px] font-normal text-black normal-case border-b-[3px] border-[#A3A3A3] pb-1"
      >
        <span>Zona Maco</span>
        <img src="/images/nav-chevron.svg" alt="" class="w-4 h-2.5 object-contain" />
      </NuxtLink>

      <NuxtLink
        to="/crgs"
        @click="isMobileMenuOpen = false"
        class="inline-block font-barlow text-[28px] font-normal text-black normal-case border-b-[3px] border-[#A3A3A3] pb-1"
      >
        Nosotros
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useWindowScroll } from '@vueuse/core'

const isMobileMenuOpen = ref(false)
const { y } = useWindowScroll()
const isScrolled = computed(() => y.value > 10)
</script>
