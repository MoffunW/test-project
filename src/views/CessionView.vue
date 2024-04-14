<template>
  <div class="cession">
    <div class="cession__title">{{title}}</div>
    <div class="cession__actions">
      <button class='cession__actions--import' v-ripple>
        <v-icon>{{mdiPlus}}</v-icon>
        Импорт
      </button>
    </div>
  </div>
</template>

<script setup>
import {mdiPlus} from '@mdi/js'
import { RouterView } from 'vue-router'
const props = defineProps({
  title: String
});
</script>

<style lang="scss" scoped>
.cession {
  display: flex;
  justify-content: space-between;
  &__actions {
    &--import {
      background: var(--c-primary);
    }
  } 
}
button {
  background: blue;
  padding: 11px 12px;
  border-radius: 8px;
}
</style>
