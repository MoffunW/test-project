<template>
  <aside class="sidebar">
    <SidebarItem
      v-for="(item, index) in sidebarItems"
      :key="index"
      :title="item.title"
      :icon="item.icon"
      :children="item.children"
      :route="item.route"
      :active="isActive(item.route)"
      @select="selectItem(item, index)"
      @changeRoute="changeRoute"
    />
  </aside>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { sidebarItems } from '@/data/routes'
import SidebarItem from '@/components/SidebarItem.vue'

function selectItem(item) {
  if (isActive(item.route)) changeRoute('')
  else changeRoute(item.route)
}

const router = useRouter()
function changeRoute(route) {
  router.push({ path: `/${route}` })
}

const route = useRoute()
const isActive = (itemRoute) => {
  return route.matched.some((item) => item.path === `/${itemRoute}`)
}
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  width: 240px;
  background: #fff;
  flex-shrink: 0;
  box-shadow: 1px 0px 10px 0px #a6a8a933;
  padding: 32px 24px;
}
</style>
