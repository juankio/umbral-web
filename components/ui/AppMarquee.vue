<template>
  <div
    class="relative w-full overflow-hidden select-none py-3.5 sm:py-4"
    :class="theme === 'light' ? 'bg-white text-black border-y border-neutral-200' : 'bg-[#1C1C1C] text-white border-y border-neutral-900'"
    aria-hidden="true"
  >
    <div class="flex w-max animate-marquee">
      <!-- Track 1 -->
      <div class="flex shrink-0 items-center justify-around gap-8 px-4">
        <span
          v-for="i in 6"
          :key="i"
          class="font-barlow font-normal text-xl sm:text-2xl lg:text-[28px] tracking-widest uppercase whitespace-nowrap leading-normal px-4 sm:px-6"
          :class="theme === 'light' ? 'text-black' : 'text-white'"
        >
          {{ text }}
        </span>
      </div>
      <!-- Track 2 (Espejo idéntico para loop 100% seamless infinito) -->
      <div class="flex shrink-0 items-center justify-around gap-8 px-4" aria-hidden="true">
        <span
          v-for="i in 6"
          :key="'mirror-' + i"
          class="font-barlow font-normal text-xl sm:text-2xl lg:text-[28px] tracking-widest uppercase whitespace-nowrap leading-normal px-4 sm:px-6"
          :class="theme === 'light' ? 'text-black' : 'text-white'"
        >
          {{ text }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  theme?: 'dark' | 'light'
  text?: string
}

withDefaults(defineProps<Props>(), {
  theme: 'dark',
  text: 'PENSAMIENTO. MATERIA. CREACIÓN.'
})
</script>
