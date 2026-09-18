<template>
  <section class="w-full bg-[#1C1C1C] text-white py-10 sm:py-14 relative overflow-hidden">
    <div class="max-w-[1720px] mx-auto px-6 sm:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <!-- Columna Izquierda: Triángulo Morado de Proyectos Seleccionados (#7B4680) -->
        <div class="lg:col-span-6 flex justify-center items-center">
          <NuxtLink
            to="/zona-maco#proyectos"
            class="group relative w-full max-w-[420px] aspect-[609/459] flex items-center justify-center cursor-pointer focus:outline-none select-none transition-transform duration-500 ease-out hover:scale-[1.03]"
            aria-label="Ver Proyectos Seleccionados en Zona Maco"
          >
            <!-- Vector SVG exacto de Figma: Vector 1 (id: 222:32 / 332:225) -->
            <svg
              viewBox="0 0 609 459"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="absolute inset-0 w-full h-full drop-shadow-[0_16px_32px_rgba(123,70,128,0.4)] transition-all duration-500 group-hover:drop-shadow-[0_20px_40px_rgba(123,70,128,0.6)]"
            >
              <path
                d="M97.5656 459L0 0L608.937 422.109L97.5656 459Z"
                fill="#7B4680"
              />
            </svg>

            <!-- Contenido tipográfico montado sobre la masa del triángulo -->
            <div class="relative z-10 text-center text-white flex flex-col items-center justify-center px-4 py-3 pointer-events-none translate-x-1.5 translate-y-1.5">
              <span class="font-barlow text-xs sm:text-sm tracking-[0.2em] uppercase text-white/90 font-medium mb-1.5 block">
                Haz click para ver los
              </span>
              <h2 class="font-barlow font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-white uppercase tracking-tight leading-[0.95] transition-all duration-300">
                <span class="group-hover:underline underline-offset-4 decoration-2 decoration-white">Proyectos<br>Seleccionados</span>
              </h2>
              <span class="font-mono text-[10px] sm:text-[11px] text-white/90 uppercase tracking-[0.2em] bg-black/30 px-3 py-1 rounded-full border border-white/20 mt-3 inline-block backdrop-blur-xs">
                Zona Maco 2027 · CDMX →
              </span>
            </div>
          </NuxtLink>
        </div>

        <!-- Columna Derecha: Manifiesto descriptivo oficial de Zona Maco según Figma -->
        <div class="lg:col-span-6 flex flex-col justify-center space-y-5 sm:space-y-6 text-left">
          <div class="flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-[0.2em] text-[#F6D152] uppercase select-none">
            <span class="inline-block w-2 h-2 bg-[#F6D152] rounded-full animate-ping"></span>
            <span>REPENTINA · ZONA MACO 2027</span>
          </div>

          <h3 class="font-barlow font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-wide uppercase leading-tight">
            DEL 3 AL 7 DE FEBRERO 2027 · CIUDAD DE MÉXICO
          </h3>

          <p class="font-barlow text-base sm:text-lg lg:text-xl leading-relaxed text-white/90 font-normal">
            El CRGS participará por tercer año consecutivo en Zona Maco, la feria de arte y diseño más importante de Latinoamérica, del 3 al 7 de febrero de 2027 en la Ciudad de México. Este año el stand se renueva: por primera vez, tanto el diseño del espacio como los productos que se exhiben y venden serán desarrollados por alumnos actuales de la escuela.
          </p>

          <div class="pt-1">
            <NuxtLink
              to="/zona-maco"
              class="inline-flex items-center gap-2.5 font-barlow font-bold text-base sm:text-lg text-black px-6 py-2.5 bg-white hover:bg-[#F6D152] transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wider active:scale-95"
            >
              <span>EXPLORAR ZONA MACO</span>
              <span class="font-mono text-sm">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Sección Zona Maco + Proyectos Seleccionados integrada según Figma (Frame 112:2 / Rectangle 21)
</script>
