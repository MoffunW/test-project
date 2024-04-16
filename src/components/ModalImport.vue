<template>
  <TheModal
    @dragenter.prevent.stop="isFileDrag = true"
    @dragover.prevent.stop="isFileDrag = true"
    @dragleave.prevent.stop="isFileDrag = false"
    @dragend.prevent.stop="isFileDrag = false"
    @drop.prevent.stop="handleFileInput"
    @closeModal="emits('closeModal')"
    title="Импорт файла"
  >
    <div class="content">
      <input @change="handleFileInput" ref="fileInput" type="file" hidden />
      <div class="file">
        <input v-model="fileName" class="file__name" :class="{ dragover: isFileDrag }" />
        <button @click="$refs.fileInput.click()" class="file__select" v-ripple>Обзор</button>
      </div>
      <div class="checkboxes">
        <UICheckbox v-model="checkAddress" label="Проверить адрес" />
        <UICheckbox v-model="checkINN" label="Проверить ИНН" />
      </div>
    </div>
    <template #close>
      <button @click="emits('closeModal')" class="footer__button footer__close" v-ripple>
        Отмена
      </button>
    </template>
    <template #save>
      <button @click="importFile" class="footer__button footer__save" v-ripple>
        Импортировать
      </button>
    </template>
  </TheModal>
</template>

<script setup>
import { ref } from 'vue'
import TheModal from '@/components/TheModal.vue'
import UICheckbox from '@/components/UICheckbox.vue'

const checkAddress = ref(false)
const checkINN = ref(false)
const fileName = ref('')

const isFileDrag = ref(false)

function handleFileInput(event) {
  isFileDrag.value = false

  let file
  if (event.type === 'drop') file = event.dataTransfer.files[0]
  else file = event.target.files[0]

  if (!file) return

  fileName.value = file.name
}

const emits = defineEmits(['closeModal'])

async function importFile() {
  try {
    emits('closeModal')
  } catch (error) {
    console.error(error)
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 24px;
}
.file {
  display: flex;
  align-items: center;
  height: 48px;
  gap: 12px;

  & > * {
    border-radius: 8px;
    height: 100%;
    padding: 0 25px;
    cursor: pointer;
  }
  &__name {
    display: flex;
    align-items: center;
    background: var(--color-gray-lighter-1);
    flex-grow: 1;
    overflow: hidden;
    outline: none;
    & > span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      max-width: 100%;
    }
  }
  &__select {
    border: 1px solid var(--c-dim);
  }
}
.checkboxes {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  &__item {
    height: 20px;
  }
}
.footer {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 48px;
  gap: 8px;
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

.dragover {
  background: var(--c-primary);
  transition: 0.1s linear background;
}
</style>
