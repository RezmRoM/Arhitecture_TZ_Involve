import axios from 'axios'
import { API_URL } from '@/shared/config/constants'

export const httpClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Добавляем перехватчики для обработки ошибок
httpClient.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error)
    return Promise.reject(error)
  }
) 