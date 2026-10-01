<template>
  <div
    class="animate-marquee-hover-boost group relative w-full overflow-hidden select-none cursor-pointer"
    :class="theme === 'light' ? 'bg-white text-black border-t border-neutral-100 py-3 sm:py-3.5' : 'bg-[#1C1C1C] text-white py-3 sm:py-4'"
    aria-hidden="true"
  >
    <div class="animate-marquee whitespace-nowrap flex items-center">
      <div
        v-for="i in 8"
        :key="i"
        class="flex items-center flex-shrink-0"
      >
        <span
          class="font-barlow font-normal text-[26px] sm:text-[32px] lg:text-[42px] tracking-widest uppercase px-4 sm:px-8 leading-none select-none"
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
  theme?: 'light' | 'dark'
  text?: string
}

withDefaults(defineProps<Props>(), {
  theme: 'light',
  text: 'PENSAMIENTO. MATERIA. CREACIÓN.'
})
</script>
