import ru from '@/data/translations'

export function $t(key) {
  return ru[key] ?? key
}
