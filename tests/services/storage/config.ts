import { vi } from 'vitest'

// Configuração de mocks para testes de armazenamento local
const mockStorage = {
  get: vi.fn(),
  set: vi.fn(),
  remove: vi.fn(),
  clear: vi.fn(),
  keys: vi.fn(),
  length: vi.fn()
}

// Mock para o Storage do Ionic
vi.mock('@ionic/storage', () => ({
  Storage: class {
    create = vi.fn(() => mockStorage)
  }
}))

// Mock para o Capacitor Storage
vi.mock('@capacitor/storage', () => ({
  Storage: {
    get: vi.fn(),
    set: vi.fn(),
    remove: vi.fn(),
    clear: vi.fn(),
    keys: vi.fn(),
    migrate: vi.fn()
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

// Configuração de variáveis de ambiente para testes de armazenamento
process.env.VITE_APP_NAME = 'App Mercado'
process.env.VITE_APP_VERSION = '1.0.0'
process.env.VITE_API_BASE_URL = 'http://localhost:3000/api'
process.env.VITE_ENABLE_MOCKS = 'true'

// Exporta o mock de armazenamento para uso nos testes
export { mockStorage }
