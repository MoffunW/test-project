<template>
  <RouterView>
    <template v-slot="{ Component }">
      <component :is="Component">
        <template v-slot:title>
          <div class="title">{{ currentRouteName }}</div>
        </template>
      </component>
    </template>
  </RouterView>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterView } from 'vue-router'

const route = useRoute()

const currentRouteName = computed(() => route.meta.title)
</script>

<style lang="scss" scoped>
.title {
  font-size: 24px;
  line-height: 29px;
  font-weight: 700;
}
</style>
