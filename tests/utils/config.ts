import { vi } from 'vitest'

// Configuração de mocks para testes de utilitários
vi.mock('@capacitor/core', () => ({
  Capacitor: {
    isNativePlatform: () => false,
    getPlatform: () => 'web',
    isPluginAvailable: () => true,
    platform: 'web'
  }
}))

// Mock para o SQLite
vi.mock('@capacitor-community/sqlite', () => ({
  SQLiteConnection: class {
    createConnection = vi.fn(() => ({
      open: vi.fn(),
      close: vi.fn(),
      execute: vi.fn(),
      query: vi.fn(),
      run: vi.fn()
    }))
  }
}))

// Mock para o Storage do Ionic
vi.mock('@ionic/storage', () => ({
  Storage: class {
    create = vi.fn(() => ({
      get: vi.fn(),
      set: vi.fn(),
      remove: vi.fn(),
      clear: vi.fn(),
      keys: vi.fn(),
      length: vi.fn()
    }))
  }
}))

// Configuração de variáveis de ambiente para testes de utilitários
process.env.VITE_APP_NAME = 'App Mercado'
process.env.VITE_APP_VERSION = '1.0.0'
process.env.VITE_API_BASE_URL = 'http://localhost:3000/api'
process.env.VITE_ENABLE_MOCKS = 'true'
