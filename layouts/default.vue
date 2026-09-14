<template>
  <div class="flex flex-col min-h-screen bg-[#FAFAFA] text-[#1C1C1C]">
    <AppHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/ui/AppHeader.vue'
import AppFooter from '~/components/ui/AppFooter.vue'
</script>
