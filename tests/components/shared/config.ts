import { config } from '@vue/test-utils'
import { vi } from 'vitest'

// Configuração global para testes de componentes compartilhados
config.global = {
  ...config.global,
  plugins: [],
  components: {},
  directives: {},
  mocks: {},
  stubs: {},
  provide: {}
}

// Configuração de mocks para testes de componentes compartilhados
vi.mock('@/services/api', () => ({
  default: {
    get: vi.fn(),
    post: vi.fn(),
    put: vi.fn(),
    delete: vi.fn(),
    patch: vi.fn()
  }
}))

// Mock para ícones
vi.mock('ionicons/icons', () => ({
  addIcons: vi.fn(),
  arrowBackOutline: 'arrow-back-outline',
  closeOutline: 'close-outline',
  searchOutline: 'search-outline',
  addOutline: 'add-outline',
  removeOutline: 'remove-outline',
  trashOutline: 'trash-outline',
  createOutline: 'create-outline',
  saveOutline: 'save-outline',
  checkmarkCircleOutline: 'checkmark-circle-outline',
  alertCircleOutline: 'alert-circle-outline',
  informationCircleOutline: 'information-circle-outline',
  warningOutline: 'warning-outline',
  helpCircleOutline: 'help-circle-outline',
  eyeOutline: 'eye-outline',
  eyeOffOutline: 'eye-off-outline',
  starOutline: 'star-outline',
  starHalfOutline: 'star-half-outline',
  starSharp: 'star-sharp',
  starHalfSharp: 'star-half-sharp',
  star: 'star',
  starHalf: 'star-half'
}))

// Configuração de variáveis de ambiente para testes de componentes compartilhados
process.env.VITE_APP_NAME = 'App Mercado'
process.env.VITE_APP_VERSION = '1.0.0'
process.env.VITE_API_BASE_URL = 'http://localhost:3000/api'
process.env.VITE_ENABLE_MOCKS = 'true'
