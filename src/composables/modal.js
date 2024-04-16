import { ref } from 'vue'

export function useModal() {
  const isModal = ref(false)

  function openModal() {
    isModal.value = true
  }

  function closeModal() {
    isModal.value = false
  }

  return {
    isModal,
    openModal,
    closeModal
  }
}
