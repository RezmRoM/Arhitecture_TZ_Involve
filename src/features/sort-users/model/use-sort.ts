import { ref, computed, Ref } from 'vue'
import { SortField, SortOrder } from '@/entities/user/model/types'

export function useSort<T extends Record<SortField, string | number>>(items: Ref<T[]>) {
  // Состояние для хранения текущего поля и порядка сортировки
  const sortBy = ref<SortField | null>(null)
  const sortOrder = ref<SortOrder>('asc')

  // Функция для переключения сортировки
  const toggleSort = (field: SortField) => {
    if (sortBy.value === field) {
      // Если поле то же, меняем порядок сортировки
      sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
    } else {
      // Если поле новое, устанавливаем его и сбрасываем порядок
      sortBy.value = field
      sortOrder.value = 'asc'
    }
  }

  // Вычисляемое свойство для сортировки элементов
  const sortedItems = computed(() => {
    if (!sortBy.value || !Array.isArray(items.value)) return items.value

    return [...items.value].sort((a, b) => {
      const aValue = a[sortBy.value!]
      const bValue = b[sortBy.value!]
      if (aValue < bValue) return sortOrder.value === 'asc' ? -1 : 1
      if (aValue > bValue) return sortOrder.value === 'asc' ? 1 : -1
      return 0
    })
  })

  return {
    sortBy,
    sortOrder,
    toggleSort,
    sortedItems
  }
}