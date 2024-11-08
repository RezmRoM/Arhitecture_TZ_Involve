import { ref, Ref } from 'vue'
import { User } from '@/entities/user/model/types'
import {userService}  from '@/entities/user/api/user-service'

export function useUsers() {
  // Состояние для хранения списка пользователей, индикатора загрузки и ошибок
  const users: Ref<User[]> = ref([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // Функция для загрузки пользователей
  const fetchUsers = async () => {
    isLoading.value = true
    error.value = null
    try {
      users.value = await userService.getUsers()
    } catch (err) {
      error.value = 'Ошибка при загрузке пользователей'
      console.error('Ошибка при загрузке пользователей:', err)
    } finally {
      isLoading.value = false
    }
  }

  // Функция для удаления пользователя (имитация)
  const deleteUser = (userId: number) => {
    users.value = users.value.filter(user => user.id !== userId)
    // В реальном приложении здесь был бы вызов API для удаления пользователя
  }

  return {
    users,
    isLoading,
    error,
    fetchUsers,
    deleteUser
  }}
