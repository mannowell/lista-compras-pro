import { vi } from 'vitest'

// Configuração de mocks para testes de composables
vi.mock('@/services/api', () => ({
  default: {
    get: vi.fn(),
    post: vi.fn(),
    put: vi.fn(),
    delete: vi.fn(),
    patch: vi.fn()
  }
}))

// Configuração de variáveis de ambiente para testes de composables
process.env.VITE_APP_NAME = 'App Mercado'
process.env.VITE_APP_VERSION = '1.0.0'
process.env.VITE_API_BASE_URL = 'http://localhost:3000/api'
process.env.VITE_ENABLE_MOCKS = 'true'

// Configuração de mocks para o Vue Router
vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
  useRouter: vi.fn(() => ({
    push: vi.fn()
  }))
}))

// Configuração de mocks para o Pinia
vi.mock('pinia', () => ({
  defineStore: vi.fn((id, setup) => setup()),
  createPinia: vi.fn(() => ({
    install: vi.fn()
  }))
}))
