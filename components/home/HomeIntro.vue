<template>
  <section ref="sectionRef" class="w-full bg-white overflow-hidden">
    <div class="max-w-[1200px] xl:max-w-[1280px] mx-auto px-6 sm:px-10 py-10 sm:py-12 lg:py-14 xl:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
        <!-- Columna Izquierda: Encabezado con Logotipo Oficial y Manifiesto Justificado -->
        <div class="lg:col-span-7 flex flex-col w-full max-w-[720px]">
          <!-- Titular: Logotipo Vectorial Oficial UMBRAL \ CRGS (Nodo 117:386 Figma) -->
          <img
            ref="headingRef"
            src="/images/logo-umbral.webp"
            alt="UMBRAL \ CRGS"
            class="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] xl:max-w-[390px] h-auto object-contain mb-4 sm:mb-5 lg:mb-6 block"
          />

          <!-- Manifiesto de párrafos con tipografía Barlow Condensed exacta de Figma (Nodo 112:33) -->
          <div class="font-barlow text-sm sm:text-base lg:text-[19px] xl:text-[21px] leading-[1.22] tracking-[-0.015em] text-[#1C1C1C] text-justify space-y-3 sm:space-y-3.5 lg:space-y-4 font-normal">
            <p ref="p1Ref">
              Es la plataforma del <span class="font-medium">Centro Roberto Garza Sada,</span> de la Escuela de Arte y Diseño de la Universidad de Monterrey.
            </p>
            <p ref="p2Ref">
              <span class="font-medium">Funciona como un umbral entre la Escuela y el mundo:</span> el lugar donde el trabajo de sus estudiantes y egresados, diseñadores y artistas, se cura, se presenta y se pone a circular. Más que un mercado, es una vitrina del talento que se forma en sus aulas y talleres.
            </p>
            <p ref="p3Ref">
              Cada pieza que aparece aquí atravesó el mismo camino: un pensamiento que se hizo materia para convertirse finalmente en creación.
            </p>
            <p ref="p4Ref">
              El CRGS realizó una repentina de diseño para definir los proyectos que se expondrán en Zona Maco. Participaron 35 equipos, quienes tuvieron 8 horas para desarrollar una propuesta bajo el concepto "el diseño del norte". De esta dinámica se seleccionaron los 10 proyectos que representarán al CRGS en Zona Maco 2027, la feria de arte y diseño más importante de Latinoamérica
            </p>
            <p ref="p5Ref" class="font-bold">
              La Repentina Zona Maco 2027 es el primer capítulo de este proyecto.
            </p>
          </div>
        </div>

        <!-- Columna Derecha: Fotos puras y triángulo amarillo oficial Vector 1 de Figma (#F6D152) -->
        <div class="lg:col-span-5 relative flex flex-col items-center w-full max-w-[380px] lg:max-w-[420px] xl:max-w-[440px] mx-auto lg:ml-auto">
          <!-- Foto 1 (Arriba): Exterior atardecer CRGS (desfasada a la derecha) -->
          <div ref="photo1Ref" class="relative z-10 w-[82%] sm:w-[84%] self-end shadow-sm">
            <AppImage
              src="/images/figma-intro-crgs-top.webp"
              alt="Centro Roberto Garza Sada - Voladizo exterior al atardecer"
              img-class="w-full h-auto object-cover block"
              loading="eager"
            />
          </div>

          <!-- Triángulo Amarillo Oficial (Nodo 112:35 Figma) -->
          <div
            ref="triangleParallaxRef"
            class="relative z-20 w-full -my-10 sm:-my-12 lg:-my-14 xl:-my-16 will-change-transform"
          >
            <div class="w-full select-none">
              <svg viewBox="0 0 680 385" fill="none" class="w-full h-auto block select-none pointer-events-none">
                <path d="M229.276 384.749L0 0L680 194.197L229.276 384.749Z" fill="#F6D152" />
              </svg>
            </div>
          </div>

          <!-- Foto 2 (Abajo): Escalinata y patio de concreto CRGS -->
          <div ref="photo2Ref" class="relative z-0 w-[88%] sm:w-[90%] self-start shadow-sm">
            <AppImage
              src="/images/figma-intro-crgs-bottom.webp"
              alt="Centro Roberto Garza Sada - Escalinata y patio de concreto"
              img-class="w-full h-auto object-cover block"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'
import { useParallaxMotion } from '~/composables/useParallaxMotion'

const sectionRef = ref<HTMLElement | null>(null)
const headingRef = ref<HTMLElement | null>(null)
const p1Ref = ref<HTMLElement | null>(null)
const p2Ref = ref<HTMLElement | null>(null)
const p3Ref = ref<HTMLElement | null>(null)
const p4Ref = ref<HTMLElement | null>(null)
const p5Ref = ref<HTMLElement | null>(null)
const photo1Ref = ref<HTMLElement | null>(null)
const photo2Ref = ref<HTMLElement | null>(null)
const triangleParallaxRef = ref<HTMLElement | null>(null)

const { observeScrollReveal } = useScrollAnimation()
useParallaxMotion(triangleParallaxRef, 0.05, 20)

onMounted(() => {
  observeScrollReveal(headingRef, { type: 'heading', delay: 50 })
  observeScrollReveal(p1Ref, { type: 'paragraph', delay: 100 })
  observeScrollReveal(p2Ref, { type: 'paragraph', delay: 160 })
  observeScrollReveal(p3Ref, { type: 'paragraph', delay: 220 })
  observeScrollReveal(p4Ref, { type: 'paragraph', delay: 280 })
  observeScrollReveal(p5Ref, { type: 'paragraph', delay: 340 })
  observeScrollReveal(photo1Ref, { type: 'image', delay: 120 })
  observeScrollReveal(triangleParallaxRef, { type: 'triangle', delay: 200 })
  observeScrollReveal(photo2Ref, { type: 'image', delay: 280 })
})
</script>
