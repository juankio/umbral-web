<template>
  <section class="relative w-full bg-[#1C1C1C] text-white min-h-[620px] lg:h-[820px] xl:h-[880px] flex flex-col justify-between overflow-hidden py-12 sm:py-16 lg:py-20 select-none">
    <div class="relative w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 flex-1 flex flex-col justify-between">
      <!-- Fila Superior / Derecha: Párrafo oficial alineado a la derecha -->
      <div class="w-full flex justify-end pt-2 sm:pt-4">
        <p class="font-barlow font-normal text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px] text-white/95 text-right leading-snug max-w-[760px] tracking-normal">
          El CRGS participará por tercer año consecutivo en Zona Maco, la feria de arte y diseño más importante de Latinoamérica, <strong class="font-bold text-white">del 3 al 7 de febrero de 2027 en la Ciudad de México</strong>. Este año el stand se renueva: por primera vez, tanto el diseño del espacio como los productos que se exhiben y venden serán desarrollados por alumnos actuales de la escuela.
        </p>
      </div>

      <!-- Fila Inferior / Izquierda: Composición del Triángulo Morado + Título Monumental Cursivo -->
      <div class="relative w-full mt-10 sm:mt-14 lg:mt-0 pb-2 sm:pb-4">
        <!-- Triángulo Morado Oficial (#834384, id: 222:32) desfasado a la derecha del inicio del texto -->
        <div class="relative w-[340px] sm:w-[460px] lg:w-[580px] xl:w-[680px] ml-10 sm:ml-16 lg:ml-24 select-none pointer-events-none">
          <svg
            viewBox="0 0 609 459"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-full h-auto block select-none"
          >
            <path
              d="M97.5656 459L0 0L608.937 422.109L97.5656 459Z"
              fill="#834384"
            />
          </svg>
        </div>

        <!-- Título Monumental Cursivo: inicia a la izquierda del triángulo y lo cruza horizontalmente -->
        <div class="absolute left-0 bottom-4 sm:bottom-6 lg:bottom-10 z-10 w-full">
          <NuxtLink
            to="/zona-maco#proyectos"
            class="group inline-block focus:outline-none"
            aria-label="Ver Proyectos Seleccionados en Zona Maco"
          >
            <h2 class="font-barlow italic font-medium text-white text-4xl sm:text-6xl md:text-7xl lg:text-[92px] xl:text-[112px] 2xl:text-[124px] tracking-normal leading-none whitespace-nowrap drop-shadow-sm transition-all duration-300 group-hover:opacity-90">
              <span class="group-hover:underline underline-offset-8 decoration-2 decoration-white">Proyectos Seleccionados</span>
            </h2>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Sección 3: Rectangle 21 exacto de Figma (Frame 112:2 / Node 329:84)
</script>
