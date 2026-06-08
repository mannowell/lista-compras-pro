import { vi } from 'vitest'

// Configuração de mocks para testes de serviços
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

// Configuração de mocks para o Capacitor
vi.mock('@capacitor/core', () => ({
  Capacitor: {
    isNativePlatform: () => false,
    getPlatform: () => 'web'
  }
}))

// Configuração de variáveis de ambiente para testes de serviços
process.env.VITE_APP_NAME = 'App Mercado'
process.env.VITE_APP_VERSION = '1.0.0'
process.env.VITE_API_BASE_URL = 'http://localhost:3000/api'
process.env.VITE_ENABLE_MOCKS = 'true'
