<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheSidebar from '@/components/TheSidebar.vue'
import TheMain from '@/components/TheMain.vue'
</script>

<template>
  <div class="app">
    <TheHeader />

    <div class="wrapper">
      <TheSidebar />
      <TheMain />
    </div>
  </div>
</template>

<style scoped>
.app {
  background: #fff;
}

.wrapper {
  display: flex;
  height: calc(100vh - var(--header-height));
}
</style>
