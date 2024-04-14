<template>
  <aside class="sidebar">
    <SidebarItem
      v-for="(item, index) in sidebarItems"
      :key="index"
      :title="item.title"
      :icon="item.icon"
      :children="item.children"
      :active="index === selectedItemIndex"
      @click="selectItem(index)"
    />
  </aside>
</template>

<script setup>
import { ref, provide } from 'vue'
import {
  mdiDomain,
  mdiAccountMultipleOutline,
  mdiCreditCardOutline,
  mdiEmailMultipleOutline,
  mdiFileDocumentOutline,
  mdiCogOutline
} from '@mdi/js'
import SidebarItem from '@/components/SidebarItem.vue'

const selectedItemIndex = ref(0)

function selectItem(index) {
  selectedItemIndex.value = index
}

const sidebarItems = [
  {
    icon: mdiDomain,
    title: 'Организации',
    children: []
  },

  {
    icon: mdiAccountMultipleOutline,
    title: 'Персонал',
    children: [
      {
        title: 'first',
        route: '/first'
      },
      {
        title: 'second',
        route: '/second'
      },
      {
        title: 'third',
        route: '/third'
      }
    ]
  },
  {
    icon: mdiCreditCardOutline,
    title: 'Кредиты',
    children: [
      {
        title: 'first',
        route: '/first'
      },
      {
        title: 'second',
        route: '/second'
      },
      {
        title: 'third',
        route: '/third'
      }
    ]
  },
  {
    icon: mdiEmailMultipleOutline,
    title: 'Корреспонденция',
    children: [
      {
        title: 'first',
        route: '/first'
      },
      {
        title: 'second',
        route: '/second'
      },
      {
        title: 'third',
        route: '/third'
      }
    ]
  },
  {
    icon: mdiFileDocumentOutline,
    title: 'Цессия',
    children: [
      {
        title: 'Аналитика',
        route: '/analytics'
      },
      {
        title: 'Договоры',
        route: '/agreements'
      },
      {
        title: 'Импорт',
        route: '/import'
      }
    ]
  },
  {
    icon: mdiCogOutline,
    title: 'Настройки',
    children: []
  }
]
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
