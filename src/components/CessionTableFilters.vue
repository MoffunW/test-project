<template>
  <div class="actions">
    <v-text-field
      :prepend-inner-icon="mdiMagnify"
      class="actions__search"
      variant="outlined"
      hide-details
      density="comfortable"
      :menuIcon="mdiMagnify"
    />
    <v-select class="actions__status" variant="outlined" hide-details density="comfortable" />
    <v-checkbox class="actions__done" label="Обработан" hide-details density="comfortable" />
  </div>
</template>

<script setup>
import { mdiMagnify } from '@mdi/js'
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
