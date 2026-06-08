/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('ion-')
        }
      }
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    include: ['**/*.spec.ts', '**/*.spec.tsx'],
    exclude: ['**/node_modules/**', '**/e2e/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage/unit',
      exclude: [
        '**/node_modules/**',
        '**/tests/**',
        '**/*.d.ts',
        '**/types/**',
        '**/main.ts',
        '**/vite.config.ts',
        '**/vitest.config.ts',
        '**/capacitor.config.ts',
        '**/capacitor.prod.ts',
        '**/src/App.vue',
        '**/src/main.ts',
        '**/src/router/**',
        '**/src/stores/**',
        '**/src/plugins/**',
        '**/src/theme/**',
        '**/src/assets/**',
        '**/src/types/**',
        '**/src/utils/**',
        '**/src/composables/**',
        '**/src/layouts/**',
        '**/src/views/**',
        '**/src/components/**',
        '**/src/services/**',
        '**/src/mocks/**',
        '**/src/__tests__/**',
        '**/src/__mocks__/**'
      ],
      all: true,
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80
    },
    environmentOptions: {
      jsdom: {
        url: 'http://localhost:3000'
      }
    },
    mockReset: true,
    clearMocks: true,
    restoreMocks: true,
    testTimeout: 10000,
    hookTimeout: 10000,
    deps: {
      inline: ['@ionic/vue', '@ionic/vue-router', '@ionic/core']
    },
    server: {
      deps: {
        inline: ['@ionic/vue', '@ionic/vue-router', '@ionic/core']
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./node_modules', import.meta.url)),
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  },
  define: {
    'import.meta.vitest': 'undefined',
    __VUE_OPTIONS_API__: 'true',
    __VUE_PROD_DEVTOOLS__: 'false'
  }
})
