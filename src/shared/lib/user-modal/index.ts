import { ref, Ref } from 'vue'

// Компонент для управления состоянием модального окна
export function useModal<T>() {
  // Состояние открытия/закрытия модального окна
  const isOpen = ref(false)
  // Данные, связанные с модальным окном
  const modalData: Ref<T | null> = ref(null)

  // Открывает модальное окно и устанавливает данные
  const openModal = (data: T) => {
    modalData.value = data
    isOpen.value = true
  }

  // Закрывает модальное окно и очищает данные
  const closeModal = () => {
    isOpen.value = false
    modalData.value = null
  }

  return {
    isOpen,
    modalData,
    openModal,
    closeModal
  }
}
