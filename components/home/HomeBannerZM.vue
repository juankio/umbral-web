<template>
  <section class="w-full bg-[#1C1C1C] text-white py-16 sm:py-24 lg:py-32 relative overflow-hidden">
    <div class="max-w-[1720px] mx-auto px-6 sm:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <!-- Columna Izquierda: Triángulo Morado con Título Cruzado -->
        <div class="lg:col-span-7 flex justify-center lg:justify-start items-center">
          <NuxtLink
            to="/zona-maco#proyectos"
            class="group relative inline-flex items-center cursor-pointer select-none"
            aria-label="Ver Proyectos Seleccionados en Zona Maco"
          >
            <!-- Triángulo morado oficial (#834384) -->
            <svg
              viewBox="0 0 609 459"
              fill="none"
              class="w-full max-w-[540px] lg:max-w-[620px] h-auto block select-none"
            >
              <path
                d="M97.5656 459L0 0L608.937 422.109L97.5656 459Z"
                fill="#834384"
              />
            </svg>

            <!-- Título montado a lo ancho cruzando la mitad inferior -->
            <span
              class="absolute left-4 sm:left-8 lg:left-10 bottom-[14%] sm:bottom-[16%] lg:bottom-[18%] font-barlow italic font-medium text-white text-4xl sm:text-6xl lg:text-[76px] xl:text-[88px] tracking-normal leading-none whitespace-nowrap group-hover:underline underline-offset-8 decoration-2 z-10 pointer-events-none"
            >
              Proyectos Seleccionados
            </span>
          </NuxtLink>
        </div>

        <!-- Columna Derecha: Párrafo oficial alineado a la derecha -->
        <div class="lg:col-span-5 flex flex-col justify-center">
          <p class="font-barlow font-normal text-lg sm:text-xl md:text-2xl lg:text-[28px] text-white text-center lg:text-right leading-relaxed max-w-[620px] ml-auto">
            El CRGS participará por tercer año consecutivo en Zona Maco, la feria de arte y diseño más importante de Latinoamérica, <strong class="font-bold text-white">del 3 al 7 de febrero de 2027 en la Ciudad de México</strong>. Este año el stand se renueva: por primera vez, tanto el diseño del espacio como los productos que se exhiben y venden serán desarrollados por alumnos actuales de la escuela.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Sección Zona Maco + Proyectos Seleccionados según Figma (Node 329:84 / Rectangle 21)
</script>
