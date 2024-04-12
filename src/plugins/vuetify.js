import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import { ru } from 'vuetify/locale'

const vuetify = createVuetify({
  components,
  directives,
  locale: {
    locale: 'ru',
    fallback: 'en',
    messages: { ru }
  },

  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases
    },
    sets: {
      mdi
    },
    iconfont: 'mdi'
  },
  defaults: {
    VBtn: {
      color: 'primary',
      ripple: true
    },
    VTextField: {
      color: 'primary',
      ripple: true
    },
    VCheckbox: {
      color: 'primary',
      ripple: true
    }
  }
})

export default vuetify
