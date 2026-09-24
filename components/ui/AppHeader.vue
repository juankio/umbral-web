<template>
  <header
    class="sticky top-0 z-50 w-full transition-[padding,background-color,border-color,box-shadow] duration-300 bg-white"
    :class="isScrolled ? 'border-b border-neutral-200/80 shadow-xs py-3 sm:py-4' : 'border-b border-transparent py-5 sm:py-6'"
  >
    <div class="max-w-[1720px] mx-auto px-6 sm:px-12 flex items-center justify-between">
      <NuxtLink to="/" class="inline-flex items-center transition-opacity hover:opacity-85 outline-none focus:outline-none ring-0 select-none" aria-label="Ir al inicio de Umbral">
        <img src="/images/logo-umbral.webp" alt="Umbral" class="h-8 sm:h-9 w-auto object-contain" />
      </NuxtLink>

      <!-- Desktop nav: Zona Maco & Nosotros Dropdowns -->
      <nav class="hidden md:flex items-center gap-8 lg:gap-10 font-barlow text-xl sm:text-2xl font-normal leading-none">
        <div
          v-for="section in navSections" :key="section.id" class="relative group"
          @mouseenter="activeDropdown = section.id" @mouseleave="activeDropdown = null"
        >
          <NuxtLink
            :to="section.to"
            @click="activeDropdown = activeDropdown === section.id ? null : section.id"
            class="inline-flex items-center gap-2.5 pb-1 border-b-2 text-black transition-all duration-200 cursor-pointer outline-none focus:outline-none ring-0 select-none"
            :class="section.match(route.path) ? 'border-black opacity-100' : 'border-transparent opacity-80 hover:opacity-100 hover:border-black/40'"
          >
            <span>{{ section.label }}</span>
            <img src="/images/nav-chevron.svg" alt="" class="w-3.5 h-2.5 object-contain transition-transform duration-200" :class="activeDropdown === section.id ? 'rotate-180' : ''" aria-hidden="true" />
          </NuxtLink>

          <!-- Menú flotante arquitectónico -->
          <div
            class="absolute top-full pt-2 z-50 transition-all duration-200"
            :class="[
              section.id === 'nosotros' ? 'right-0 left-auto' : 'left-0',
              activeDropdown === section.id ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'
            ]"
          >
            <div :ref="(el) => { if (el) menuRefs[section.id] = el as HTMLElement }" class="w-68 min-w-[260px] py-2 bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-xl flex flex-col font-sans text-xs tracking-wider uppercase font-medium">
              <NuxtLink
                v-for="item in section.items" :key="item.to" :to="item.to" @click="activeDropdown = null"
                class="px-4 py-2.5 text-neutral-700 hover:text-black hover:bg-neutral-100/70 transition-colors flex items-center justify-between group/link outline-none focus:outline-none"
              >
                <span>{{ item.label }}</span>
                <span class="text-neutral-400 group-hover/link:text-black group-hover/link:translate-x-0.5 transition-all font-mono">→</span>
              </NuxtLink>
            </div>
          </div>
        </div>
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
      <NuxtLink to="/" @click="isMobileMenuOpen = false" class="inline-block font-barlow text-[28px] font-normal text-black pb-1 border-b-2 outline-none focus:outline-none ring-0 focus:ring-0 focus-visible:ring-0" :class="route.path === '/' ? 'border-black' : 'border-neutral-200'">Inicio</NuxtLink>
      <NuxtLink to="/zona-maco" @click="isMobileMenuOpen = false" class="inline-flex items-center justify-between font-barlow text-[28px] font-normal text-black pb-1 border-b-2 outline-none focus:outline-none ring-0 focus:ring-0 focus-visible:ring-0" :class="route.path.startsWith('/zona-maco') ? 'border-black' : 'border-neutral-200'">
        <span>Zona Maco</span>
        <img src="/images/nav-chevron.svg" alt="" class="w-4 h-2.5 object-contain" />
      </NuxtLink>
      <div class="flex flex-col gap-2 pt-1">
        <span class="font-barlow text-xs tracking-widest uppercase text-neutral-400 font-medium">Nosotros</span>
        <div class="flex flex-col gap-3 pl-3 border-l-2 border-neutral-200">
          <NuxtLink to="/nosotros" @click="isMobileMenuOpen = false" class="inline-block font-barlow text-[22px] font-normal text-black pb-1 border-b transition-colors outline-none focus:outline-none ring-0 focus:ring-0 focus-visible:ring-0" :class="route.path === '/nosotros' ? 'border-black font-medium' : 'border-transparent text-neutral-700'">Integrantes Umbral</NuxtLink>
          <NuxtLink to="/crgs" @click="isMobileMenuOpen = false" class="inline-block font-barlow text-[22px] font-normal text-black pb-1 border-b transition-colors outline-none focus:outline-none ring-0 focus:ring-0 focus-visible:ring-0" :class="route.path.startsWith('/crgs') ? 'border-black font-medium' : 'border-transparent text-neutral-700'">Centro Roberto Garza Sada</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useWindowScroll } from '@vueuse/core'
import { animate } from 'animejs'

interface NavSection {
  id: string
  label: string
  to: string
  items: { label: string; to: string }[]
  match: (path: string) => boolean
}

const route = useRoute()
const isMobileMenuOpen = ref(false), activeDropdown = ref<string | null>(null)
const menuRefs: Record<string, HTMLElement> = {}
const { y } = useWindowScroll()
const isScrolled = computed(() => y.value > 20)

const navSections: NavSection[] = [
  {
    id: 'maco',
    label: 'Zona Maco',
    to: '/zona-maco',
    match: (p: string) => p.startsWith('/zona-maco'),
    items: [{ label: 'Inicio / Home', to: '/' }, { label: 'Catálogo de Obras', to: '/zona-maco#proyectos' }]
  },
  {
    id: 'nosotros',
    label: 'Nosotros',
    to: '/nosotros',
    match: (p: string) => p.startsWith('/nosotros') || p.startsWith('/crgs'),
    items: [{ label: 'Integrantes Umbral', to: '/nosotros' }, { label: 'Centro Roberto Garza Sada', to: '/crgs' }]
  }
]

watch(activeDropdown, async (id) => {
  if (id && import.meta.client && menuRefs[id]) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    await nextTick()
    animate(menuRefs[id].querySelectorAll('a'), {
      opacity: [0, 1], translateY: [-4, 0], delay: (_el: any, i: number) => i * 45, duration: 250, ease: 'outQuad'
    })
  }
})

watch(() => route.fullPath, () => {
  activeDropdown.value = null
  isMobileMenuOpen.value = false
})
</script>
