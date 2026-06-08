import { vi } from 'vitest'

// Configuração de mocks para testes de serviços da API
const mockApiResponse = (data: any, status = 200, statusText = 'OK') => ({
  data,
  status,
  statusText,
  headers: {},
  config: {}
})

// Mock para o Axios
vi.mock('axios', () => ({
  default: {
    create: vi.fn(() => ({
      get: vi.fn(),
      post: vi.fn(),
      put: vi.fn(),
      delete: vi.fn(),
      patch: vi.fn(),
      interceptors: {
        request: { use: vi.fn(), eject: vi.fn() },
        response: { use: vi.fn(), eject: vi.fn() }
      }
    })),
    isAxiosError: vi.fn(error => error.isAxiosError === true)
  }
}))

// Mock para o Capacitor
vi.mock('@capacitor/core', () => ({
  Capacitor: {
    isNativePlatform: () => false,
    getPlatform: () => 'web',
    isPluginAvailable: () => true,
    platform: 'web'
  }
}))

// Configuração de variáveis de ambiente para testes de serviços da API
process.env.VITE_APP_NAME = 'App Mercado'
process.env.VITE_APP_VERSION = '1.0.0'
process.env.VITE_API_BASE_URL = 'http://localhost:3000/api'
process.env.VITE_ENABLE_MOCKS = 'true'

// Exporta utilitários para uso nos testes
export { mockApiResponse }
