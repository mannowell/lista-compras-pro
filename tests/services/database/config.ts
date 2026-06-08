import { vi } from 'vitest'

// Configuração de mocks para testes do banco de dados SQLite
const mockDatabaseConnection = {
  open: vi.fn(),
  close: vi.fn(),
  execute: vi.fn(),
  query: vi.fn(),
  run: vi.fn(),
  isDBOpen: vi.fn(() => true),
  isDBExists: vi.fn(() => true),
  isTable: vi.fn(() => true),
  createSyncTable: vi.fn(),
  setSyncDate: vi.fn(),
  getSyncDate: vi.fn(),
  exportToJson: vi.fn(),
  deleteExportedRows: vi.fn(),
  addUpgradeStatement: vi.fn(),
  copyFromAssets: vi.fn(),
  isJsonValid: vi.fn(),
  importFromJson: vi.fn(),
  isDatabase: vi.fn(),
  isNCDatabase: vi.fn(),
  createDatabase: vi.fn(),
  isDatabaseEncrypted: vi.fn(),
  isInConfigEncryption: vi.fn(),
  isInConfigBiometricAuth: vi.fn(),
  isSecretStored: vi.fn(),
  setEncryptionSecret: vi.fn(),
  changeEncryptionSecret: vi.fn(),
  clearEncryptionSecret: vi.fn(),
  checkEncryptionSecret: vi.fn()
}

// Mock para o SQLite
vi.mock('@capacitor-community/sqlite', () => ({
  SQLiteConnection: class {
    createConnection = vi.fn(() => mockDatabaseConnection)
    checkConnectionsConsistency = vi.fn()
    isConnection = vi.fn()
    retrieveConnection = vi.fn()
    retrieveAllConnections = vi.fn()
    closeAllConnections = vi.fn()
    initWebStore = vi.fn()
    saveToStore = vi.fn()
    saveToLocalDisk = vi.fn()
    getFromLocalDiskToStore = vi.fn()
    getNCDatabasePath = vi.fn()
    isStoreOpen = vi.fn()
    isStoreExists = vi.fn()
    deleteStore = vi.fn()
  }
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

// Configuração de variáveis de ambiente para testes do banco de dados
process.env.VITE_APP_NAME = 'App Mercado'
process.env.VITE_APP_VERSION = '1.0.0'
process.env.VITE_API_BASE_URL = 'http://localhost:3000/api'
process.env.VITE_ENABLE_MOCKS = 'true'

// Exporta o mock da conexão para uso nos testes
export { mockDatabaseConnection }
