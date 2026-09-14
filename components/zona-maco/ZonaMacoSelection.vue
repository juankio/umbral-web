<template>
  <section class="py-16 lg:py-24 bg-white border-b border-neutral-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mb-12">
        <span class="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-2">
          Curaduría & Jurado
        </span>
        <h2 class="font-barlow font-bold text-4xl sm:text-5xl uppercase tracking-tight text-neutral-950">
          Información general y proceso de selección
        </h2>
        <p class="mt-3 font-sans text-neutral-600 text-base leading-relaxed">
          Cada año, el comité curatorial del Centro Roberto Garza Sada y curadores invitados de Zona Maco evalúan más de 60 propuestas generadas durante las 48 horas de la Repentina para seleccionar las 10 piezas que integran la colección oficial.
        </p>
      </div>

      <!-- Steps / Selection stages -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="step in selectionSteps"
          :key="step.number"
          class="border border-neutral-200 p-8 flex flex-col justify-between bg-white hover:border-neutral-950 transition-colors duration-300"
        >
          <div>
            <div class="flex items-center justify-between pb-4 mb-6 border-b border-neutral-100">
              <span class="font-mono text-2xl font-bold text-neutral-950">{{ step.number }}</span>
              <span class="font-mono text-[10px] uppercase tracking-widest text-neutral-400">{{ step.tag }}</span>
            </div>
            <h3 class="font-barlow font-bold text-2xl uppercase tracking-tight text-neutral-950 mb-3">
              {{ step.title }}
            </h3>
            <p class="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
              {{ step.description }}
            </p>
          </div>

          <div class="pt-6 mt-6 border-t border-neutral-100 font-mono text-[11px] text-neutral-500">
            <span class="text-neutral-400 block uppercase text-[10px]">Criterio Clave</span>
            <span class="font-semibold text-neutral-900">{{ step.criterion }}</span>
          </div>
        </div>
      </div>

      <!-- General Info Accordion / Summary Bar -->
      <div class="mt-12 p-8 border border-neutral-200 bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <span class="font-mono text-xs uppercase tracking-wider text-neutral-400 block mb-1">Comité Curatorial</span>
          <p class="font-barlow font-bold text-lg text-neutral-950 uppercase tracking-tight">Facultad CRGS & Curadores Zona Maco</p>
          <span class="font-mono text-[11px] text-neutral-500">Evaluación a ciegas por rúbrica</span>
        </div>
        <div>
          <span class="font-mono text-xs uppercase tracking-wider text-neutral-400 block mb-1">Piezas Postuladas</span>
          <p class="font-barlow font-bold text-lg text-neutral-950 uppercase tracking-tight">64 Proyectos de Taller</p>
          <span class="font-mono text-[11px] text-neutral-500">Estudiantes de 5 licenciaturas</span>
        </div>
        <div>
          <span class="font-mono text-xs uppercase tracking-wider text-neutral-400 block mb-1">Piezas Seleccionadas</span>
          <p class="font-barlow font-bold text-lg text-neutral-950 uppercase tracking-tight">10 Obras Oficiales</p>
          <span class="font-mono text-[11px] text-neutral-500">Pabellón escolar oficial 2026</span>
        </div>
        <div>
          <span class="font-mono text-xs uppercase tracking-wider text-neutral-400 block mb-1">Destino de Fondos</span>
          <p class="font-barlow font-bold text-lg text-neutral-950 uppercase tracking-tight">Fondo de Becas CRGS</p>
          <span class="font-mono text-[11px] text-neutral-500">Apoyo a futuros talentos UDEM</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface SelectionStep {
  number: string
  tag: string
  title: string
  description: string
  criterion: string
}

const selectionSteps: SelectionStep[] = [
  {
    number: '01',
    tag: 'Fase Inicial',
    title: 'Ronda de Ideación',
    description: 'Los proyectos son evaluados en bocetaje, viabilidad tectónica y capacidad de sintetizar el vacío de La Puerta de la Creación.',
    criterion: 'Concepto & Tensión Arquitectónica'
  },
  {
    number: '02',
    tag: 'Fase Taller',
    title: 'Prototipado 1:1',
    description: 'Verificación de acabados en concreto, metales y cerámicas con pruebas de resistencia y montaje en salas de exposición.',
    criterion: 'Rigor Técnico & Materialidad'
  },
  {
    number: '03',
    tag: 'Fase Final',
    title: 'Dictamen Curatorial',
    description: 'Selección colegiada de las 10 piezas que viajan al Centro Citibanamex para representar el rigor y la audacia del CRGS.',
    criterion: 'Diálogo con la Escena Global'
  }
]
</script>
