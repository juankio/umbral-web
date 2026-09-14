<template>
  <header
    class="sticky top-0 z-50 w-full transition-all duration-300 ease-out"
    :class="[
      isScrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200/90 shadow-sm'
        : 'bg-white/80 backdrop-blur-sm border-b border-neutral-200/40 shadow-none'
    ]"
  >
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ease-out"
      :class="isScrolled ? 'h-16' : 'h-20'"
    >
      <!-- Logo Umbral -->
      <NuxtLink
        to="/"
        class="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
        aria-label="Ir a la página de inicio de Umbral CRGS"
      >
        <img
          src="/images/logo-umbral.png"
          alt="Umbral CRGS"
          class="w-auto object-contain transition-all duration-300"
          :class="isScrolled ? 'h-8 sm:h-9' : 'h-9 sm:h-10'"
        />
        <div class="hidden md:flex flex-col border-l border-neutral-300 pl-3">
          <span class="font-barlow font-bold text-xs uppercase tracking-widest text-neutral-900 leading-none">CRGS</span>
          <span class="font-sans text-[10px] text-neutral-500 uppercase tracking-wider">UDEM</span>
        </div>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden sm:flex items-center gap-8 font-barlow text-lg tracking-wider uppercase font-medium">
        <NuxtLink
          to="/zona-maco"
          class="group relative py-2 text-neutral-700 hover:text-neutral-950 flex items-center gap-1.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          active-class="!text-neutral-950 font-bold"
        >
          <span>Zona Maco</span>
          <svg
            class="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-neutral-400 group-hover:text-neutral-900"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 12L12 4" />
            <path d="M5 4h7v7" />
          </svg>
          <span
            class="absolute bottom-0 left-0 w-0 h-[2px] bg-neutral-900 transition-all duration-300 group-hover:w-full"
            :class="{ 'w-full': $route.path === '/zona-maco' }"
          />
        </NuxtLink>

        <NuxtLink
          to="/crgs"
          class="group relative py-2 text-neutral-700 hover:text-neutral-950 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          active-class="!text-neutral-950 font-bold"
        >
          <span>Nosotros</span>
          <span
            class="absolute bottom-0 left-0 w-0 h-[2px] bg-neutral-900 transition-all duration-300 group-hover:w-full"
            :class="{ 'w-full': $route.path === '/crgs' }"
          />
        </NuxtLink>

        <div class="h-4 w-px bg-neutral-300 mx-1" />

        <a
          href="https://www.udem.edu.mx/es/arte-arquitectura-diseno"
          target="_blank"
          rel="noopener noreferrer"
          class="text-xs tracking-widest text-neutral-500 hover:text-neutral-900 uppercase font-mono transition-all duration-200 hover:scale-[1.02]"
        >
          CRGS · UDEM
        </a>
      </nav>

      <!-- Mobile Menu Toggle -->
      <button
        type="button"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="sm:hidden p-2 text-neutral-800 hover:text-neutral-950 focus:outline-none active:scale-95 transition-transform duration-150"
        aria-label="Abrir menú"
      >
        <svg
          v-if="!isMobileMenuOpen"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <div
      v-if="isMobileMenuOpen"
      class="sm:hidden border-t border-neutral-200 bg-white/98 backdrop-blur-md px-6 py-5 flex flex-col gap-4 font-barlow text-xl tracking-wider uppercase font-medium shadow-lg transition-all duration-200"
    >
      <NuxtLink
        to="/zona-maco"
        @click="isMobileMenuOpen = false"
        class="py-2 text-neutral-800 hover:text-neutral-950 flex items-center justify-between border-b border-neutral-100"
      >
        <span>Zona Maco</span>
        <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 12L12 4M5 4h7v7" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </NuxtLink>

      <NuxtLink
        to="/crgs"
        @click="isMobileMenuOpen = false"
        class="py-2 text-neutral-800 hover:text-neutral-950 border-b border-neutral-100"
      >
        <span>Nosotros / CRGS</span>
      </NuxtLink>

      <a
        href="https://www.udem.edu.mx"
        target="_blank"
        rel="noopener noreferrer"
        class="text-xs tracking-widest text-neutral-500 uppercase font-mono pt-2"
      >
        Universidad de Monterrey
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useWindowScroll } from '@vueuse/core'

const isMobileMenuOpen = ref(false)
const { y } = useWindowScroll()

const isScrolled = computed(() => y.value > 20)
</script>
