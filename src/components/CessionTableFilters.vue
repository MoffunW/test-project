<template>
  <div class="actions">
    <v-text-field
      v-model="searchString"
      :prepend-inner-icon="mdiMagnify"
      class="actions__search"
      variant="outlined"
      hide-details
      density="comfortable"
      :menuIcon="mdiMagnify"
    />
    <v-select
      v-model="status"
      :items="statuses"
      item-title="name"
      item-value="value"
      class="actions__status"
      variant="outlined"
      hide-details
      density="comfortable"
      label="Статус"
    />
    <!--Didn't get purpose of this checkbox-->
    <v-checkbox class="actions__done" label="Обработан" hide-details density="comfortable" />
  </div>
</template>

<script setup>
import { defineModel } from 'vue'
import { mdiMagnify } from '@mdi/js'

const status = defineModel('status')
const searchString = defineModel('searchString')

const props = defineProps({
  statuses: Array
})
</script>

<style lang="scss" scoped>
.actions {
  display: flex;
  align-items: center;
  gap: 9px;
  &__search {
    max-width: 315px;
  }
  &__status {
    max-width: 220px;
  }
}
</style>
