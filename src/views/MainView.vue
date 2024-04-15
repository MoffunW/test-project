<template>
  <main class="main">
    <RouterView>
      <template v-slot="{ Component }">
        <component :is="Component" :title="currentRouteName">
          <template v-slot:title>
            <div class="title">{{ currentRouteName }}</div>
          </template>
        </component>
      </template>
    </RouterView>
  </main>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useRoute, RouterView } from 'vue-router'

const route = useRoute()
watch(
  () => route.path,
  () => console.log(route, 'route')
)

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
  &__title {
    font-size: 24px;
    line-height: 29px;
    font-weight: 700;
  }
  &__actions {
    display: flex;
  }
}
.title {
  font-size: 24px;
  font-weight: 700;
}
</style>
