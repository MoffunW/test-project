<template>
  <Transition name="fade">
    <div class="wrapper">
      <div @click="$emit('closeModal')" class="overlay"></div>
      <div class="modal">
        <div class="modal__header">
          <div class="modal__title">{{ title }}</div>
          <button @click="$emit('closeModal')" v-ripple class="modal__close">
            <v-icon color="var(--c-text)">{{ mdiClose }}</v-icon>
          </button>
        </div>
        <slot />
        <div class="footer">
          <slot name="close" />
          <slot name="save" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { mdiClose } from '@mdi/js'

const props = defineProps({
  title: String
})
</script>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  top: var(--header-height);
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: var(--z-overlay);
}
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  width: 100%;
  background: var(--c-background-contrast);
  padding: 20px;
  border-radius: 8px;
  z-index: var(--z-modal);

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;
  }
  &__title {
    font-size: 28px;
    line-height: 33px;
    font-weight: 700;
    align-self: flex-end;
  }
  &__close {
    font-size: 20px;
    border-radius: 100%;
  }
}
.footer {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 48px;
  gap: 8px;
  margin-top: 42px;
  & > * {
    height: 100%;
  }
  &__button {
    padding: 0 16px;
    border-radius: 8px;
  }
  &__save {
    background: var(--c-primary);
    color: var(--c-text-inversed);
  }
  &__close {
    border: 1px solid var(--c-dim);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
