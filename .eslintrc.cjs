module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  ignorePatterns: [
    'android/',
    'ios/',
    'node_modules/',
    'dist/',
    '*.legacy.*.js',
    '*.legacy.*.ts',
    '*.legacy.*.vue',
    'coverage/',
    '.git/',
    '.husky/',
    'vite.config.ts.timestamp-*',
    '*.log'
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue']
      },
      typescript: {}
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.vue'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.vue']
    }
  },
  rules: {
    // Regras básicas do JavaScript
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-redeclare': 'off',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-duplicate-imports': 'error',
    'prefer-template': 'error',
    'object-shorthand': 'error',
    'no-param-reassign': ['error', { props: true }],
    'prefer-arrow-callback': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }
    ],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'no-extra-semi': 'error',
    semi: ['error', 'never'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'comma-dangle': ['error', 'never'],
    'max-len': ['warn', { code: 100, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true }],

    // Regras do TypeScript
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-this-alias': 'off',

    // Regras do Vue
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-explicit-emits': 'error',
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'key',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          ['provide', 'inject'],
          'ROUTER_GUARDS',
          'layout',
          'middleware',
          'validate',
          'scrollToTop',
          'transition',
          'loading',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'emits',
          'setup',
          'asyncData',
          'data',
          'fetch',
          'head',
          'computed',
          'watch',
          'watchQuery',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError'
        ]
      }
    ],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ],
        alphabetical: false
      }
    ],
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/html-closing-bracket-spacing': 'error',
    'vue/html-indent': ['error', 2],
    'vue/html-quotes': ['error', 'double'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: 1
      }
    ],
    'vue/multiline-html-element-content-newline': 'error',
    'vue/mustache-interpolation-spacing': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/script-indent': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/this-in-template': 'error',
    'vue/v-bind-style': 'error',
    'vue/v-on-style': 'error',
    'vue/v-slot-style': 'error',
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true
      }
    ]
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-undef': 'off',
        'no-unused-vars': 'off'
      }
    },
    {
      files: ['*.vue'],
      rules: {
        'indent': 'off',
        'vue/script-indent': 'off'
      }
    },
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'no-console': 'off',
        'no-debugger': 'off'
      }
    }
  ]
}
