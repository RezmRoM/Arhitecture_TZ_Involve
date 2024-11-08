import { ref, computed, Ref } from 'vue'
import { User } from '@/entities/user/model/types'

export function useSearch(items: Ref<User[]>, searchFields: (keyof User)[]) {
  // Поисковый запрос
  const searchQuery = ref('')

  // Фильтрация элементов на основе поискового запроса
  const filteredItems = computed(() => {
    if (!searchQuery.value || !Array.isArray(items.value)) return items.value

    const query = searchQuery.value.toLowerCase()
    return items.value.filter(item =>
      searchFields.some(field =>
        String(item[field]).toLowerCase().includes(query)
      )
    )
  })

  return {
    searchQuery,
    filteredItems
  }
}
