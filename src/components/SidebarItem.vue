<template>
  <div class="sidebar-item">
    <div class="sidebar-item__header" :class="{ active: active }">
      <v-icon class="sidebar-item__icon">{{ icon }}</v-icon>
      <div class="sidebar-item__title">{{ title }}</div>
      <div v-if="expandable" class="sidebar-item__arrow" :class="{ rotated: active }">
        <v-icon>{{ mdiChevronDown }}</v-icon>
      </div>
    </div>
    <!-- TODO: collapsing sibling above causing laggy motion-->
    <transition name="smooth">
      <div class="sidebar-item__content" v-show="expandable && active">
        <p
          v-for="(item, index) in children"
          :key="index"
          @click="selectLink(index)"
          class="sidebar-item__link"
          :class="{ active: activeLinkIndex === index }"
        >
          {{ item.title }}
        </p>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { mdiChevronDown } from '@mdi/js'

const props = defineProps({
  icon: String,
  title: String,
  children: Array,
  active: Boolean
})

const activeLinkIndex = ref(0)
function selectLink(index) {
  activeLinkIndex.value = index
}

const expandable = computed(() => props.children.length > 0)
</script>

<style lang="scss" scoped>
.sidebar-item {
  border-radius: 4px;
  font-size: 12px;
  &__header {
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    gap: 8px;
    border-radius: 4px;
    transition: background linear 0.1s;
    user-select: none;
    &:hover {
      background: #f5f5f5;
    }
    &.active {
      background: var(--c-primary);
      & > * {
        color: var(--c-text-inversed);
      }
    }
  }
  &__icon {
    color: var(--c-sidebar-icon);
  }
  &__title {
    color: var(--c-text);
  }

  &__arrow {
    margin-left: auto;
    transition: 0.1s linear transform;
    &.rotated {
      transform: scale(-1, -1);
    }
  }
  &__content {
    padding: 8px;
    padding-left: 40px;
  }
  &__link {
    display: flex;
    align-items: center;
    position: relative;
    transition: 0.1s linear color;
    cursor: pointer;
    user-select: none;
    transition: padding 0.1s linear;
    height: 38px;
    &.active {
      color: var(--c-primary);
      padding-left: 15px;
      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 7px;
        width: 7px;
        border-radius: 100%;
        background: var(--c-primary);
      }
    }
    &:hover {
      color: var(--c-primary);
    }
  }
}
</style>
