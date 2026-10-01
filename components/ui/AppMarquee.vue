<template>
  <div
    class="animate-marquee-hover-boost group relative w-full overflow-hidden select-none cursor-pointer"
    :class="theme === 'light' ? 'bg-white text-black border-y border-neutral-200 py-3.5 sm:py-4 lg:py-4.5' : 'bg-[#1C1C1C] text-white border-y border-neutral-900 py-3.5 sm:py-4 lg:py-4.5'"
    aria-hidden="true"
  >
    <div class="animate-marquee whitespace-nowrap flex items-center">
      <div
        v-for="i in 8"
        :key="i"
        class="flex items-center flex-shrink-0"
      >
        <span
          class="font-barlow font-normal text-[22px] sm:text-[28px] lg:text-[36px] xl:text-[40px] tracking-widest uppercase select-none leading-none px-4 sm:px-8"
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
