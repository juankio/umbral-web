<template>
  <article class="group flex flex-col">
    <div class="aspect-square bg-[#EAEAEA] overflow-hidden w-full max-w-[200px] sm:max-w-[220px] lg:max-w-[235px] xl:max-w-[245px]">
      <img
        :src="alumno.image"
        :alt="alumno.name"
        class="grayscale contrast-105 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        width="400"
        height="400"
      />
    </div>
    <h4 class="font-barlow font-normal text-sm xs:text-base sm:text-xl lg:text-[22px] text-[#070707] mt-1.5 sm:mt-2 leading-tight">
      {{ alumno.name }}
    </h4>
    <p class="font-barlow font-normal text-[10px] xs:text-xs sm:text-sm text-neutral-600 mt-0.5 leading-snug">
      {{ alumno.career }}
    </p>
  </article>
</template>

<script setup lang="ts">
export interface AlumnoCreador {
  name: string
  career: string
  image: string
}

defineProps<{
  alumno: AlumnoCreador
}>()
</script>
