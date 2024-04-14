import {
  mdiDomain,
  mdiAccountMultipleOutline,
  mdiCreditCardOutline,
  mdiEmailMultipleOutline,
  mdiFileDocumentOutline,
  mdiCogOutline
} from '@mdi/js'

export const sidebarItems = [
  {
    icon: mdiDomain,
    title: 'Организации',
    route: 'organizations',
    children: []
  },

  {
    icon: mdiAccountMultipleOutline,
    title: 'Персонал',
    route: 'staff',
    children: [
      
      {
        title: 'Аналитика',
        route: 'analytics',
        name: 'analytics',
      },
      {
        title: 'Договоры',
        meta: 'Список договоров',
        route: 'agreements',
        name: 'agreements',
      },
      {
        title: 'Импорт',
        meta: 'Импорт файлов',
        name: 'import',
        route: 'import'
      }

    ]
  },
  {
    icon: mdiCreditCardOutline,
    title: 'Кредиты',
    route: 'loans',
    children: [
      {
        title: 'Аналитика',
        route: 'analytics',
        name: 'analytics',
      },
      {
        title: 'Договоры',
        meta: 'Список договоров',
        route: 'agreements',
        name: 'agreements',
      },
      {
        title: 'Импорт',
        meta: 'Импорт файлов',
        name: 'import',
        route: 'import'
      }
    ]
  },
  {
    icon: mdiEmailMultipleOutline,
    title: 'Корреспонденция',
    route: 'correspondence',
    children: [
      {
        title: 'Аналитика',
        route: 'analytics',
        name: 'analytics',
      },
      {
        title: 'Договоры',
        meta: 'Список договоров',
        route: 'agreements',
        name: 'agreements',
      },
      {
        title: 'Импорт',
        meta: 'Импорт файлов',
        name: 'import',
        route: 'import'
      }
    ]
  },
  {
    icon: mdiFileDocumentOutline,
    title: 'Цессия',
    route: 'cession',
    children: [
      {
        title: 'Аналитика',
        route: 'analytics',
        name: 'analytics',
      },
      {
        title: 'Договоры',
        meta: 'Список договоров',
        route: 'agreements',
        name: 'agreements',
      },
      {
        title: 'Импорт',
        meta: 'Импорт файлов',
        name: 'import',
        route: 'import'
      }
    ]
  },
  {
    icon: mdiCogOutline,
    title: 'Настройки',
    route: 'settings',
    children: []
  }
]

