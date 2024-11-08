// Интерфейс, описывающий структуру данных пользователя
export interface User {
  id: number
  username: string
  email: string
  registration_date: string
  rating: number
}

// Тип для полей сортировки пользователей
export type SortField = keyof User

// Тип для направления сортировки
export type SortOrder = 'asc' | 'desc'
