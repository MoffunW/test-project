<template>
  <main class="main">
    <RouterView>
      <template v-slot="{ Component }">
        <component :is="Component">
          <template v-slot:title>
            <div class="title">{{ currentRouteName }}</div>
          </template>
        </component>
      </template>
    </RouterView>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterView } from 'vue-router'

const route = useRoute()

const currentRouteName = computed(() => route.meta.title)
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  padding: 24px;
  padding-right: 32px;
  width: 100%;
  background: var(--c-background);
  overflow-x: auto;
  &__actions {
    display: flex;
  }
}
</style>
