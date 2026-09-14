<template>
  <section class="w-full bg-white py-16 lg:py-28">
    <div class="max-w-[1720px] mx-auto px-6 sm:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <!-- Columna Izquierda: Logo y Manifiesto Oficial -->
        <div class="lg:col-span-6 flex flex-col space-y-8">
          <div class="max-w-[450px] w-full">
            <img
              src="/images/logo-umbral.png"
              alt="Umbral - CRGS"
              class="w-full h-auto object-contain"
            />
          </div>

          <div class="space-y-6 font-barlow text-2xl md:text-[36px] leading-[1.2] text-[#1C1C1C] text-justify font-normal">
            <p>
              Es la plataforma del <strong class="font-bold">Centro Roberto Garza Sada,</strong> la Escuela de Arte, Arquitectura y Diseño de la Universidad de Monterrey.
            </p>

            <p>
              <strong class="font-bold">Funciona como un umbral entre la Escuela y el mundo:</strong> el lugar donde el trabajo de sus estudiantes y egresados, diseñadores y artistas, se cura, se presenta y se pone a circular. Más que un mercado, es una vitrina del talento que se forma en sus aulas y talleres.
            </p>

            <p>
              Cada pieza que aparece aquí atravesó el mismo camino: un pensamiento que se hizo materia para convertirse finalmente en creación.
            </p>

            <p>
              <strong class="font-bold">La Repentina Zona Maco 2027 es el primer capítulo de este proyecto.</strong>
            </p>
          </div>
        </div>

        <!-- Columna Derecha: Composición geométrica con fotos y polígono amarillo -->
        <div class="lg:col-span-6 relative flex flex-col items-center">
          <!-- Foto superior: Geometría CRGS -->
          <div class="w-full max-w-[580px] overflow-hidden">
            <img
              src="/images/crgs-geometry.png"
              alt="Arquitectura geométrica del Centro Roberto Garza Sada"
              class="w-full h-auto object-cover"
            />
          </div>

          <!-- Triángulo amarillo dorado intermedio solapado -->
          <div class="relative z-10 w-44 sm:w-60 lg:w-72 -my-8 sm:-my-12 lg:-my-14 pointer-events-none select-none">
            <img
              src="/images/intro-polygon-yellow.svg"
              alt=""
              class="w-full h-auto object-contain"
              aria-hidden="true"
            />
          </div>

          <!-- Foto inferior: Detalles tectónicos CRGS -->
          <div class="w-full max-w-[580px] overflow-hidden">
            <img
              src="/images/crgs-details.png"
              alt="Detalles de hormigón y encofrado del Centro Roberto Garza Sada"
              class="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Introducción oficial y composición geométrica de Umbral CRGS
</script>
