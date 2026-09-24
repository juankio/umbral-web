<template>
  <div class="relative w-full max-w-[1920px] mx-auto min-h-[320px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[480px] xl:min-h-[520px] flex items-center justify-center overflow-visible select-none py-6 sm:py-8 lg:py-10">
    <!-- Avatar Izquierdo (Bleed lateral suave 1:1 Figma) -->
    <div
      class="absolute -left-[14%] sm:-left-[12%] lg:-left-[10%] top-[4%] sm:top-[2%] w-[32%] sm:w-[28%] lg:w-[24%] max-w-[300px] pointer-events-none select-none z-0 transition-transform duration-700 ease-out"
      aria-hidden="true"
    >
      <AppImage
        :src="leftImage"
        :alt="leftAlt || 'Integrante Umbral'"
        img-class="w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.06)]"
        wrapper-class="w-full h-auto"
        loading="lazy"
      />
    </div>

    <!-- Escenario Central: Retrato y Rótulo (1:1 Figma) -->
    <div class="relative z-10 flex flex-col items-center justify-center w-full max-w-[1400px] px-4 sm:px-6">
      <div class="relative flex items-center justify-center w-[56%] sm:w-[46%] md:w-[38%] lg:w-[32%] xl:w-[28%] max-w-[380px]">
        <AppImage
          :src="centerImage"
          :alt="name"
          img-class="w-full h-auto object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.12)]"
          wrapper-class="w-full h-auto"
          loading="eager"
        />

        <!-- Rótulo Desktop Flotante a la Derecha (Solo en pantallas xl+ donde hay holgura lateral) -->
        <div class="hidden xl:flex flex-col items-start absolute left-[78%] top-[54%] -translate-y-1/2 z-20 pointer-events-auto min-w-[280px]">
          <h3 class="font-barlow font-normal text-2xl xl:text-3xl text-[#0B0B0B] leading-none tracking-tight whitespace-nowrap">
            {{ name }}
          </h3>
          <p class="font-barlow font-normal text-sm xl:text-base text-[#0B0B0B]/80 tracking-tight mt-1 xl:mt-1.5 whitespace-nowrap">
            {{ role }}
          </p>
        </div>
      </div>

      <!-- Rótulo Móvil / Tablet / Pantalla Media (< xl) Centrado Debajo para Cero Colisiones -->
      <div class="flex xl:hidden flex-col items-center text-center mt-4 sm:mt-6 z-20">
        <h3 class="font-barlow font-normal text-2xl sm:text-3xl text-[#0B0B0B] leading-none tracking-tight">
          {{ name }}
        </h3>
        <p class="font-barlow font-normal text-sm sm:text-base text-[#0B0B0B]/80 tracking-tight mt-1">
          {{ role }}
        </p>
      </div>
    </div>

    <!-- Avatar Derecho (Bleed lateral suave 1:1 Figma) -->
    <div
      class="absolute -right-[14%] sm:-right-[12%] lg:-right-[10%] top-[2%] sm:top-0 w-[32%] sm:w-[28%] lg:w-[24%] max-w-[300px] pointer-events-none select-none z-0 transition-transform duration-700 ease-out"
      aria-hidden="true"
    >
      <AppImage
        :src="rightImage"
        :alt="rightAlt || 'Integrante Umbral'"
        img-class="w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.06)]"
        wrapper-class="w-full h-auto"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  leftImage: string
  centerImage: string
  rightImage: string
  name: string
  role: string
  leftAlt?: string
  rightAlt?: string
}

defineProps<Props>()
</script>
