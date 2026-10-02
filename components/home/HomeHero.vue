<template>
  <section
    class="relative w-full min-h-[calc(100dvh-72px)] lg:min-h-[calc(100dvh-80px)] flex flex-col justify-between items-center bg-[#ffffff] overflow-x-clip select-none"
  >
    <!-- Área central del Hero como lienzo limpio monumental -->
    <div class="relative w-full flex-1 flex flex-col items-center justify-center px-4 sm:px-8 pt-6 sm:pt-8 lg:pt-10 pb-2">
      <!-- Centro: Monolito central (Portal de doble capa con triángulo clip-path + titular UMBRAL debajo) -->
      <div
        class="relative z-10 flex flex-col items-center justify-center max-w-[1400px] w-full mx-auto"
      >
        <!-- Portal de Doble Capa Vectorial (Triángulo clip-path + Frases laterales ancladas) -->
        <div
          ref="triangleRef"
          class="relative w-[340px] sm:w-[380px] lg:w-[420px] aspect-[528/640] select-none"
        >
          <!-- CAPA 1: Base (Texto Negro puro #070707 sobre fondo blanco) -->
          <div class="absolute inset-0 pointer-events-none select-none z-10">
            <!-- Frase 1: Abre la puerta (Izquierda, cruza el flanco izquierdo hacia adentro del triángulo) -->
            <h2
              ref="abrePuertaRef"
              class="absolute right-[calc(100%-80px)] sm:right-[calc(100%-90px)] md:right-[calc(100%-100px)] lg:right-[calc(100%-110px)] xl:right-[calc(100%-115px)] 2xl:right-[calc(100%-120px)] top-[46%] -translate-y-1/2 font-barlow font-normal text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] 2xl:text-[90px] text-[#070707] text-right leading-none select-none tracking-normal whitespace-nowrap"
            >
              Abre la puerta
            </h2>

            <!-- Frase 2: cruza el (Derecha, nace adentro del triángulo y cruza la arista derecha hacia afuera) -->
            <h2
              ref="cruzaElRef"
              class="absolute left-[calc(74%-50px)] sm:left-[calc(74%-56px)] md:left-[calc(74%-62px)] lg:left-[calc(74%-68px)] xl:left-[calc(74%-72px)] 2xl:left-[calc(74%-76px)] top-[65%] -translate-y-1/2 font-barlow font-normal text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] 2xl:text-[90px] text-[#070707] text-left leading-none select-none tracking-normal whitespace-nowrap"
            >
              cruza el
            </h2>
          </div>

          <!-- CAPA 2: El Triángulo Portal (Fondo Negro #000000 con texto Blanco puro recortado por clip-path) -->
          <div
            class="absolute inset-0 bg-[#000000] pointer-events-none select-none z-20 [clip-path:polygon(0%_69.9%,24.78%_0%,100%_100%)]"
            style="clip-path: polygon(0% 69.9%, 24.78% 0%, 100% 100%);"
          >
            <!-- Contenedor espejo (portal-inner) idéntico al contenedor padre -->
            <div class="portal-inner absolute inset-0">
              <!-- Frase 1 espejo: Abre la puerta (Blanco puro #ffffff en coordenadas exactas) -->
              <h2
                ref="abrePuertaMirrorRef"
                class="absolute right-[calc(100%-80px)] sm:right-[calc(100%-90px)] md:right-[calc(100%-100px)] lg:right-[calc(100%-110px)] xl:right-[calc(100%-115px)] 2xl:right-[calc(100%-120px)] top-[46%] -translate-y-1/2 font-barlow font-normal text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] 2xl:text-[90px] text-white text-right leading-none select-none tracking-normal whitespace-nowrap"
              >
                Abre la puerta
              </h2>

              <!-- Frase 2 espejo: cruza el (Blanco puro #ffffff en coordenadas exactas) -->
              <h2
                ref="cruzaElMirrorRef"
                class="absolute left-[calc(74%-50px)] sm:left-[calc(74%-56px)] md:left-[calc(74%-62px)] lg:left-[calc(74%-68px)] xl:left-[calc(74%-72px)] 2xl:left-[calc(74%-76px)] top-[65%] -translate-y-1/2 font-barlow font-normal text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] 2xl:text-[90px] text-white text-left leading-none select-none tracking-normal whitespace-nowrap"
              >
                cruza el
              </h2>
            </div>
          </div>
        </div>

        <!-- Titular monumental UMBRAL centrado directamente debajo del vértice inferior con margen inferior seguro antes de la marquesina -->
        <h1
          ref="umbralTitleRef"
          class="font-barlow font-normal text-6xl sm:text-7xl md:text-8xl lg:text-[104px] xl:text-[116px] 2xl:text-[128px] leading-none text-[#070707] tracking-tight text-center select-none mt-3 sm:mt-4 lg:mt-5 mb-8 sm:mb-12 lg:mb-14"
        >
          UMBRAL
        </h1>
      </div>
    </div>

    <!-- Marquee arquitectónico al pie (barra negra por defecto en flujo natural) -->
    <AppMarquee class="w-full flex-shrink-0" />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { animate } from 'animejs'

const abrePuertaRef = ref<HTMLElement | null>(null)
const cruzaElRef = ref<HTMLElement | null>(null)
const abrePuertaMirrorRef = ref<HTMLElement | null>(null)
const cruzaElMirrorRef = ref<HTMLElement | null>(null)
const triangleRef = ref<HTMLElement | null>(null)
const umbralTitleRef = ref<HTMLElement | null>(null)

const activeAnims: any[] = []

onMounted(() => {
  if (!import.meta.client) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  // Fade-in sutil de opacidad estricto, sin desplazamientos ni deformación (estética monolítica Tadao Ando)
  const elements = [
    abrePuertaRef.value,
    abrePuertaMirrorRef.value,
    cruzaElRef.value,
    cruzaElMirrorRef.value,
    triangleRef.value,
    umbralTitleRef.value
  ].filter(Boolean) as HTMLElement[]

  if (elements.length > 0) {
    activeAnims.push(animate(elements, {
      opacity: [0, 1],
      duration: 600,
      ease: 'outQuad',
      onComplete: () => {
        elements.forEach((el) => {
          el.style.opacity = ''
        })
      }
    }))
  }
})

onUnmounted(() => {
  activeAnims.forEach(anim => anim?.revert?.() || anim?.pause?.())
})
</script>
