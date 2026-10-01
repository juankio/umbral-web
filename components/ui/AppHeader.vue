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

      <!-- Desktop nav: Enlaces limpios de primer nivel -->
      <nav class="hidden md:flex items-center gap-8 lg:gap-10 font-barlow text-xl sm:text-2xl font-normal leading-none">
        <NuxtLink
          v-for="link in desktopLinks"
          :key="link.to"
          :to="link.to"
          class="pb-1 border-b-2 text-black transition-all duration-200 cursor-pointer outline-none select-none"
          :class="isLinkActive(link.to) ? 'border-black opacity-100' : 'border-transparent opacity-80 hover:opacity-100 hover:border-black/40'"
        >
          {{ link.label }}
        </NuxtLink>
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
        <nav class="flex flex-col gap-4 pt-2">
          <div
            v-for="link in mobileLinks"
            :key="link.to"
            class="mobile-nav-item flex flex-col"
          >
            <span class="font-mono text-xs text-neutral-400 tracking-wider mb-1">{{ link.index }}</span>
            <NuxtLink
              :to="link.to"
              @click="isMobileMenuOpen = false"
              class="font-barlow text-3xl sm:text-4xl font-normal text-black hover:text-neutral-600 transition-colors flex items-center justify-between py-2 border-b border-neutral-100"
              :class="{ 'font-medium': isLinkActive(link.to) }"
            >
              <span>{{ link.label }}</span>
              <span class="font-mono text-sm text-neutral-400">→</span>
            </NuxtLink>
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

interface NavItem {
  index?: string
  label: string
  to: string
}

const route = useRoute()
const isMobileMenuOpen = ref(false)
const mobileMenuRef = ref<HTMLElement | null>(null)

const { y } = useWindowScroll()
const isScrolled = computed(() => y.value > 20)

const desktopLinks: NavItem[] = [
  { label: 'Zona Maco', to: '/zona-maco' },
  { label: 'Catálogo de Obras', to: '/zona-maco#proyectos' },
  { label: 'Integrantes', to: '/nosotros' },
  { label: 'CRGS', to: '/crgs' }
]

const mobileLinks: NavItem[] = [
  { index: '01', label: 'Inicio', to: '/' },
  { index: '02', label: 'Zona Maco', to: '/zona-maco' },
  { index: '03', label: 'Catálogo de Obras', to: '/zona-maco#proyectos' },
  { index: '04', label: 'Integrantes', to: '/nosotros' },
  { index: '05', label: 'CRGS', to: '/crgs' }
]

const isLinkActive = (to: string) => {
  if (to === '/') return route.path === '/'
  if (to.includes('#')) {
    const [path, hash] = to.split('#')
    return route.path === path && route.hash === `#${hash}`
  }
  if (to === '/zona-maco') {
    return route.path === '/zona-maco' && !route.hash
  }
  return route.path.startsWith(to)
}

watch(isMobileMenuOpen, async (isOpen) => {
  if (import.meta.client) {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    if (isOpen && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      await nextTick()
      if (mobileMenuRef.value) {
        animate(mobileMenuRef.value.querySelectorAll('.mobile-nav-item'), {
          opacity: [0, 1],
          translateY: [12, 0],
          delay: (_el: any, i: number) => i * 45,
          duration: 300,
          ease: 'outQuad'
        })
      }
    }
  }
})

watch(() => route.fullPath, () => {
  isMobileMenuOpen.value = false
})

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isMobileMenuOpen.value) isMobileMenuOpen.value = false
}

onMounted(() => {
  if (import.meta.client) window.addEventListener('keydown', onKeydown)
})

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
