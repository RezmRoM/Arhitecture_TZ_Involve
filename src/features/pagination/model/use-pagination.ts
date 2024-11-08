import { ref, computed, watchEffect, Ref } from 'vue'

export function usePagination<T>(items: Ref<T[]>, itemsPerPage: number) {
  // Текущая страница
  const currentPage = ref(1)

  // Вычисляем элементы для текущей страницы
  const paginatedItems = computed(() => {
    if (!Array.isArray(items.value)) return []
    const startIndex = (currentPage.value - 1) * itemsPerPage
    return items.value.slice(startIndex, startIndex + itemsPerPage)
  })

  // Вычисляем общее количество страниц
  const totalPages = computed(() => {
    if (!Array.isArray(items.value)) return 0
    return Math.ceil(items.value.length / itemsPerPage)
  })

  // Следим за изменением totalPages и корректируем currentPage
  watchEffect(() => {
    currentPage.value = Math.min(currentPage.value, Math.max(1, totalPages.value))
  })

  // Переход на следующую страницу
  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++
    }
  }

  // Переход на предыдущую страницу
  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--
    }
  }

  return {
    currentPage,
    paginatedItems,
    totalPages,
    nextPage,
    prevPage
  }
}
