<template>
  <section class="relative w-full bg-[#1C1C1C] text-white min-h-[580px] lg:h-[700px] xl:h-[760px] flex flex-col justify-center overflow-hidden py-14 sm:py-16 lg:py-20 select-none">
    <!-- Contenedor Maestro Centrado en la Página -->
    <div class="relative w-full max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col justify-center">
      <!-- Fila Superior: Párrafo oficial de 6 líneas exacto a Figma con cortes oficiales -->
      <div class="w-full flex justify-end mb-4 lg:mb-6">
        <p class="font-barlow font-normal text-base sm:text-lg md:text-xl lg:text-[23px] xl:text-[26px] text-white text-right leading-[1.2] tracking-normal select-none">
          El CRGS participará por tercer año consecutivo en Zona Maco, la<br class="hidden lg:block">
          feria de arte y diseño más importante de Latinoamérica, <strong class="font-bold text-white">del 3 al 7</strong><br class="hidden lg:block">
          <strong class="font-bold text-white">de febrero de 2027 en la Ciudad de México.</strong> Este año el stand se<br class="hidden lg:block">
          renueva: por primera vez, tanto el diseño del espacio como los<br class="hidden lg:block">
          productos que se exhiben y venden serán desarrollados por<br class="hidden lg:block">
          alumnos actuales de la escuela.
        </p>
      </div>

      <!-- Fila Inferior: Composición del Triángulo Morado + Título Monumental Cursivo -->
      <div class="relative w-full">
        <!-- Triángulo Morado Oficial (#834384, id: 222:32) centrado con la letra -->
        <div class="relative w-[320px] sm:w-[440px] lg:w-[540px] xl:w-[600px] ml-16 sm:ml-28 lg:ml-36 xl:ml-44 select-none pointer-events-none">
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

        <!-- Título Cursivo Oficial: cruza la mitad vertical del triángulo y llega debajo del párrafo -->
        <div class="absolute left-0 top-[52%] -translate-y-1/2 z-10 w-full pointer-events-auto">
          <NuxtLink
            to="/zona-maco#proyectos"
            class="group inline-block focus:outline-none"
            aria-label="Ver Proyectos Seleccionados en Zona Maco"
          >
            <h2 class="font-barlow italic font-medium text-white text-4xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[98px] 2xl:text-[108px] tracking-tight leading-none whitespace-nowrap drop-shadow-sm transition-all duration-300 group-hover:opacity-90">
              <span class="group-hover:underline underline-offset-8 decoration-2 decoration-white">Proyectos Seleccionados</span>
            </h2>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Sección 3: Rectangle 21 exacto de Figma con párrafo de 6 líneas (Frame 112:2 / Node 329:84)
</script>
