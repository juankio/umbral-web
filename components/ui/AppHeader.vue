<template>
  <header
    class="sticky top-0 z-50 w-full transition-[padding,background-color,border-color,box-shadow] duration-300 bg-white"
    :class="isScrolled ? 'border-b border-neutral-200/80 shadow-xs py-3 sm:py-4' : 'border-b border-transparent py-4 sm:py-6'"
  >
    <div class="max-w-[1720px] mx-auto px-6 sm:px-12 flex items-center justify-between">
      <NuxtLink
        to="/"
        class="inline-flex items-center transition-opacity hover:opacity-85 outline-none select-none"
        aria-label="Ir al inicio de Umbral"
        @click="isMobileMenuOpen = false"
      >
        <img src="/images/logo-umbral.webp" alt="Umbral" class="h-8 sm:h-9 w-auto object-contain" />
      </NuxtLink>

      <!-- Desktop nav: Zona Maco & Nosotros Dropdowns -->
      <nav class="hidden md:flex items-center gap-8 lg:gap-10 font-barlow text-xl sm:text-2xl font-normal leading-none">
        <div
          v-for="section in navSections"
          :key="section.id"
          class="relative group"
          @mouseenter="activeDropdown = section.id"
          @mouseleave="activeDropdown = null"
        >
          <NuxtLink
            :to="section.to"
            @click="activeDropdown = activeDropdown === section.id ? null : section.id"
            class="inline-flex items-center gap-2.5 pb-1 border-b-2 text-black transition-all duration-200 cursor-pointer outline-none select-none"
            :class="section.match(route.path) ? 'border-black opacity-100' : 'border-transparent opacity-80 hover:opacity-100 hover:border-black/40'"
          >
            <span>{{ section.label }}</span>
            <img
              src="/images/nav-chevron.svg"
              alt=""
              class="w-3.5 h-2.5 object-contain transition-transform duration-200"
              :class="activeDropdown === section.id ? 'rotate-180' : ''"
              aria-hidden="true"
            />
          </NuxtLink>

          <!-- Menú flotante arquitectónico escritorio -->
          <div
            class="absolute top-full pt-2 z-50 transition-all duration-200"
            :class="[
              section.id === 'nosotros' ? 'right-0 left-auto' : 'left-0',
              activeDropdown === section.id ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'
            ]"
          >
            <div
              :ref="(el) => { if (el) menuRefs[section.id] = el as HTMLElement }"
              class="w-68 min-w-[260px] py-2 bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-xl flex flex-col font-sans text-xs tracking-wider uppercase font-medium"
            >
              <NuxtLink
                v-for="item in section.items"
                :key="item.to"
                :to="item.to"
                @click="activeDropdown = null"
                class="px-4 py-2.5 text-neutral-700 hover:text-black hover:bg-neutral-100/70 transition-colors flex items-center justify-between group/link outline-none"
              >
                <span>{{ item.label }}</span>
                <span class="text-neutral-400 group-hover/link:text-black group-hover/link:translate-x-0.5 transition-all font-mono">→</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </nav>

      <!-- Botón móvil arquitectónico -->
      <button
        type="button"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden p-2 -mr-2 text-black transition-colors hover:text-neutral-600 focus:outline-none"
        :aria-expanded="isMobileMenuOpen"
        aria-label="Alternar menú de navegación"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M3.75 7.5h16.5M3.75 16.5h16.5" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Menú móvil inmersivo a pantalla completa -->
    <Transition name="mobile-menu">
      <div
        v-if="isMobileMenuOpen"
        ref="mobileMenuRef"
        class="fixed inset-x-0 top-[60px] bottom-0 z-50 bg-white md:hidden flex flex-col justify-between overflow-y-auto px-6 py-6 sm:px-10 sm:py-8 border-t border-neutral-100"
      >
        <nav class="flex flex-col gap-6 pt-2">
          <!-- 01. Inicio -->
          <div class="mobile-nav-item flex flex-col">
            <span class="font-mono text-xs text-neutral-400 tracking-wider mb-1">01</span>
            <NuxtLink
              to="/"
              @click="isMobileMenuOpen = false"
              class="font-barlow text-3xl sm:text-4xl font-normal text-black hover:text-neutral-600 transition-colors flex items-center justify-between py-2 border-b border-neutral-100"
              :class="{ 'font-medium': route.path === '/' }"
            >
              <span>Inicio</span>
              <span class="font-mono text-sm text-neutral-400">→</span>
            </NuxtLink>
          </div>

          <!-- 02. Zona Maco & 03. Nosotros -->
          <div v-for="section in navSections" :key="section.id" class="mobile-nav-item flex flex-col">
            <span class="font-mono text-xs text-neutral-400 tracking-wider mb-1">{{ section.index }}</span>
            <div class="font-barlow text-3xl sm:text-4xl font-normal text-black flex items-center justify-between py-2 border-b border-neutral-100">
              <span>{{ section.label }}</span>
            </div>
            <div class="flex flex-col gap-1 pt-2">
              <NuxtLink
                v-for="item in section.items"
                :key="item.to"
                :to="item.to"
                @click="isMobileMenuOpen = false"
                class="group/sub font-sans text-xs tracking-wider uppercase text-neutral-600 hover:text-black py-2.5 pl-3 flex items-center justify-between transition-colors"
              >
                <span>{{ item.label }}</span>
                <span class="font-mono text-xs text-neutral-400 group-hover/sub:text-black group-hover/sub:translate-x-1 transition-all">→</span>
              </NuxtLink>
            </div>
          </div>
        </nav>

        <!-- Pie institucional del menú móvil -->
        <footer class="pt-8 mt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-xs text-neutral-400">
          <span>CRGS · Universidad de Monterrey</span>
          <span>Zona Maco 2027</span>
        </footer>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useWindowScroll } from '@vueuse/core'
import { animate } from 'animejs'

interface NavSection {
  id: string
  index: string
  label: string
  to: string
  items: { label: string; to: string }[]
  match: (path: string) => boolean
}

const route = useRoute()
const isMobileMenuOpen = ref(false)
const activeDropdown = ref<string | null>(null)
const menuRefs: Record<string, HTMLElement> = {}
const mobileMenuRef = ref<HTMLElement | null>(null)

const { y } = useWindowScroll()
const isScrolled = computed(() => y.value > 20)

const navSections: NavSection[] = [
  {
    id: 'maco',
    index: '02',
    label: 'Zona Maco',
    to: '/zona-maco',
    match: (p: string) => p.startsWith('/zona-maco'),
    items: [
      { label: 'Página Principal', to: '/zona-maco' },
      { label: 'Catálogo de Obras', to: '/zona-maco#proyectos' }
    ]
  },
  {
    id: 'nosotros',
    index: '03',
    label: 'Nosotros',
    to: '/nosotros',
    match: (p: string) => p.startsWith('/nosotros') || p.startsWith('/crgs'),
    items: [
      { label: 'Integrantes Umbral', to: '/nosotros' },
      { label: 'Centro Roberto Garza Sada', to: '/crgs' }
    ]
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

watch(isMobileMenuOpen, async (isOpen) => {
  if (import.meta.client) {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    if (isOpen && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      await nextTick()
      if (mobileMenuRef.value) {
        animate(mobileMenuRef.value.querySelectorAll('.mobile-nav-item'), {
          opacity: [0, 1], translateY: [12, 0], delay: (_el: any, i: number) => i * 60, duration: 350, ease: 'outQuad'
        })
      }
    }
  }
})

watch(() => route.fullPath, () => {
  activeDropdown.value = null
  isMobileMenuOpen.value = false
})

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isMobileMenuOpen.value) isMobileMenuOpen.value = false
}

onMounted(() => { if (import.meta.client) window.addEventListener('keydown', onKeydown) })
onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('keydown', onKeydown)
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
