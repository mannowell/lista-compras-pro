import { config } from '@vue/test-utils'
import { vi } from 'vitest'

// Configuração global para testes de componentes de formulário
config.global = {
  ...config.global,
  plugins: [],
  components: {},
  directives: {},
  mocks: {},
  stubs: {},
  provide: {}
}

// Configuração de mocks para validação de formulários
vi.mock('@vuelidate/core', () => ({
  useVuelidate: vi.fn(() => ({
    value: {
      $touch: vi.fn(),
      $reset: vi.fn(),
      $validate: vi.fn(),
      $errors: [],
      $error: false,
      $invalid: false,
      $dirty: false,
      $anyDirty: false,
      $anyError: false,
      $pending: false
    }
  }))
}))

// Configuração de mocks para componentes de formulário do Ionic
vi.mock('@ionic/vue', () => ({
  IonInput: {
    name: 'IonInput',
    template: '<input v-bind="$attrs" v-on="$listeners">',
    inheritAttrs: false
  },
  IonTextarea: {
    name: 'IonTextarea',
    template: '<textarea v-bind="$attrs" v-on="$listeners"></textarea>',
    inheritAttrs: false
  },
  IonSelect: {
    name: 'IonSelect',
    template: '<select v-bind="$attrs" v-on="$listeners"><slot></slot></select>',
    inheritAttrs: false
  },
  IonSelectOption: {
    name: 'IonSelectOption',
    template: '<option v-bind="$attrs" v-on="$listeners"><slot></slot></option>',
    inheritAttrs: false
  },
  IonCheckbox: {
    name: 'IonCheckbox',
    template: '<input type="checkbox" v-bind="$attrs" v-on="$listeners">',
    inheritAttrs: false
  },
  IonToggle: {
    name: 'IonToggle',
    template: '<input type="checkbox" v-bind="$attrs" v-on="$listeners">',
    inheritAttrs: false
  },
  IonRadio: {
    name: 'IonRadio',
    template: '<input type="radio" v-bind="$attrs" v-on="$listeners">',
    inheritAttrs: false
  },
  IonDatetime: {
    name: 'IonDatetime',
    template: '<input type="datetime-local" v-bind="$attrs" v-on="$listeners">',
    inheritAttrs: false
  },
  IonRange: {
    name: 'IonRange',
    template: '<input type="range" v-bind="$attrs" v-on="$listeners">',
    inheritAttrs: false
  },
  IonItem: {
    name: 'IonItem',
    template: '<div><slot></slot></div>'
  },
  IonLabel: {
    name: 'IonLabel',
    template: '<label><slot></slot></label>'
  },
  IonNote: {
    name: 'IonNote',
    template: '<small class="note"><slot></slot></small>'
  }
}))

// Configuração de variáveis de ambiente para testes de componentes de formulário
process.env.VITE_APP_NAME = 'App Mercado'
process.env.VITE_APP_VERSION = '1.0.0'
process.env.VITE_API_BASE_URL = 'http://localhost:3000/api'
process.env.VITE_ENABLE_MOCKS = 'true'
