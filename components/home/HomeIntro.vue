<template>
  <section ref="sectionRef" class="w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
    <div class="max-w-[1200px] mx-auto px-6 sm:px-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
        <!-- Columna Izquierda: Logo y Manifiesto Oficial -->
        <div class="lg:col-span-7 flex flex-col space-y-5 sm:space-y-6">
          <div class="max-w-[220px] sm:max-w-[260px] w-full">
            <img src="/images/logo-umbral.png" alt="Umbral - CRGS" class="w-full h-auto object-contain" />
          </div>

          <div class="space-y-3.5 sm:space-y-4 font-barlow text-base sm:text-lg lg:text-[20px] leading-relaxed text-[#1C1C1C] text-left">
            <p>
              Es la plataforma del <strong class="font-bold">Centro Roberto Garza Sada,</strong> de la Escuela de Arte y Diseño de la Universidad de Monterrey.
            </p>
            <p>
              <strong class="font-bold">Funciona como un umbral entre la Escuela y el mundo:</strong> el lugar donde el trabajo de sus estudiantes y egresados, diseñadores y artistas, se cura, se presenta y se pone a circular. Más que un mercado, es una vitrina del talento que se forma en sus aulas y talleres.
            </p>
            <p>
              Cada pieza que aparece aquí atravesó el mismo camino: un pensamiento que se hizo materia para convertirse finalmente en creación.
            </p>
            <p>
              El CRGS realizó una repentina de diseño para definir los proyectos que se expondrán en Zona Maco. Participaron 35 equipos, quienes tuvieron 8 horas para desarrollar una propuesta bajo el concepto "el diseño del norte". De esta dinámica se seleccionaron los 10 proyectos que representarán al CRGS en Zona Maco 2027, la feria de arte y diseño más importante de Latinoamérica.
            </p>
            <p class="font-bold">
              La Repentina Zona Maco 2027 es el primer capítulo de este proyecto.
            </p>
          </div>
        </div>

        <!-- Columna Derecha: Fotos puras y triángulo oficial Vector 1 de Figma (#FDCF2C) -->
        <div class="lg:col-span-5 relative flex flex-col items-center w-full max-w-[480px] lg:max-w-[500px] mx-auto lg:ml-auto">
          <!-- Foto 1 (Arriba): Exterior atardecer CRGS (desfasada a la derecha) -->
          <div class="relative z-10 w-[85%] sm:w-[88%] self-end shadow-sm">
            <img
              src="/images/figma-intro-crgs-top.png"
              alt="Centro Roberto Garza Sada - Voladizo exterior al atardecer"
              class="w-full h-auto object-cover block"
            />
          </div>

          <!-- Triángulo Amarillo Oficial Vector 1 de Figma (#FDCF2C, id: 214:130) -->
          <div
            class="relative z-20 w-[96%] sm:w-[98%] -my-14 sm:-my-20 lg:-my-24 self-start select-none pointer-events-none"
          >
            <svg viewBox="0 0 652 432" fill="none" class="w-full h-auto block select-none">
              <path d="M420.661 432L0 276.517L651.902 0L420.661 432Z" fill="#FDCF2C" />
            </svg>
          </div>

          <!-- Foto 2 (Abajo): Escalinata y patio de concreto CRGS -->
          <div class="relative z-0 w-full self-start shadow-sm">
            <img
              src="/images/figma-intro-crgs-bottom.png"
              alt="Centro Roberto Garza Sada - Escalinata y patio de concreto"
              class="w-full h-auto object-cover block"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!import.meta.client) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    isVisible.value = true
    return
  }

  if (sectionRef.value && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        isVisible.value = true
        observer?.disconnect()
      }
    }, { threshold: 0.15 })
    observer.observe(sectionRef.value)
  } else {
    isVisible.value = true
  }
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>
