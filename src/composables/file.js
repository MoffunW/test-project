import { ref } from 'vue'

export function useFiles() {
  const isFileDrag = ref(false)
  const fileValue = ref(null)
  const fileName = ref('')

  function handleFileInput(event) {
    isFileDrag.value = false

    let file
    if (event.type === 'drop') file = event.dataTransfer.files[0]
    else file = event.target.files[0]

    if (!file) return

    fileName.value = file.name
    fileValue.value = file
  }

  return {
    handleFileInput,
    isFileDrag,
    fileName,
    fileValue
  }
}
