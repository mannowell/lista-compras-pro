import { vi } from 'vitest'

export function setupRouterMocks() {
  vi.mock('vue-router', async () => {
    const actual = await vi.importActual('vue-router')

    return {
      ...actual,
      useRouter: vi.fn(() => ({
        push: vi.fn(),
        replace: vi.fn(),
        go: vi.fn(),
        back: vi.fn(),
        forward: vi.fn(),
        beforeEach: vi.fn(),
        afterEach: vi.fn(),
        onError: vi.fn(),
        isReady: vi.fn(() => Promise.resolve()),
        currentRoute: {
          value: {
            path: '/',
            name: 'Home',
            params: {},
            query: {},
            hash: '',
            fullPath: '/',
            matched: [],
            meta: {},
            redirectedFrom: undefined
          }
        },
        options: {
          routes: []
        },
        resolve: vi.fn(to => ({
          href: to.path || '/',
          route: { path: to.path || '/', name: to.name || 'Home' }
        })),
        addRoute: vi.fn(),
        getRoutes: vi.fn(() => []),
        hasRoute: vi.fn(() => true),
        removeRoute: vi.fn(),
        install: vi.fn()
      })),
      useRoute: vi.fn(() => ({
        path: '/',
        name: 'Home',
        params: {},
        query: {},
        hash: '',
        fullPath: '/',
        matched: [],
        meta: {},
        redirectedFrom: undefined
      })),
      createRouter: vi.fn(() => ({
        push: vi.fn(),
        replace: vi.fn(),
        go: vi.fn(),
        back: vi.fn(),
        forward: vi.fn(),
        beforeEach: vi.fn(),
        afterEach: vi.fn(),
        onError: vi.fn(),
        isReady: vi.fn(() => Promise.resolve()),
        currentRoute: {
          value: {
            path: '/',
            name: 'Home'
          }
        },
        options: {
          routes: []
        },
        resolve: vi.fn(to => ({
          href: to.path || '/',
          route: { path: to.path || '/', name: to.name || 'Home' }
        })),
        addRoute: vi.fn(),
        getRoutes: vi.fn(() => []),
        hasRoute: vi.fn(() => true),
        removeRoute: vi.fn(),
        install: vi.fn()
      })),
      createWebHistory: vi.fn(),
      createWebHashHistory: vi.fn(),
      createMemoryHistory: vi.fn(),
      onBeforeRouteLeave: vi.fn(),
      onBeforeRouteUpdate: vi.fn(),
      RouterLink: {
        name: 'RouterLink',
        props: {
          to: {
            type: [String, Object],
            required: true
          },
          replace: Boolean,
          activeClass: String,
          exactActiveClass: String,
          custom: Boolean,
          ariaCurrentValue: {
            type: String,
            default: 'page'
          }
        },
        setup() {
          return () => null
        }
      },
      RouterView: {
        name: 'RouterView',
        setup() {
          return () => null
        }
      },
      useLink: vi.fn(() => ({
        route: { value: { path: '/', name: 'Home' } },
        href: { value: '/' },
        isActive: { value: false },
        isExactActive: { value: false },
        navigate: vi.fn()
      }))
    }
  })
}
