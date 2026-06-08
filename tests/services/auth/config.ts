import { vi } from 'vitest'

// Configuração de mocks para testes de autenticação
const mockAuth = {
  currentUser: {
    uid: 'test-uid',
    email: 'test@example.com',
    emailVerified: true,
    getIdToken: vi.fn(() => Promise.resolve('test-token')),
    getIdTokenResult: vi.fn(() => Promise.resolve({ claims: {} })),
    reload: vi.fn(() => Promise.resolve())
  },
  signInWithEmailAndPassword: vi.fn(),
  createUserWithEmailAndPassword: vi.fn(),
  signInWithPopup: vi.fn(),
  signInWithRedirect: vi.fn(),
  signOut: vi.fn(),
  sendPasswordResetEmail: vi.fn(),
  confirmPasswordReset: vi.fn(),
  verifyPasswordResetCode: vi.fn(),
  onAuthStateChanged: vi.fn(),
  onIdTokenChanged: vi.fn()
}

// Mock para o Firebase Auth
vi.mock('@/firebase', () => ({
  auth: {
    ...mockAuth,
    currentUser: mockAuth.currentUser
  },
  googleAuthProvider: {
    addScope: vi.fn(),
    setCustomParameters: vi.fn()
  },
  facebookAuthProvider: {
    addScope: vi.fn(),
    setCustomParameters: vi.fn()
  },
  getAuth: vi.fn(() => mockAuth),
  signInWithEmailAndPassword: mockAuth.signInWithEmailAndPassword,
  createUserWithEmailAndPassword: mockAuth.createUserWithEmailAndPassword,
  signInWithPopup: mockAuth.signInWithPopup,
  signInWithRedirect: mockAuth.signInWithRedirect,
  signOut: mockAuth.signOut,
  sendPasswordResetEmail: mockAuth.sendPasswordResetEmail,
  confirmPasswordReset: mockAuth.confirmPasswordReset,
  verifyPasswordResetCode: mockAuth.verifyPasswordResetCode,
  onAuthStateChanged: mockAuth.onAuthStateChanged,
  onIdTokenChanged: mockAuth.onIdTokenChanged
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

// Configuração de variáveis de ambiente para testes de autenticação
process.env.VITE_APP_NAME = 'App Mercado'
process.env.VITE_APP_VERSION = '1.0.0'
process.env.VITE_API_BASE_URL = 'http://localhost:3000/api'
process.env.VITE_ENABLE_MOCKS = 'true'
process.env.VITE_FIREBASE_API_KEY = 'test-api-key'
process.env.VITE_FIREBASE_AUTH_DOMAIN = 'test.firebaseapp.com'
process.env.VITE_FIREBASE_PROJECT_ID = 'test-project'
process.env.VITE_FIREBASE_STORAGE_BUCKET = 'test.appspot.com'
process.env.VITE_FIREBASE_MESSAGING_SENDER_ID = '1234567890'
process.env.VITE_FIREBASE_APP_ID = '1:1234567890:web:abcdef123456'
process.env.VITE_FIREBASE_MEASUREMENT_ID = 'G-ABCDEF1234'

// Exporta o mock de autenticação para uso nos testes
export { mockAuth }
