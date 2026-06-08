import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Market {
  id: string
  name: string
  description?: string
  address: string
  phone?: string
  email?: string
  website?: string
  imageUrl?: string
  rating?: number
  createdAt: string
  updatedAt: string
}

export const useMarketsStore = defineStore('markets', () => {
  const markets = ref<Market[]>([])
  const selectedMarket = ref<Market | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchMarkets(): Promise<void> {
    try {
      loading.value = true
      error.value = null

      // TODO: Implementar chamada à API
      await new Promise(resolve => setTimeout(resolve, 500))

      // Dados de exemplo
      markets.value = [
        {
          id: '1',
          name: 'Supermercado Bom Preço',
          description: 'Tudo que você precisa com os melhores preços',
          address: 'Rua Exemplo, 123 - Centro',
          phone: '(11) 1234-5678',
          rating: 4.5,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: '2',
          name: 'Mercado do Zé',
          address: 'Av. Principal, 456 - Bairro Novo',
          phone: '(11) 8765-4321',
          rating: 4.0,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      ]
    } catch (err) {
      error.value = 'Falha ao carregar mercados'
      console.error('Error fetching markets:', err)
    } finally {
      loading.value = false
    }
  }

  async function fetchMarketById(id: string): Promise<Market | null> {
    try {
      loading.value = true
      error.value = null

      // TODO: Implementar chamada à API
      await new Promise(resolve => setTimeout(resolve, 500))

      const market = markets.value.find(m => m.id === id) || null

      if (market) {
        selectedMarket.value = { ...market }
      }

      return selectedMarket.value
    } catch (err) {
      error.value = 'Falha ao carregar o mercado'
      console.error('Error fetching market:', err)

      return null
    } finally {
      loading.value = false
    }
  }

  async function createMarket(
    market: Omit<Market, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<Market | null> {
    try {
      loading.value = true
      error.value = null

      // TODO: Implementar chamada à API
      await new Promise(resolve => setTimeout(resolve, 500))

      const newMarket: Market = {
        ...market,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }

      markets.value.push(newMarket)

      return newMarket
    } catch (err) {
      error.value = 'Falha ao criar mercado'
      console.error('Error creating market:', err)

      return null
    } finally {
      loading.value = false
    }
  }

  async function updateMarket(
    id: string,
    updates: Partial<Omit<Market, 'id' | 'createdAt'>>
  ): Promise<boolean> {
    try {
      loading.value = true
      error.value = null

      // TODO: Implementar chamada à API
      await new Promise(resolve => setTimeout(resolve, 500))

      const index = markets.value.findIndex(m => m.id === id)

      if (index !== -1) {
        markets.value[index] = {
          ...markets.value[index],
          ...updates,
          updatedAt: new Date().toISOString()
        }

        if (selectedMarket.value?.id === id) {
          selectedMarket.value = { ...markets.value[index] }
        }

        return true
      }

      return false
    } catch (err) {
      error.value = 'Falha ao atualizar o mercado'
      console.error('Error updating market:', err)

      return false
    } finally {
      loading.value = false
    }
  }

  async function deleteMarket(id: string): Promise<boolean> {
    try {
      loading.value = true
      error.value = null

      // TODO: Implementar chamada à API
      await new Promise(resolve => setTimeout(resolve, 500))

      const index = markets.value.findIndex(m => m.id === id)

      if (index !== -1) {
        markets.value.splice(index, 1)
        if (selectedMarket.value?.id === id) {
          selectedMarket.value = null
        }

        return true
      }

      return false
    } catch (err) {
      error.value = 'Falha ao remover o mercado'
      console.error('Error deleting market:', err)

      return false
    } finally {
      loading.value = false
    }
  }

  function setSelectedMarket(market: Market | null): void {
    selectedMarket.value = market ? { ...market } : null
  }

  return {
    markets,
    selectedMarket,
    loading,
    error,
    fetchMarkets,
    fetchMarketById,
    createMarket,
    updateMarket,
    deleteMarket,
    setSelectedMarket
  }
})
