import { config } from '@vue/test-utils'
import { vi } from 'vitest'

// Configuração global para testes de navegação
config.global = {
  ...config.global,
  plugins: [],
  components: {},
  directives: {},
  mocks: {},
  stubs: {},
  provide: {}
}

// Mock para o Vue Router
const mockRouter = {
  push: vi.fn(),
  replace: vi.fn(),
  back: vi.fn(),
  forward: vi.fn(),
  go: vi.fn(),
  currentRoute: {
    value: {
      path: '/',
      name: 'Home',
      params: {},
      query: {},
      hash: '',
      fullPath: '/',
      matched: [],
      meta: {},
      redirectedFrom: undefined
    }
  },
  resolve: vi.fn(to => ({
    href: to.path || '/',
    route: { path: to.path || '/', name: to.name || 'Home' }
  })),
  addRoute: vi.fn(),
  getRoutes: vi.fn(() => []),
  hasRoute: vi.fn(() => true),
  removeRoute: vi.fn(),
  beforeEach: vi.fn(),
  afterEach: vi.fn(),
  onError: vi.fn(),
  isReady: vi.fn(() => Promise.resolve()),
  install: vi.fn()
}

vi.mock('vue-router', () => ({
  useRoute: vi.fn(() => mockRouter.currentRoute.value),
  useRouter: vi.fn(() => mockRouter),
  createRouter: vi.fn(() => mockRouter),
  createWebHistory: vi.fn(),
  createWebHashHistory: vi.fn(),
  createMemoryHistory: vi.fn(),
  onBeforeRouteLeave: vi.fn(),
  onBeforeRouteUpdate: vi.fn(),
  RouterLink: {
    name: 'RouterLink',
    props: {
      to: {
        type: [String, Object],
        required: true
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: 'page'
      }
    },
    setup() {
      return () => null
    }
  },
  RouterView: {
    name: 'RouterView',
    setup() {
      return () => null
    }
  },
  useLink: vi.fn(() => ({
    route: { value: { path: '/', name: 'Home' } },
    href: { value: '/' },
    isActive: { value: false },
    isExactActive: { value: false },
    navigate: vi.fn()
  }))
}))

// Mock para o Ionic
vi.mock('@ionic/vue', () => ({
  IonRouterOutlet: {
    name: 'IonRouterOutlet',
    template: '<div><slot></slot></div>'
  },
  IonPage: {
    name: 'IonPage',
    template: '<div><slot></slot></div>'
  },
  IonHeader: {
    name: 'IonHeader',
    template: '<div><slot></slot></div>'
  },
  IonToolbar: {
    name: 'IonToolbar',
    template: '<div><slot></slot></div>'
  },
  IonTitle: {
    name: 'IonTitle',
    template: '<div><slot></slot></div>'
  },
  IonContent: {
    name: 'IonContent',
    template: '<div><slot></slot></div>'
  },
  IonButton: {
    name: 'IonButton',
    template: '<button><slot></slot></button>'
  },
  IonIcon: {
    name: 'IonIcon',
    template: '<span><slot></slot></span>'
  },
  menuController: {
    enable: vi.fn(),
    open: vi.fn(),
    close: vi.fn(),
    toggle: vi.fn(),
    isOpen: vi.fn(() => false)
  },
  useIonRouter: vi.fn(() => ({
    push: vi.fn(),
    back: vi.fn(),
    canGoBack: vi.fn(() => true),
    routeInfo: { value: { pathname: '/' } }
  }))
}))

// Configuração de variáveis de ambiente para testes de navegação
process.env.VITE_APP_NAME = 'App Mercado'
process.env.VITE_APP_VERSION = '1.0.0'
process.env.VITE_API_BASE_URL = 'http://localhost:3000/api'
process.env.VITE_ENABLE_MOCKS = 'true'

// Exporta o mock do router para uso nos testes
export { mockRouter }
