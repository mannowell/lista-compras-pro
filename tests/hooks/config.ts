import { vi } from 'vitest';

// Configuração de mocks para testes de hooks
vi.mock('@/services/api', () => ({
  default: {
    get: vi.fn(),
    post: vi.fn(),
    put: vi.fn(),
    delete: vi.fn(),
    patch: vi.fn()
  }
}));

// Mock para o Vue Router
vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
  useRouter: vi.fn(() => ({
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    go: vi.fn(),
    currentRoute: { value: { path: '/', name: 'Home' } }
  }))
}));

// Mock para o Pinia
vi.mock('pinia', () => ({
  defineStore: vi.fn((id, setup) => setup()),
  createPinia: vi.fn(() => ({
    install: vi.fn()
  })),
  storeToRefs: vi.fn(store => {
    const refs: Record<string, { value: unknown }> = {};
    Object.keys(store).forEach(key => {
      refs[key] = { value: (store as Record<string, unknown>)[key] };
    })

    return refs;
  })
}));

// Mock para o Capacitor
vi.mock('@capacitor/core', () => ({
  Capacitor: {
    isNativePlatform: () => false,
    getPlatform: () => 'web',
    isPluginAvailable: () => true,
    platform: 'web'
  }
}));

// Configuração de variáveis de ambiente para testes de hooks
process.env.VITE_APP_NAME = 'App Mercado';
process.env.VITE_APP_VERSION = '1.0.0';
process.env.VITE_API_BASE_URL = 'http://localhost:3000/api';
process.env.VITE_ENABLE_MOCKS = 'true';
