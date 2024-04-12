<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheSidebar from '@/components/TheSidebar.vue'
import TheMain from '@/components/TheMain.vue'
</script>

<template>
  <v-app class="app">
    <TheHeader />

    <div class="wrapper">
      <TheSidebar />
      <TheMain />
    </div>
  </v-app>
</template>

<style scoped>
.app {
  background: #fff;
}

.wrapper {
  display: flex;
}
</style>
