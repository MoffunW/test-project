<template>
  <div class="wrapper">
    <table>
      <thead>
        <tr>
          <th v-for="header in headers">{{ header }}</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td v-for="key in COLUMN_ORDER">
            <span v-html="formatCell(key, item[key])"></span>
          </td>
          <td>
            <button @click="emit('downloadItem', item.id)" class="action" v-ripple>
              <v-icon color="var(--c-text)">{{ mdiDownload }}</v-icon>
            </button>
            <button @click="emit('deleteItem', item.id)" class="action" v-ripple>
              <v-icon color="var(--color-red)">{{ mdiTrashCanOutline }}</v-icon>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { $t } from '@/utils/language'
import { formatDate } from '@/utils/dates'
import { mdiDownload, mdiTrashCanOutline } from '@mdi/js'

const props = defineProps({
  items: Array,
  status: String
})

const emit = defineEmits(['deleteItem', 'downloadItem'])

const COLUMN_ORDER = ['id', 'file', 'status', 'created_at', 'credits_count', 'created_by']

const headers = ref([])
function getHeaders() {
  return COLUMN_ORDER.map((key) => $t(key))
}
function formatCell(key, value) {
  switch (key) {
    case 'created_at':
      return formatDate(value)
    case 'created_by':
      return `<span>${value.username}</span>`
    case 'file':
      return `<a class="link" href="${value.url}" target="_blank" style="  color: #4785ee; text-decoration: none; outline: none;">${value.name}</a>`
    case 'status':
      return `<span style="color: ${value.color}">${value.name}</span>`

    default:
      return value
  }
}
headers.value = getHeaders()
</script>

<style lang="scss" scoped>
.wrapper {
  max-height: calc(100vh - 320px);
  max-height: calc(100dvh - 320px);
  overflow: auto;
  margin-top: 20px;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #eaeaea;
  }
  &::-webkit-scrollbar-thumb {
    background: #d9d9d9;
  }
}
table {
  border-collapse: collapse;
  width: 100%;
  th {
    text-align: left;
    background: #fff;
  }
  th,
  td {
    border-top: 3px solid var(--c-background);
    padding: 5px 10px;
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-bottom-right-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  thead tr th {
    position: sticky;
    top: -3px;
  }
  thead {
    position: relative;
    background: #fff;
    height: 40px;
  }
  tbody {
    margin-top: 10px;
    &::before {
      line-height: 5px;
      content: '.';
      color: #fff;
      display: block;
    }

    tr {
      background: #fff;
      border-radius: 20px;
      height: 48px;
    }
  }
}
.action {
  outline: none;
  border-radius: 100%;
  padding: 3px;
  & i {
    position: static;
  }
}
</style>
