<template>
  <section class="w-full">
    <!-- Bloque 1: Contenedor Negro #1C1C1C (Nuestra Inspiración) -->
    <div class="w-full bg-[#1C1C1C] text-white py-20 lg:py-32">
      <div class="max-w-[1720px] mx-auto px-6 sm:px-12 space-y-20 lg:space-y-28">
        <!-- Encabezado de Inspiración -->
        <div class="text-center space-y-4">
          <h2 class="font-barlow font-medium text-5xl md:text-[90px] lg:text-[128px] text-white text-center leading-tight uppercase">
            NUESTRA INSPIRACIÓN
          </h2>
          <p class="font-barlow text-xl md:text-[36px] lg:text-[48px] text-white/90 text-center leading-snug font-normal max-w-5xl mx-auto">
            Conoce acerca de los que hicieron el Centro Roberto Garza Sada una realidad.
          </p>
        </div>

        <!-- Don Roberto Garza Sada -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div class="lg:col-span-5 flex justify-center">
            <img
              src="/images/roberto-garza-sada.png"
              alt="Don Roberto Garza Sada"
              class="w-full max-w-[500px] h-auto object-cover"
            />
          </div>
          <div class="lg:col-span-7 space-y-6">
            <h3 class="font-barlow font-medium text-3xl md:text-[48px] text-white leading-tight">
              † Don Roberto Garza Sada
            </h3>
            <div class="space-y-4 font-barlow text-lg md:text-[28px] lg:text-[32px] text-white leading-[1.2] text-justify font-normal">
              <p>
                El Centro lleva el nombre de Don Roberto Garza Sada como homenaje a quien dejara en la UDEM una huella más de su generoso espíritu y de su voluntad por impulsar el desarrollo cultural de nuestra sociedad.
              </p>
              <p>
                El CRGS, sin duda, cristaliza sus intereses y grandes pasiones. Ingeniero de profesión, Roberto Garza Sada, fue por sus obras y sus talentos personales, un arquitecto, un diseñador y un artista; un espíritu innovador, generoso y sensible que marcó su tiempo y su entorno.
              </p>
              <p>
                Sus aspiraciones superaron, en mucho, la esfera de la empresa, para volcarse generosamente hacia la promoción del arte, la educación y la cultura.
              </p>
            </div>
          </div>
        </div>

        <!-- Doña Margarita Garza Sada de Fernández -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div class="order-2 lg:order-1 lg:col-span-7 space-y-6">
            <h3 class="font-barlow font-medium text-3xl md:text-[45px] text-white leading-tight">
              † Doña Margarita Garza Sada de Fernández
            </h3>
            <div class="space-y-4 font-barlow text-lg md:text-[28px] lg:text-[32px] text-white leading-[1.2] text-justify font-normal">
              <p>
                De su padre, Don Roberto Garza Sada, heredó el amor por el arte, la inteligencia para los negocios, y su compromiso para el desarrollo de la comunidad.
              </p>
              <p>
                Fue la principal benefactora del Centro Roberto Garza Sada de Arte, Arquitectura y Diseño de la Universidad de Monterrey, el cual visionó como un “portal de conocimiento y un crisol para la creatividad” y para el cual invitó a colaborar en su creación al reconocido arquitecto japonés Tadao Ando.
              </p>
              <p>
                Durante su vida hizo innumerables contribuciones en educación, arte y filantropía.
              </p>
            </div>
          </div>
          <div class="order-1 lg:order-2 lg:col-span-5 flex justify-center">
            <img
              src="/images/margarita-garza-sada.png"
              alt="Doña Margarita Garza Sada de Fernández"
              class="w-full max-w-[540px] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Bloque 2: SECCIÓN TADAO ANDO EN FONDO BLANCO PURO #FFFFFF -->
    <div class="w-full bg-white py-20 lg:py-32">
      <div class="max-w-[1720px] mx-auto px-6 sm:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <!-- Izquierda: Retrato angular recortado tadao-masked.png -->
          <div class="lg:col-span-5 flex justify-center lg:justify-start">
            <img
              src="/images/tadao-masked.png"
              alt="Retrato de Tadao Ando"
              class="w-full max-w-[520px] h-auto object-contain"
            />
          </div>

          <!-- Derecha: Título, Subtítulo y Biografía oficial -->
          <div class="lg:col-span-7 space-y-6">
            <h3 class="font-barlow text-5xl md:text-[80px] lg:text-[96px] text-[#1C1C1C] leading-none font-normal">
              Tadao Ando
            </h3>
            <p class="font-barlow font-medium text-2xl md:text-[36px] text-[#1C1C1C] leading-tight">
              La visión artística del diseño del edificio
            </p>
            <div class="space-y-4 font-barlow text-lg md:text-[28px] lg:text-[32px] text-[#1C1C1C] leading-[1.2] text-justify font-normal">
              <p>
                El Centro Roberto Garza Sada (CRGS) fue diseñado por Tadao Ando, ganador del Premio Pritzker 1995 y uno de los arquitectos más reconocidos en el mundo. Su primera obra en Latinoamérica, refleja la trascendencia del proyecto.
              </p>
              <p>
                Tadao Ando nació en 1941 en Osaka, Japón. En 1969, estableció la compañía Tadao Ando Architect & Associates y, desde entonces, ha sido reconocido por sus numerosos trabajos en Japón y en otros países. Entre sus reconocimientos se incluyen virtualmente todos los premios que Japón concede para la arquitectura y las artes, así como grandes premios internacionales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Sección Nuestra Inspiración: Don Roberto Garza Sada, Doña Margarita Garza Sada y Tadao Ando
</script>
