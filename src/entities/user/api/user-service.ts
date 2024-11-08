import axios from 'axios'
import type { User } from '@/entities/user/model/types'

class UserService {
  private readonly API_URL = 'https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users'

  async getUsers(): Promise<User[]> {
    try {
      const response = await axios.get<User[]>(this.API_URL)
      return response.data
    } catch (error) {
      console.error('Error fetching users:', error)
      throw error
    }
  }

  async deleteUser(userId: number): Promise<boolean> {
    try {
      await axios.delete(`${this.API_URL}/${userId}`)
      return true
    } catch (error) {
      console.error('Error deleting user:', error)
      throw error
    }
  }

  async updateUser(userId: number, userData: Partial<User>): Promise<User> {
    try {
      const response = await axios.put<User>(`${this.API_URL}/${userId}`, userData)
      return response.data
    } catch (error) {
      console.error('Error updating user:', error)
      throw error
    }
  }
}

export const userService = new UserService()
