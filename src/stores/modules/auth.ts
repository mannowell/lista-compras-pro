import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface User {
  id: string
  name: string
  email: string
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isAuthenticated = ref(false)
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function login(email: string, password: string): Promise<boolean> {
    try {
      loading.value = true
      error.value = null

      // TODO: Implementar chamada à API de autenticação
      // Simulação de login bem-sucedido
      await new Promise(resolve => setTimeout(resolve, 1000))

      user.value = {
        id: '1',
        name: 'Usuário Teste',
        email
      }

      isAuthenticated.value = true

      return true
    } catch (err) {
      error.value = 'Falha na autenticação. Verifique suas credenciais.'
      console.error('Login error:', err)

      return false
    } finally {
      loading.value = false
    }
  }

  async function logout(): Promise<void> {
    // TODO: Implementar logout
    user.value = null
    isAuthenticated.value = false
  }

  return {
    user,
    isAuthenticated,
    loading,
    error,
    login,
    logout
  }
})
