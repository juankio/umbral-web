<template>
  <section class="py-16 lg:py-24 bg-[#141414] text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Two Columns: Degrees Info & Graduate Programs -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        <!-- More info about Careers -->
        <div class="border border-neutral-800 bg-[#1A1A1A] p-8 sm:p-10 flex flex-col justify-between">
          <div class="space-y-4">
            <span class="font-mono text-xs uppercase tracking-widest text-neutral-400">
              Admisiones & Proceso
            </span>
            <h3 class="font-barlow font-bold text-3xl sm:text-4xl uppercase tracking-tight text-white">
              Más Información de Carreras
            </h3>
            <p class="font-sans text-sm text-neutral-300 leading-relaxed">
              El proceso de admisión al Centro Roberto Garza Sada incluye evaluación de portafolio creativo, entrevista con directores de programa y examen de aptitudes de diseño.
            </p>
            <ul class="space-y-2 font-mono text-xs text-neutral-400 pt-2">
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-purple-400" />
                Becas a la Excelencia Artística y Arquitectónica
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-purple-400" />
                Intercambios con más de 80 universidades internacionales
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-purple-400" />
                Prácticas profesionales en firmas y museos globales
              </li>
            </ul>
          </div>

          <div class="pt-8 mt-6 border-t border-neutral-800">
            <a
              href="https://www.udem.edu.mx/es/conoce/admisiones"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 font-barlow font-bold text-base uppercase tracking-wider text-white hover:text-neutral-300 transition-colors"
            >
              <span>Iniciar Proceso de Admisión</span>
              <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Graduate Studies / Posgrados -->
        <div class="border border-neutral-800 bg-[#1A1A1A] p-8 sm:p-10 flex flex-col justify-between">
          <div class="space-y-4">
            <span class="font-mono text-xs uppercase tracking-widest text-neutral-400">
              Especialización & Maestría
            </span>
            <h3 class="font-barlow font-bold text-3xl sm:text-4xl uppercase tracking-tight text-white">
              Posgrados y Educación Continua
            </h3>
            <p class="font-sans text-sm text-neutral-300 leading-relaxed">
              Programas avanzados para profesionales que buscan profundizar en investigación proyectual, diseño estratégico, habitabilidad y gestión de proyectos culturales.
            </p>
            <div class="space-y-2 pt-2">
              <div class="border border-neutral-800 p-3 bg-neutral-900/60">
                <h4 class="font-barlow font-bold text-lg uppercase text-white">Maestría en Arquitectura y Ciudad</h4>
                <p class="font-mono text-[11px] text-neutral-400">Enfoque en resiliencia urbana y diseño sostenible</p>
              </div>
              <div class="border border-neutral-800 p-3 bg-neutral-900/60">
                <h4 class="font-barlow font-bold text-lg uppercase text-white">Maestría en Diseño Gráfico Estratégico</h4>
                <p class="font-mono text-[11px] text-neutral-400">Branding, experiencia de usuario y narrativas visuales</p>
              </div>
            </div>
          </div>

          <div class="pt-8 mt-6 border-t border-neutral-800">
            <a
              href="https://www.udem.edu.mx/es/posgrados"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 font-barlow font-bold text-base uppercase tracking-wider text-white hover:text-neutral-300 transition-colors"
            >
              <span>Ver Catálogo de Posgrados</span>
              <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Poetic Closing Statement -->
      <div class="border-t border-neutral-800 pt-16 text-center max-w-3xl mx-auto space-y-4">
        <span class="font-mono text-xs uppercase tracking-widest text-neutral-500 block">
          Lema CRGS · Universidad de Monterrey
        </span>
        <blockquote class="font-barlow font-light text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
          "El futuro inspira nuestra mejor versión."
        </blockquote>
        <p class="font-barlow text-lg text-neutral-400 tracking-wider uppercase font-light pt-2">
          San Pedro Garza García · Nuevo León, México
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Bloque de admisiones, posgrados y cierre poético
</script>
