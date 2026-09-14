<template>
  <section class="border-b border-neutral-200 bg-white pt-10 pb-14 lg:pt-16 lg:pb-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Breadcrumb & Tag -->
      <div class="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-neutral-200 font-mono text-xs uppercase tracking-widest text-neutral-500">
        <div class="flex items-center gap-2">
          <NuxtLink to="/" class="hover:text-neutral-900 transition-colors">Inicio</NuxtLink>
          <span>/</span>
          <span class="text-neutral-900 font-semibold">Zona Maco 2026</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Feria Internacional de Arte Contemporáneo</span>
        </div>
      </div>

      <!-- Main Heading Layout -->
      <div class="max-w-5xl">
        <span class="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-3">
          Pabellón Escolar · Selección 2026
        </span>
        <h1 class="font-barlow font-bold text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tightest leading-[0.92] text-neutral-950">
          A través del Umbral
        </h1>
        <p class="font-barlow font-light text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-neutral-600 mt-2">
          Zona Maco Expositores
        </p>

        <p class="mt-6 font-sans text-neutral-600 text-base sm:text-lg leading-relaxed max-w-3xl">
          El Centro Roberto Garza Sada presenta en Zona Maco 2026 una cuidada selección de obras nacidas en la Repentina de Diseño y Arte: piezas únicas y ediciones limitadas que exploran la tensión material, el vacío arquitectónico y la identidad tectónica del norte de México.
        </p>
      </div>

      <!-- Barra de Categorías Oficiales de ZⓈONA MACO -->
      <div class="mt-12 pt-8 border-t border-neutral-200">
        <div class="flex items-center gap-2 mb-4">
          <span class="font-mono text-[11px] uppercase tracking-widest text-neutral-400">
            Secciones & Plataformas Oficiales
          </span>
          <div class="h-px flex-1 bg-neutral-200" />
        </div>

        <div class="flex flex-wrap items-center gap-2 sm:gap-3">
          <div
            v-for="cat in macoCategories"
            :key="cat.name"
            class="px-3.5 py-2 border border-neutral-200 bg-white hover:border-neutral-950 transition-colors duration-200 flex items-center gap-2 group cursor-default"
          >
            <span
              v-if="cat.highlight"
              class="w-4 h-4 rounded-full border border-neutral-900 flex items-center justify-center text-[9px] font-mono font-bold leading-none"
            >
              S
            </span>
            <span class="font-barlow font-semibold text-xs sm:text-sm uppercase tracking-wider text-neutral-800 group-hover:text-neutral-950">
              {{ cat.name }}
            </span>
          </div>
        </div>
      </div>

      <!-- Quick stats bar -->
      <div class="mt-10 pt-8 border-t border-neutral-200 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
        <div>
          <span class="text-neutral-400 block uppercase">Ubicación</span>
          <span class="text-neutral-900 font-semibold uppercase text-sm font-barlow tracking-wider">Centro Citibanamex, CDMX</span>
        </div>
        <div>
          <span class="text-neutral-400 block uppercase">Edición</span>
          <span class="text-neutral-900 font-semibold uppercase text-sm font-barlow tracking-wider">Zona Maco 2026</span>
        </div>
        <div>
          <span class="text-neutral-400 block uppercase">Catálogo</span>
          <span class="text-neutral-900 font-semibold uppercase text-sm font-barlow tracking-wider">10 Obras Seleccionadas</span>
        </div>
        <div>
          <span class="text-neutral-400 block uppercase">Precios</span>
          <span class="text-neutral-900 font-semibold uppercase text-sm font-barlow tracking-wider">$00 / $500 USD</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface MacoCategory {
  name: string
  highlight?: boolean
}

const macoCategories: MacoCategory[] = [
  { name: 'ZⓈONA MACO MÉXICO ARTE CONTEMPORÁNEO', highlight: true },
  { name: 'ARTE MODERNO' },
  { name: 'SUR' },
  { name: 'EJES' },
  { name: 'DISEÑO' },
  { name: 'DISEÑO EMERGENTE' },
  { name: 'SALÓN DEL ANTICUARIO' }
]
</script>
