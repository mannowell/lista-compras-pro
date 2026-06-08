import { vi } from 'vitest'

// Mocks para notificações
const mockPushNotifications = {
  addListener: vi.fn(),
  register: vi.fn(),
  requestPermission: vi.fn(() => Promise.resolve({ granted: true }))
}

// Mocks para o Capacitor
vi.mock('@capacitor/push-notifications', () => ({
  PushNotifications: mockPushNotifications
}))

vi.mock('@capacitor/local-notifications', () => ({
  LocalNotifications: {
    schedule: vi.fn(),
    requestPermissions: vi.fn(() => Promise.resolve({ display: 'granted' }))
  }
}))

// Configuração de variáveis de ambiente
process.env.VITE_APP_NAME = 'App Mercado'
process.env.VITE_APP_VERSION = '1.0.0'
process.env.VITE_API_BASE_URL = 'http://localhost:3000/api'
process.env.VITE_ENABLE_MOCKS = 'true'

export { mockPushNotifications }
