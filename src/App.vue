<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheSidebar from '@/components/TheSidebar.vue'
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()
router.push('/cession/import')
</script>

<template>
  <div class="app">
    <TheHeader />

    <div class="wrapper">
      <div id="modalContainer"></div>
      <TheSidebar />
      <RouterView />
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
