<template>
  <header
    class="sticky top-0 z-50 w-full transition-[padding,background-color,border-color,box-shadow] duration-300 bg-white"
    :class="isScrolled ? 'border-b border-neutral-200/80 shadow-xs py-3 sm:py-4' : 'border-b border-transparent py-5 sm:py-6'"
  >
    <div class="max-w-[1720px] mx-auto px-6 sm:px-12 flex items-center justify-between">
      <NuxtLink to="/" class="inline-flex items-center transition-opacity hover:opacity-85" aria-label="Ir al inicio de Umbral">
        <img src="/images/logo-umbral.png" alt="Umbral" class="h-9 sm:h-11 w-auto object-contain" />
      </NuxtLink>

      <!-- Desktop nav exacto Figma (Zona Maco + Nosotros) -->
      <nav class="hidden md:flex items-center gap-8 lg:gap-12 font-barlow text-[28px] sm:text-[32px] font-normal leading-none">
        <!-- Dropdown Zona Maco -->
        <div class="relative group" @mouseenter="isDropdownOpen = true" @mouseleave="isDropdownOpen = false">
          <NuxtLink
            to="/zona-maco"
            @click="isDropdownOpen = !isDropdownOpen"
            class="inline-flex items-center gap-2.5 pb-1 border-b-2 text-black transition-all duration-200 cursor-pointer"
            :class="isRouteActive('/zona-maco') ? 'border-black opacity-100' : 'border-transparent opacity-80 hover:opacity-100 hover:border-black/40'"
          >
            <span>Zona Maco</span>
            <img
              src="/images/nav-chevron.svg"
              alt=""
              class="w-3.5 h-2.5 object-contain transition-transform duration-200"
              :class="isDropdownOpen ? 'rotate-180' : ''"
              aria-hidden="true"
            />
          </NuxtLink>

          <!-- Menú flotante arquitectónico -->
          <div
            class="absolute left-0 top-full pt-2 z-50 transition-all duration-200"
            :class="isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'"
          >
            <div class="w-56 py-2 bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-xl flex flex-col font-sans text-xs tracking-wider uppercase font-medium">
              <NuxtLink
                v-for="item in dropdownItems"
                :key="item.to"
                :to="item.to"
                @click="isDropdownOpen = false"
                class="px-4 py-2.5 text-neutral-700 hover:text-black hover:bg-neutral-100/70 transition-colors flex items-center justify-between group/link"
              >
                <span>{{ item.label }}</span>
                <span class="text-neutral-400 group-hover/link:text-black group-hover/link:translate-x-0.5 transition-all font-mono">→</span>
              </NuxtLink>
            </div>
          </div>
        </div>

        <NuxtLink to="/crgs" class="inline-block pb-1 border-b-2 text-black transition-all duration-200"
          :class="isRouteActive('/crgs') ? 'border-black opacity-100' : 'border-transparent opacity-80 hover:opacity-100 hover:border-black/40'">
          Nosotros
        </NuxtLink>
      </nav>

      <!-- Botón móvil -->
      <button type="button" @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden p-2 text-black focus:outline-none" aria-label="Alternar menú de navegación">
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Menú móvil desplegable -->
    <div v-if="isMobileMenuOpen" class="md:hidden border-t border-neutral-200 bg-white px-6 py-6 flex flex-col gap-6">
      <NuxtLink to="/" @click="isMobileMenuOpen = false" class="inline-block font-barlow text-[28px] font-normal text-black pb-1 border-b-2"
        :class="route.path === '/' ? 'border-black' : 'border-neutral-200'">
        Inicio
      </NuxtLink>
      <NuxtLink to="/zona-maco" @click="isMobileMenuOpen = false" class="inline-flex items-center justify-between font-barlow text-[28px] font-normal text-black pb-1 border-b-2"
        :class="isRouteActive('/zona-maco') ? 'border-black' : 'border-neutral-200'">
        <span>Zona Maco</span>
        <img src="/images/nav-chevron.svg" alt="" class="w-4 h-2.5 object-contain" />
      </NuxtLink>
      <NuxtLink to="/crgs" @click="isMobileMenuOpen = false" class="inline-block font-barlow text-[28px] font-normal text-black pb-1 border-b-2"
        :class="isRouteActive('/crgs') ? 'border-black' : 'border-neutral-200'">
        Nosotros
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useWindowScroll } from '@vueuse/core'

const route = useRoute()
const isMobileMenuOpen = ref(false)
const isDropdownOpen = ref(false)
const { y } = useWindowScroll()

const isScrolled = computed(() => y.value > 20)
const isRouteActive = (path: string) => route.path.startsWith(path)

const dropdownItems = [
  { label: 'Inicio / Home', to: '/' },
  { label: 'Expositores 2026', to: '/zona-maco#hero-triangle' },
  { label: 'Génesis & Proceso', to: '/zona-maco#contexto' },
  { label: 'Catálogo de Obras', to: '/zona-maco#proyectos' }
]

watch(() => route.fullPath, () => {
  isDropdownOpen.value = false
  isMobileMenuOpen.value = false
})
</script>
