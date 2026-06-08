import { vi } from 'vitest'

export function setupIonicMocks() {
  // Mock para @ionic/vue
  vi.mock('@ionic/vue', () => ({
    IonApp: { name: 'IonApp', template: '<div><slot></slot></div>' },
    IonRouterOutlet: { name: 'IonRouterOutlet', template: '<div><slot></slot></div>' },
    IonPage: { name: 'IonPage', template: '<div><slot></slot></div>' },
    IonContent: { name: 'IonContent', template: '<div><slot></slot></div>' },
    IonButton: { name: 'IonButton', template: '<button><slot></slot></button>' },
    IonIcon: { name: 'IonIcon', template: '<span><slot></slot></span>' },
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
}
