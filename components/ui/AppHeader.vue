<template>
  <header
    class="sticky top-0 z-50 w-full transition-[padding,background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-out"
    :class="isScrolled
      ? 'bg-white/85 backdrop-blur-md border-b border-neutral-200/80 shadow-sm py-2.5 sm:py-3'
      : 'bg-white border-b border-transparent py-5 sm:py-6'"
  >
    <div class="max-w-[1720px] mx-auto px-6 sm:px-12 flex items-center justify-between">
      <!-- Logo Umbral izquierda con micro-escala -->
      <NuxtLink
        to="/"
        class="inline-flex items-center transition-transform duration-300 hover:scale-105 active:scale-95"
        aria-label="Ir al inicio de Umbral"
      >
        <img
          src="/images/logo-umbral.png"
          alt="Umbral"
          class="h-9 sm:h-11 w-auto object-contain transition-all duration-500"
        />
      </NuxtLink>

      <!-- Navegación desktop derecha con efecto magnético e indicador deslizante -->
      <nav
        ref="navRef"
        class="relative hidden md:flex items-center gap-10"
        @mouseleave="onNavLeave"
      >
        <!-- Línea indicadora deslizante -->
        <div
          class="absolute bottom-0 h-[3px] bg-black pointer-events-none transition-[left,width,opacity] duration-300 ease-out"
          :style="sliderStyle"
        />

        <NuxtLink
          ref="zmLinkRef"
          to="/zona-maco"
          @mouseenter="onLinkEnter($event)"
          @mousemove="onMagneticMove($event, 'zm')"
          @mouseleave="onMagneticLeave('zm')"
          class="inline-flex items-center gap-2.5 font-barlow text-[28px] sm:text-[32px] font-normal text-black normal-case pb-1 border-b-[3px] border-[#A3A3A3]/40 transition-colors will-change-transform"
          :style="magneticStyles.zm"
        >
          <span>Zona Maco</span>
          <img
            src="/images/nav-chevron.svg"
            alt=""
            class="w-4 h-2.5 object-contain transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </NuxtLink>

        <NuxtLink
          ref="nosotrosLinkRef"
          to="/crgs"
          @mouseenter="onLinkEnter($event)"
          @mousemove="onMagneticMove($event, 'nosotros')"
          @mouseleave="onMagneticLeave('nosotros')"
          class="font-barlow text-[28px] sm:text-[32px] font-normal text-black normal-case pb-1 border-b-[3px] border-[#A3A3A3]/40 transition-colors will-change-transform"
          :style="magneticStyles.nosotros"
        >
          Nosotros
        </NuxtLink>
      </nav>

      <!-- Botón móvil -->
      <button
        type="button"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden p-2 text-black focus:outline-none active:scale-90 transition-transform"
        aria-label="Alternar menú de navegación"
      >
        <svg v-if="!isMobileMenuOpen" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Menú móvil desplegable -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden border-t border-neutral-200 bg-white/95 backdrop-blur-md px-6 py-6 flex flex-col gap-6"
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
import { ref, reactive, computed } from 'vue'
import { useWindowScroll } from '@vueuse/core'

const isMobileMenuOpen = ref(false)
const navRef = ref<HTMLElement | null>(null)
const { y } = useWindowScroll()
const isScrolled = computed(() => y.value > 25)

const slider = reactive({ left: 0, width: 0, opacity: 0 })
const magnetic = reactive({ zmX: 0, zmY: 0, nosotrosX: 0, nosotrosY: 0 })

const sliderStyle = computed(() => ({
  left: `${slider.left}px`,
  width: `${slider.width}px`,
  opacity: slider.opacity
}))

const magneticStyles = computed(() => ({
  zm: {
    transform: `translate3d(${magnetic.zmX}px, ${magnetic.zmY}px, 0)`,
    transition: magnetic.zmX === 0 ? 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
  },
  nosotros: {
    transform: `translate3d(${magnetic.nosotrosX}px, ${magnetic.nosotrosY}px, 0)`,
    transition: magnetic.nosotrosX === 0 ? 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
  }
}))

const onLinkEnter = (e: MouseEvent) => {
  const target = e.currentTarget as HTMLElement
  if (!target || !navRef.value) return
  const navRect = navRef.value.getBoundingClientRect()
  const targetRect = target.getBoundingClientRect()
  slider.left = targetRect.left - navRect.left
  slider.width = targetRect.width
  slider.opacity = 1
}

const onNavLeave = () => {
  slider.opacity = 0
}

const onMagneticMove = (e: MouseEvent, key: 'zm' | 'nosotros') => {
  const target = e.currentTarget as HTMLElement
  if (!target) return
  const rect = target.getBoundingClientRect()
  const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.22
  const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.25
  if (key === 'zm') {
    magnetic.zmX = dx
    magnetic.zmY = dy
  } else {
    magnetic.nosotrosX = dx
    magnetic.nosotrosY = dy
  }
}

const onMagneticLeave = (key: 'zm' | 'nosotros') => {
  if (key === 'zm') {
    magnetic.zmX = 0
    magnetic.zmY = 0
  } else {
    magnetic.nosotrosX = 0
    magnetic.nosotrosY = 0
  }
}
</script>
