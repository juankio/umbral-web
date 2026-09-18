<template>
  <section class="relative w-full bg-[#1C1C1C] text-white min-h-[540px] lg:h-[640px] xl:h-[700px] flex items-center overflow-hidden py-14 sm:py-18 lg:py-20 select-none">
    <div class="relative w-full max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
      <!-- Columna Izquierda: Composición del Triángulo Morado + Título Cursivo 'Proyectos Seleccionados' -->
      <div class="relative w-fit flex-shrink-0">
        <!-- Triángulo Morado Oficial (#834384, id: 222:32) a escala armónica -->
        <div class="relative w-[280px] sm:w-[350px] lg:w-[400px] xl:w-[440px] select-none pointer-events-none">
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

        <!-- Título Cursivo Oficial: inicia a la izquierda del triángulo y lo cruza horizontalmente -->
        <NuxtLink
          to="/zona-maco#proyectos"
          class="group absolute -left-8 sm:-left-12 lg:-left-14 bottom-2 sm:bottom-4 lg:bottom-5 z-10 block focus:outline-none"
          aria-label="Ver Proyectos Seleccionados en Zona Maco"
        >
          <h2 class="font-barlow italic font-medium text-white text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] tracking-normal leading-none whitespace-nowrap transition-all duration-300 group-hover:opacity-90 drop-shadow-sm">
            <span class="group-hover:underline underline-offset-8 decoration-2 decoration-white">Proyectos Seleccionados</span>
          </h2>
        </NuxtLink>
      </div>

      <!-- Columna Derecha: Párrafo oficial alineado a la derecha en el tercio superior/medio -->
      <div class="w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[500px] lg:self-start lg:pt-4">
        <p class="font-barlow font-normal text-base sm:text-lg lg:text-[21px] xl:text-[23px] text-white/95 text-center lg:text-right leading-relaxed tracking-normal">
          El CRGS participará por tercer año consecutivo en Zona Maco, la feria de arte y diseño más importante de Latinoamérica, <strong class="font-bold text-white">del 3 al 7 de febrero de 2027 en la Ciudad de México</strong>. Este año el stand se renueva: por primera vez, tanto el diseño del espacio como los productos que se exhiben y venden serán desarrollados por alumnos actuales de la escuela.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Sección 3: Rectangle 21 exacto de Figma (Frame 112:2 / Node 329:84)
</script>
