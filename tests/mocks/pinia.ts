import { vi } from 'vitest';

export function setupPiniaMocks() {
  vi.mock('pinia', async () => {
    const actual = await vi.importActual('pinia');

    return {
      ...actual,
      createPinia: vi.fn(() => ({
        install: vi.fn(),
        use: vi.fn(),
        state: { value: {} },
        _p: [],
        _a: null,
        _e: { scope: { _s: new Map() } },
        _s: new Map(),
        _testing: true
      })),
      defineStore: vi.fn((id, setup) => {
        const store = setup();
        return () => store;
      }),
      setActivePinia: vi.fn(),
      getActivePinia: vi.fn(() => ({
        _p: [],
        _a: null,
        _e: { scope: { _s: new Map() } },
        _s: new Map(),
        _testing: true
      })),
      storeToRefs: vi.fn(store => {
        const refs: Record<string, { value: unknown }> = {};
        Object.keys(store).forEach(key => {
          refs[key] = { value: (store as Record<string, unknown>)[key] };
        })

        return refs;
      }),
      mapStores: vi.fn((...stores) => {
        const mappedStores: Record<string, () => unknown> = {};
        stores.forEach(store => {
          mappedStores[`${store}Store`] = function () {
            // @ts-ignore
            return this.$pinia._s.get(store);
          };
        });
        return mappedStores;
      }),
      mapState: vi.fn((useStore, keysOrMapper) => {
        const mapper = Array.isArray(keysOrMapper)
          ? keysOrMapper.reduce(
              (reduced, key) => {
                reduced[key] = key;
                return reduced;
              },
              {} as Record<string, string>
            )
          : keysOrMapper;

        return Object.entries(mapper).reduce(
          (reduced, [key, value]) => {
            // @ts-ignore
            reduced[key] = function mappedState() {
              // @ts-ignore
              const store = useStore(this.$pinia);
              return typeof value === 'function'
                ? // @ts-ignore
                  value.call(
                    this,
                    store,
                    (this.$pinia.state as Record<string, { value: unknown }>).value[store.$id]
                  )
                : // @ts-ignore
                  (store as Record<string, unknown>)[value];
            };

            return reduced;
          },
          {} as Record<string, () => unknown>
        );
      }),
      mapWritableState: vi.fn((useStore, keysOrMapper) => {
        return Object.entries(
          // @ts-ignore
          setupPiniaMocks().mapState(useStore, keysOrMapper)
        ).reduce(
          (reduced, [key, value]) => {
            // @ts-ignore
            const originalFn = value as () => unknown;
            reduced[key] = {
              get() {
                // @ts-ignore
                return originalFn.call(this);
              },
              set(val: unknown) {
                // @ts-ignore
                const store = useStore(this.$pinia);
                const storeKey = (keysOrMapper as Record<string, string>)[key] || key;

                (store as Record<string, unknown>)[storeKey] = val;
              },
            }

            return reduced;
          },
          {} as Record<string, { get: () => unknown; set: (val: unknown) => void }>
        );
      }),
      mapActions: vi.fn((useStore, keysOrMapper) => {
        const mapper = Array.isArray(keysOrMapper)
          ? keysOrMapper.reduce(
              (reduced, key) => {
                reduced[key] = key;
                return reduced;
              },
              {} as Record<string, string>
            )
          : keysOrMapper;

        return Object.entries(mapper).reduce(
          (reduced, [key, value]) => {
            // @ts-ignore
            reduced[key] = function mappedAction(...args: unknown[]) {
              // @ts-ignore
              const store = useStore(this.$pinia);
              // @ts-ignore
              const action = (store as Record<string, (...args: unknown[]) => unknown>)[value];
              return action.apply(this, [store, ...args]);
            };

            return reduced;
          },
          {} as Record<string, (...args: unknown[]) => unknown>
        );
      }),
      mapGetters: vi.fn((useStore, keysOrMapper) => {
        // @ts-ignore
        return setupPiniaMocks().mapState(useStore, keysOrMapper);
      })
    };
  })
}
