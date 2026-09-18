<template>
  <section class="py-16 sm:py-24 bg-white border-b border-neutral-200 select-none overflow-hidden relative">
    <!-- Círculos arquitectónicos concéntricos de fondo (Constelación orbital) -->
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
      <div class="w-[500px] h-[500px] rounded-full border border-neutral-200 border-dashed animate-[spin_120s_linear_infinite]" />
      <div class="w-[850px] h-[850px] rounded-full border border-neutral-200 absolute" />
      <div class="w-[1200px] h-[1200px] rounded-full border border-neutral-100 absolute border-dashed" />
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Titular: Nombres alumnos (Figma id: 325:43, Barlow Condensed 40px regular) -->
      <div class="text-center mb-12 sm:mb-16">
        <span class="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">
          Comunidad Expositores CRGS · Zona Maco 2026
        </span>
        <h2 class="font-barlow font-normal text-3xl sm:text-4xl lg:text-[40px] text-[#070707] uppercase tracking-wider">
          Nombres alumnos
        </h2>
        <div class="h-[1px] w-24 bg-neutral-900 mx-auto mt-4" />
      </div>

      <!-- Grid orbital de nombres de alumnos -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
        <NuxtLink
          v-for="student in studentList"
          :key="student.name"
          :to="`/obras/${student.slug}`"
          class="group p-4 bg-neutral-50/80 hover:bg-neutral-950 border border-neutral-200/80 hover:border-neutral-950 transition-all duration-300 rounded-sm flex flex-col justify-between min-h-[110px] hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-neutral-950"
        >
          <div class="flex items-center justify-between mb-2">
            <span class="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-white transition-colors" />
            <span class="font-mono text-[9px] uppercase tracking-widest text-neutral-400 group-hover:text-neutral-300 truncate max-w-[80px]">
              {{ student.category }}
            </span>
          </div>

          <div>
            <h3 class="font-barlow font-normal text-base sm:text-lg lg:text-xl text-neutral-900 group-hover:text-white leading-tight transition-colors">
              {{ student.name }}
            </h3>
            <p class="font-mono text-[10px] text-neutral-500 group-hover:text-neutral-400 mt-1 truncate">
              {{ student.obraTitle }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useObras } from '~/composables/useObras'

const { obras } = useObras()

interface StudentEntry {
  name: string
  obraTitle: string
  slug: string
  category: string
}

const studentList = computed<StudentEntry[]>(() => {
  const list: StudentEntry[] = []
  for (const obra of obras) {
    for (const designer of obra.designers) {
      if (!list.some(s => s.name === designer)) {
        list.push({
          name: designer,
          obraTitle: obra.title,
          slug: obra.slug,
          category: obra.category
        })
      }
    }
  }
  return list
})
</script>
