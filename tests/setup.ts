// Importa as configurações globais para os testes
import { vi, beforeAll, afterEach, afterAll } from 'vitest'
import { config } from '@vue/test-utils'
import { setupCapacitorMocks } from './mocks/capacitor'
import { setupRouterMocks } from './mocks/router'
import { setupPiniaMocks } from './mocks/pinia'
import { setupIonicMocks } from './mocks/ionic'

// Configura o Vue Test Utils
config.global = {
  ...config.global,
  plugins: [],
  components: {},
  directives: {},
  mocks: {},
  stubs: {},
  provide: {}
}

// Configura mocks globais
vi.mock('@/services/api', () => ({
  default: {
    get: vi.fn(),
    post: vi.fn(),
    put: vi.fn(),
    delete: vi.fn(),
    patch: vi.fn()
  }
}))

// Configura mocks para o Capacitor
setupCapacitorMocks()

// Configura mocks para o Vue Router
setupRouterMocks()

// Configura mocks para o Pinia
setupPiniaMocks()

// Configura mocks para o Ionic
setupIonicMocks()

// Configurações adicionais para os testes
beforeAll(() => {
  // Configurações que devem ser executadas antes de todos os testes
  // Por exemplo, configurar o localStorage mockado
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn()
    },
    writable: true
  })

  // Configura o matchMedia para testes
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn()
    }))
  })
})

afterEach(() => {
  // Limpa todos os mocks após cada teste
  vi.clearAllMocks()

  // Limpa o localStorage mockado
  window.localStorage.clear()
})

afterAll(() => {
  // Limpeza final após todos os testes
  vi.restoreAllMocks()
})
