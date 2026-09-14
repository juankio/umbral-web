<template>
  <footer class="bg-[#0B0B0B] text-neutral-300 border-t border-neutral-800/80 pt-16 pb-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-neutral-800">
        <!-- Brand and Institutional Logos -->
        <div class="md:col-span-5 space-y-6">
          <div class="flex items-center gap-6">
            <img
              src="/images/footer-crgs.png"
              alt="Centro Roberto Garza Sada"
              class="h-12 sm:h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity filter brightness-110"
            />
            <div class="h-8 w-px bg-neutral-800" />
            <img
              src="/images/footer-udem.png"
              alt="Universidad de Monterrey"
              class="h-10 sm:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity filter brightness-110"
            />
          </div>

          <p class="font-barlow text-lg text-neutral-400 font-light max-w-sm tracking-wide leading-relaxed">
            UMBRAL \ CRGS es el espacio donde convergen la arquitectura, el arte y el diseño de la Universidad de Monterrey ante el escenario global.
          </p>

          <div class="pt-2 font-mono text-xs text-neutral-500 tracking-wider uppercase">
            Av. Ignacio Morones Prieto 4500 Pte.<br />
            San Pedro Garza García, N.L., México.
          </div>
        </div>

        <!-- Links Diataxis -->
        <div class="md:col-span-4 space-y-4">
          <h4 class="font-barlow text-sm font-semibold uppercase tracking-widest text-neutral-100">
            Exploración & Enlaces
          </h4>
          <ul class="space-y-2.5 font-barlow text-base tracking-wide">
            <li>
              <NuxtLink
                to="/crgs"
                class="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <span class="w-1.5 h-1.5 bg-neutral-600 group-hover:bg-white transition-colors" />
                Centro de Artes | UDEM
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/crgs#historia"
                class="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <span class="w-1.5 h-1.5 bg-neutral-600 group-hover:bg-white transition-colors" />
                Historia del CRGS
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/zona-maco"
                class="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <span class="w-1.5 h-1.5 bg-neutral-600 group-hover:bg-white transition-colors" />
                Zona Maco 2027
              </NuxtLink>
            </li>
            <li>
              <a
                href="https://www.udem.edu.mx"
                target="_blank"
                rel="noopener noreferrer"
                class="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <span class="w-1.5 h-1.5 bg-neutral-600 group-hover:bg-white transition-colors" />
                Universidad de Monterrey
              </a>
            </li>
          </ul>
        </div>

        <!-- Social & Community -->
        <div class="md:col-span-3 space-y-4">
          <h4 class="font-barlow text-sm font-semibold uppercase tracking-widest text-neutral-100">
            Comunidad & Medios
          </h4>
          <ul class="space-y-2.5 font-barlow text-base tracking-wide">
            <li>
              <a
                href="https://www.instagram.com/crgs_udem"
                target="_blank"
                rel="noopener noreferrer"
                class="text-neutral-400 hover:text-white transition-colors inline-block"
              >
                Instagram (@crgs_udem)
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/CRGSudem"
                target="_blank"
                rel="noopener noreferrer"
                class="text-neutral-400 hover:text-white transition-colors inline-block"
              >
                Centro Roberto Garza Sada
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/udem"
                target="_blank"
                rel="noopener noreferrer"
                class="text-neutral-400 hover:text-white transition-colors inline-block"
              >
                UDEM Oficial
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar & Copyright -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500 tracking-wider">
        <p>© 2026 UMBRAL \ CRGS · Universidad de Monterrey. Todos los derechos reservados.</p>
        <p class="text-neutral-600">Diseño Tectónico · Arquitectura Tadao Ando</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer arquitectónico institucional
</script>
