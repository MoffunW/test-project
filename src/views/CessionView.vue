<template>
  <div class="cession">
    <div class="cession__header">
      <slot name="title" />
      <div class="cession__actions">
        <button @click="isModal = true" class="cession__actions--import" v-ripple>
          <v-icon>{{ mdiPlus }}</v-icon>
          Импорт
        </button>
      </div>
    </div>

    <div class="cession__content">
      <CessionTableFilters
        v-model:status="status"
        v-model:searchString="searchString"
        :statuses="STATUSES"
      />
      <CessionTable :items="filteredItems" @deleteItem="deleteItem" @downloadItem="downloadItem" />
      <div class="cession__total">Всего строк: {{ filteredItems.length }}</div>
    </div>
  </div>
  <ModalImport v-show="isModal" @closeModal="closeModal" />
</template>

<script setup>
import { ref, computed } from 'vue'

import axios from 'axios'
import { mdiPlus } from '@mdi/js'
import { $t } from '@/utils/language'
import CessionTable from '@/components/CessionTable.vue'
import CessionTableFilters from '@/components/CessionTableFilters.vue'
import ModalImport from '@/components/ModalImport.vue'

const STATUSES = [
  { name: $t('processed'), value: 'processed' },
  { name: $t('error'), value: 'error' }
]

const isModal = ref(false)
const closeModal = () => {
  isModal.value = false
}

const items = ref([])
const status = ref(null)
// const status = ref(STATUSES[0].value)
const searchString = ref('')

async function getCessions() {
  try {
    const { data } = await axios.get('cessions/regestries')
    console.log(data, 'data')

    items.value = data
  } catch (error) {
    console.error(error)
  }
}

const filteredItems = computed(() => {
  return items.value.filter((item) => {
    const statused = status.value ? item.status.code === status.value : true
    const searchVal = searchString.value.toLowerCase()

    return (
      statused &&
      (item.file.name.toLowerCase().includes(searchVal) ||
        item.created_by.username.toLowerCase().includes(searchVal) ||
        item.created_by.full_name.toLowerCase().includes(searchVal))
    )
  })
})

getCessions()

async function downloadItem(id) {
  try {
    console.log(id, 'down')
    const { data } = await axios.get(`cessions/registries/${id}/export`)

    const link = document.createElement('a')
    document.body.append(link)
    link.target = '_blank'

    link.href = data.content
    link.download = data.name
    link.click()

    link.remove()
  } catch (error) {
    console.error(error)
  }
}
async function deleteItem(id) {
  try {
    await axios.delete(`cessions/registries/${id}`)
    items.value = items.value.filter((item) => item.id !== id)
  } catch (error) {
    console.error(error)
  }
}
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
  &__total {
    margin-top: 23px;
    font-size: 14px;
    color: var(--c-dim);
  }
}
</style>
