<template>
  <section id="asesores" class="py-14 sm:py-20 lg:py-28 bg-white select-none border-b border-neutral-200">
    <!-- Encabezado de sección -->
    <div class="w-full px-4 sm:px-6 text-center">
      <h2 class="font-barlow font-normal text-4xl sm:text-6xl lg:text-7xl text-[#070707] text-center leading-none tracking-tight">
        Asesores de Proyectos
      </h2>
      <!-- Línea divisoria continua -->
      <div class="h-[2px] sm:h-[3px] bg-[#030303] max-w-[1480px] mx-auto mt-4 mb-12 sm:mb-16" />
    </div>

    <!-- Layout Asimétrico Oficial de los 3 Asesores (Figma 325:2) -->
    <div class="max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-14">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
        <!-- Columna Izquierda: Natalia Ceballos (Destacada) -->
        <div class="lg:col-span-6 flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
          <!-- Retrato con máscara triangular oficial de Figma -->
          <div class="w-44 sm:w-56 lg:w-64 xl:w-72 shrink-0 select-none pointer-events-none">
            <img
              src="/images/figma-asesor-natalia.png"
              alt="Natalia Ceballos"
              class="w-full h-auto object-contain block drop-shadow-sm"
              loading="lazy"
              draggable="false"
            />
          </div>

          <!-- Nombre y Biografía Oficial -->
          <div class="flex-1 space-y-3 pt-1">
            <h3 class="font-barlow font-normal text-3xl sm:text-4xl lg:text-[44px] text-[#1C1C1C] leading-none tracking-normal">
              Natalia Ceballos
            </h3>
            <p class="font-barlow font-normal text-base sm:text-lg lg:text-[20px] text-[#1C1C1C]/90 leading-snug">
              Natalia es diseñadora industrial con una Maestría en Diseño y Desarrollo de Envase y Embalaje por la Universidad de Monterrey donde se graduó con Proyecto de Innovación Sobresaliente y Cum Laude y un segundo Máster en Diseño Estratégico e Innovación por Elisava en España.
            </p>
          </div>
        </div>

        <!-- Columna Derecha: Sergio Trujillo y Edgar Morejón apilados -->
        <div class="lg:col-span-6 flex flex-col space-y-12 sm:space-y-14">
          <!-- Asesor 2: Sergio Trujillo -->
          <div class="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
            <div class="w-36 sm:w-44 lg:w-52 shrink-0 select-none pointer-events-none">
              <img
                src="/images/figma-asesor-sergio.png"
                alt="Sergio Trujillo"
                class="w-full h-auto object-contain block drop-shadow-sm"
                loading="lazy"
                draggable="false"
              />
            </div>
            <div class="flex-1 space-y-2 pt-1">
              <h3 class="font-barlow font-normal text-2xl sm:text-3xl lg:text-[38px] text-[#1C1C1C] leading-none tracking-normal">
                Sergio Trujillo
              </h3>
              <p class="font-barlow font-normal text-sm sm:text-base lg:text-[17px] text-[#1C1C1C]/90 leading-snug">
                Sergio Trujillo es un diseñador multidisciplinario especializado en diseño de marca y diseño tipográfico. Cuenta con una licenciatura en Diseño de la Información por la Universidad de las Américas Puebla, una maestría en Identidad Gráfica y Branding por el London College of Communication y una maestría en Diseño de Tipografía por la University of Reading.
              </p>
            </div>
          </div>

          <!-- Asesor 3: Edgar Morejón -->
          <div class="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
            <div class="w-36 sm:w-44 lg:w-52 shrink-0 select-none pointer-events-none">
              <img
                src="/images/figma-asesor-edgar.png"
                alt="Edgar Morejón"
                class="w-full h-auto object-contain block drop-shadow-sm"
                loading="lazy"
                draggable="false"
              />
            </div>
            <div class="flex-1 space-y-2 pt-1">
              <h3 class="font-barlow font-normal text-2xl sm:text-3xl lg:text-[38px] text-[#1C1C1C] leading-none tracking-normal">
                Edgar Morejón
              </h3>
              <p class="font-barlow font-normal text-sm sm:text-base lg:text-[17px] text-[#1C1C1C]/90 leading-snug">
                Diseñador y docente con más de 18 años liderando su marca de lencería y 15 años formando talentos en moda. Su trabajo se centra en la investigación y desarrollo de bio textiles, explorando materiales sostenibles y técnicas innovadoras. Integra tecnología y sostenibilidad en clases como diseño experimental. Ha impulsado a estudiantes premiados internacionalmente, IDA International Design Awards, piezas expuestas en museos como MARCO y publicaciones en Harper's Bazaar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Sección Asesores de Proyectos 1:1 con Figma (Frame 325:2 / Nodes 354:70 a 354:125)
</script>
