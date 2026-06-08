import { vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

// Configuração de mocks para testes de estado com Pinia
let mockPinia = createPinia()

setActivePinia(mockPinia)

// Mock para o Pinia
vi.mock('pinia', async () => {
  const actual = await vi.importActual('pinia')

  return {
    ...actual,
    defineStore: vi.fn((id, setup) => {
      const store = setup()

      return () => store
    }),
    createPinia: vi.fn(() => mockPinia),
    setActivePinia: vi.fn(pinia => {
      mockPinia = pinia || createPinia()
    }),
    storeToRefs: vi.fn(store => {
      const refs: Record<string, { value: unknown }> = {}

      Object.keys(store).forEach(key => {
        refs[key] = { value: (store as Record<string, unknown>)[key] }
      })

      return refs
    })
  }
})

// Configuração de variáveis de ambiente para testes de estado
process.env.VITE_APP_NAME = 'App Mercado'
process.env.VITE_APP_VERSION = '1.0.0'
process.env.VITE_API_BASE_URL = 'http://localhost:3000/api'
process.env.VITE_ENABLE_MOCKS = 'true'

// Exporta o mock do Pinia para uso nos testes
export { mockPinia }
