import { CapacitorConfig } from '@capacitor/cli';
import { KeyboardResize, KeyboardStyle } from '@capacitor/keyboard';

// Configuração de PRODUÇÃO do Capacitor para Lista Compras Pro
const config: CapacitorConfig = {
  appId: 'com.mannowell.listacompraspro',
  appName: 'Lista Compras Pro',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    iosScheme: 'https',
    cleartext: false,
    allowNavigation: []
  },
  ios: {
    contentInset: 'automatic',
    allowsLinkPreview: false,
    scrollEnabled: true,
    hideLogs: true,
    privacyManifest: {
      NSPhotoLibraryUsageDescription: 'Permitir acesso à galeria para adicionar imagens aos produtos',
      NSCameraUsageDescription: 'Permitir acesso à câmera para tirar fotos dos produtos',
      NSLocationWhenInUseUsageDescription: 'Permitir acesso à localização para encontrar mercados próximos',
      NSContactsUsageDescription: 'Permitir acesso aos contatos para compartilhar listas com a família',
      NSAppleMusicUsageDescription: 'Permitir acesso à mídia para sons de notificação',
      NSMicrophoneUsageDescription: 'Permitir acesso ao microfone para lembretes de voz',
      NSMotionUsageDescription: 'Permitir acesso ao sensor de movimento para acessibilidade'
    }
  },
  android: {
    allowMixedContent: false,
    buildOptions: {
      keystorePath: 'release.keystore',
      keystoreAlias: 'lista-compras-pro',
      releaseType: 'AAB',
      signingType: 'jarsigner'
    }
  },
  plugins: {
    CapacitorSQLite: {
      iosDatabaseLocation: 'Library/CapacitorDatabase',
      iosIsEncryption: true,
      iosKeychainPrefix: 'lista_compras_pro',
      iosBiometric: {
        biometricAuth: true,
        biometricTitle: 'Autenticação Biométrica',
        biometricSubTitle: 'Faça login usando biometria'
      },
      androidIsEncryption: true,
      androidBiometric: {
        biometricAuth: true,
        biometricTitle: 'Autenticação Biométrica',
        biometricSubTitle: 'Faça login usando biometria'
      },
      electronWindowsLocation: 'C:\\ProgramData\\CapacitorDatabases',
      electronMacLocation: '/Volumes/Development_Lacie/Development/Databases',
      electronLinuxLocation: 'Databases',
      version: 1
    },
    Keyboard: {
      resize: KeyboardResize.Body,
      resizeOnFullScreen: true,
      style: KeyboardStyle.Dark
    },
    StatusBar: {
      backgroundColor: '#1976d2',
      style: 'DARK'
    },
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
};

export default config;