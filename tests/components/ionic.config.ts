import { config } from '@vue/test-utils'
import { vi } from 'vitest'

// Configuração global para testes de componentes do Ionic
config.global = {
  ...config.global,
  plugins: [],
  components: {},
  directives: {},
  mocks: {},
  stubs: {},
  provide: {}
}

// Mock para componentes básicos do Ionic
const mockIonicComponent = (name: string) => ({
  name,
  template: '<div><slot></slot></div>'
})

// Mock para componentes modais do Ionic
const mockIonicModal = (name: string) => ({
  name,
  template: '<div v-if="isOpen"><slot></slot></div>',
  props: ['isOpen']
})

// Configuração de mocks para componentes do Ionic
vi.mock('@ionic/vue', () => ({
  // Componentes básicos
  IonApp: mockIonicComponent('IonApp'),
  IonRouterOutlet: mockIonicComponent('IonRouterOutlet'),
  IonPage: mockIonicComponent('IonPage'),
  IonHeader: mockIonicComponent('IonHeader'),
  IonToolbar: mockIonicComponent('IonToolbar'),
  IonTitle: mockIonicComponent('IonTitle'),
  IonContent: mockIonicComponent('IonContent'),
  IonList: mockIonicComponent('IonList'),
  IonItem: mockIonicComponent('IonItem'),
  IonLabel: mockIonicComponent('IonLabel'),
  IonButton: { ...mockIonicComponent('IonButton'), template: '<button><slot></slot></button>' },
  IonIcon: { ...mockIonicComponent('IonIcon'), template: '<span><slot></slot></span>' },

  // Componentes modais
  IonLoading: mockIonicModal('IonLoading'),
  IonToast: mockIonicModal('IonToast'),
  IonAlert: mockIonicModal('IonAlert'),
  IonActionSheet: mockIonicModal('IonActionSheet'),
  IonModal: mockIonicModal('IonModal'),
  IonPopover: mockIonicModal('IonPopover'),

  // Controladores
  menuController: {
    enable: vi.fn(),
    open: vi.fn(),
    close: vi.fn(),
    toggle: vi.fn(),
    isOpen: vi.fn(() => false)
  },
  alertController: {
    create: vi.fn(() => Promise.resolve({ present: vi.fn() }))
  },
  loadingController: {
    create: vi.fn(() => Promise.resolve({ present: vi.fn(), dismiss: vi.fn() }))
  },
  toastController: {
    create: vi.fn(() => Promise.resolve({ present: vi.fn() }))
  },
  actionSheetController: {
    create: vi.fn(() => Promise.resolve({ present: vi.fn() }))
  },
  modalController: {
    create: vi.fn(() => Promise.resolve({ present: vi.fn(), dismiss: vi.fn() }))
  },
  popoverController: {
    create: vi.fn(() => Promise.resolve({ present: vi.fn(), dismiss: vi.fn() }))
  }
}))

// Mock para ionicons
vi.mock('ionicons/icons', () => ({
  addIcons: vi.fn(),
  arrowBackOutline: 'arrow-back-outline',
  menuOutline: 'menu-outline',
  closeOutline: 'close-outline',
  searchOutline: 'search-outline',
  addOutline: 'add-outline',
  removeOutline: 'remove-outline',
  trashOutline: 'trash-outline',
  createOutline: 'create-outline',
  saveOutline: 'save-outline',
  closeCircleOutline: 'close-circle-outline',
  checkmarkCircleOutline: 'checkmark-circle-outline',
  alertCircleOutline: 'alert-circle-outline',
  informationCircleOutline: 'information-circle-outline',
  warningOutline: 'warning-outline',
  helpCircleOutline: 'help-circle-outline',
  homeOutline: 'home-outline',
  listOutline: 'list-outline',
  cartOutline: 'cart-outline',
  personOutline: 'person-outline',
  settingsOutline: 'settings-outline',
  logOutOutline: 'log-out-outline',
  logInOutline: 'log-in-outline',
  personAddOutline: 'person-add-outline',
  mailOutline: 'mail-outline',
  lockClosedOutline: 'lock-closed-outline',
  eyeOutline: 'eye-outline',
  eyeOffOutline: 'eye-off-outline',
  starOutline: 'star-outline',
  starHalfOutline: 'star-half-outline',
  starSharp: 'star-sharp',
  starHalfSharp: 'star-half-sharp',
  star: 'star',
  starHalf: 'star-half'
}))
