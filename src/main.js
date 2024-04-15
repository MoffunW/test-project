import '@/assets/main.scss'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

import vuetify from '@/plugins/vuetify'
import axios from 'axios'

import { SERVER_URL, USE_MOCK } from '@/config'

if (USE_MOCK) {
  import('@/utils/mockAdapter.js')
}
axios.defaults.baseURL = SERVER_URL

const app = createApp(App)

app.use(vuetify)
app.use(router)

app.mount('#app')
