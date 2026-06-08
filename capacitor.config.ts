import { CapacitorConfig } from '@capacitor/cli'
import { KeyboardResize, KeyboardStyle } from '@capacitor/keyboard'

// Configuração do Capacitor para Lista Compras Pro
const config: CapacitorConfig = {
  appId: 'com.mannowell.listacompraspro',
  appName: 'Lista Compras Pro',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    iosScheme: 'https',
    cleartext: true,
    allowNavigation: []
  },
  ios: {
    contentInset: 'automatic',
    allowsLinkPreview: false,
    scrollEnabled: true,
    hideLogs: false,
    // Configurações de privacidade para iOS (App Store)
    privacyManifest: {
      NSPhotoLibraryUsageDescription:
        'Permitir acesso à galeria para adicionar imagens aos produtos',
      NSCameraUsageDescription: 'Permitir acesso à câmera para tirar fotos dos produtos',
      NSLocationWhenInUseUsageDescription:
        'Permitir acesso à localização para encontrar mercados próximos',
      NSContactsUsageDescription:
        'Permitir acesso aos contatos para compartilhar listas com a família',
      NSAppleMusicUsageDescription: 'Permitir acesso à mídia para sons de notificação',
      NSMicrophoneUsageDescription: 'Permitir acesso ao microfone para lembretes de voz',
      NSMotionUsageDescription: 'Permitir acesso ao sensor de movimento para acessibilidade'
    }
  },
  android: {
    allowMixedContent: true,
    buildOptions: {
      keystorePath: 'release.keystore',
      keystoreAlias: 'lista-compras-pro',
      releaseType: 'AAB',
      signingType: 'jarsigner'
    }
  },
  plugins: {
    // SQLite - criptografia + localização do DB
    CapacitorSQLite: {
      iosDatabaseLocation: 'Library/CapacitorDatabase',
      iosIsEncryption: true,
      iosKeychainPrefix: 'lista_compras_pro',
      iosBiometric: {
        biometricAuth: false,
        biometricTitle: 'Autenticação Biométrica',
        biometricSubTitle: 'Faça login usando biometria'
      },
      androidIsEncryption: true,
      androidBiometric: {
        biometricAuth: false,
        biometricTitle: 'Autenticação Biométrica',
        biometricSubTitle: 'Faça login usando biometria'
      },
      electronWindowsLocation: 'C:\\ProgramData\\CapacitorDatabases',
      electronMacLocation: '/Volumes/Development_Lacie/Development/Databases',
      electronLinuxLocation: 'Databases',
      version: 1
    },
    // Teclado
    Keyboard: {
      resize: KeyboardResize.Body,
      resizeOnFullScreen: true,
      style: KeyboardStyle.Dark
    },
    // Status Bar
    StatusBar: {
      backgroundColor: '#1976d2',
      style: 'DARK'
    },
    // Splash Screen
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: '#ffffff',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true
    }
  }
}

export default config
