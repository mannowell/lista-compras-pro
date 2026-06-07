import { vi } from 'vitest'

export function setupCapacitorMocks() {
  // Mocks para o @capacitor/core
  vi.mock('@capacitor/core', () => ({
    Capacitor: {
      isNativePlatform: () => false,
      getPlatform: () => 'web',
      isPluginAvailable: () => true,
      platform: 'web'
    },
    registerPlugin: vi.fn()
  }));

  // Mocks para @capacitor/app
  vi.mock('@capacitor/app', () => ({
    App: {
      addListener: vi.fn(),
      removeAllListeners: vi.fn(),
      getState: vi.fn(() => Promise.resolve({ isActive: true })),
      exitApp: vi.fn()
    },
  }));

  // Mocks para @capacitor/haptics
  vi.mock('@capacitor/haptics', () => ({
    Haptics: {
      impact: vi.fn(),
      notification: vi.fn(),
      vibrate: vi.fn(),
      selectionStart: vi.fn(),
      selectionChanged: vi.fn(),
      selectionEnd: vi.fn()
    },
  }));

  // Mocks para @capacitor/keyboard
  vi.mock('@capacitor/keyboard', () => ({
    Keyboard: {
      setAccessoryBarVisible: vi.fn(),
      hide: vi.fn(),
      show: vi.fn(),
      setScroll: vi.fn(),
      setResizeMode: vi.fn(),
      setStyle: vi.fn(),
      addListener: vi.fn(),
      removeAllListeners: vi.fn()
    },
  }));

  // Mocks para @capacitor/status-bar
  vi.mock('@capacitor/status-bar', () => ({
    StatusBar: {
      setBackgroundColor: vi.fn(),
      setStyle: vi.fn(),
      setOverlaysWebView: vi.fn(),
      show: vi.fn(),
      hide: vi.fn(),
      getInfo: vi.fn(() => Promise.resolve({ visible: true, style: 'DARK' }))
    },
  }));

  // Mocks para @capacitor-community/sqlite
  vi.mock('@capacitor-community/sqlite', () => ({
    SQLiteConnection: class {
      createConnection = vi.fn(() => ({
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
        isDatabaseEncrypted: vi.fn(),
        isInConfigEncryption: vi.fn(),
        isInConfigBiometricAuth: vi.fn(),
        isSecretStored: vi.fn(),
        setEncryptionSecret: vi.fn(),
        changeEncryptionSecret: vi.fn(),
        clearEncryptionSecret: vi.fn(),
        checkEncryptionSecret: vi.fn(),
        deleteDatabase: vi.fn(),
        loadToStore: vi.fn(),
        saveToStore: vi.fn(),
        syncDate: vi.fn(),
        syncSchema: vi.fn()
      }));
      checkConnectionsConsistency = vi.fn();
      isConnection = vi.fn();
      retrieveConnection = vi.fn();
      retrieveAllConnections = vi.fn();
      closeAllConnections = vi.fn();
      initWebStore = vi.fn();
      saveToStore = vi.fn();
      saveToLocalDisk = vi.fn();
      getFromLocalDiskToStore = vi.fn();
      getNCDatabasePath = vi.fn();
      createConnection = vi.fn();
      closeAllConnections = vi.fn();
      addUpgradeStatement = vi.fn();
      copyFromAssets = vi.fn();
      isDatabase = vi.fn();
      isNCDatabase = vi.fn();
      isDatabaseEncrypted = vi.fn();
      isInConfigEncryption = vi.fn();
      isInConfigBiometricAuth = vi.fn();
      isSecretStored = vi.fn();
      setEncryptionSecret = vi.fn();
      changeEncryptionSecret = vi.fn();
      clearEncryptionSecret = vi.fn();
      checkEncryptionSecret = vi.fn();
      isStoreOpen = vi.fn();
      isStoreExists = vi.fn();
      deleteStore = vi.fn();
      isJsonValid = vi.fn();
      importFromJson = vi.fn();
      exportToJson = vi.fn();
      createSyncTable = vi.fn();
      setSyncDate = vi.fn();
      getSyncDate = vi.fn();
      addUpgradeStatement = vi.fn();
      copyFromAssets = vi.fn();
    },
    SQLiteDBConnection: class {},
    SQLiteHook: {
      addUpgradeStatement: vi.fn()
    },
    capSQLiteSet: [],
    capSQLiteChanges: {
      changes: {
        changes: 0,
        lastId: 0
      },
    },
    capSQLiteValues: {
      values: []
    },
    capEchoResult: {
      value: ''
    },
    capSQLiteResult: {
      result: false
    },
    capNCDatabasePathResult: {
      path: ''
    },
    capVersionUpgrade: {
      fromVersion: 1,
      toVersion: 2
    },
    capSQLiteVersionUpgrade: {
      fromVersion: 1,
      toVersion: 2,
      statement: ''
    },
    capSQLiteJson: {
      export: {},
      import: {}
    },
    capSQLiteSyncDate: {
      syncDate: 0
    },
    capSQLiteFromAssets: {
      overwrite: false
    },
    capSQLiteUrl: {
      url: ''
    },
    capSQLiteExecuteOptions: {
      transaction: false
    },
    capSQLiteRunOptions: {
      transaction: false
    },
    capSQLiteQueryOptions: {
      values: []
    },
    capSQLiteSetOptions: {
      returnMode: 'no'
    },
    capSQLiteImportOptions: {
      overwrite: false
    },
    capSQLiteExportOptions: {
      jsonexportmode: 'full'
    },
    capSQLiteUpgradeOptions: {
      upgrade: []
    },
    capSQLiteVersion: {
      version: 0
    },
  }));
}
