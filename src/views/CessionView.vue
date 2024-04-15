<template>
  <div class="cession">
    <div class="cession__header">
      <slot name="title" />
      <div class="cession__actions">
        <button class="cession__actions--import" v-ripple>
          <v-icon>{{ mdiPlus }}</v-icon>
          Импорт
        </button>
      </div>
    </div>

    <div class="cession__content">
      <CessionTableFilters />
      <CessionTable :items="items" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import axios from 'axios'
import { mdiPlus } from '@mdi/js'
import CessionTable from '@/components/CessionTable.vue'
import CessionTableFilters from '@/components/CessionTableFilters.vue'

const items = ref([])

async function getCessions() {
  try {
    const { data } = await axios.get('cessions/regestries')
    console.log(data, 'data')
  } catch (error) {
    console.error(error)
  }
}
getCessions()
</script>

<style lang="scss" scoped>
.cession {
  display: flex;
  flex-direction: column;
  &__header {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  &__actions {
    &--import {
      background: var(--c-primary);
      color: var(--c-text-inversed);
      padding: 11px 12px;
      border-radius: 8px;
    }
  }
  &__content {
    margin-top: 46px;
  }
}
</style>
