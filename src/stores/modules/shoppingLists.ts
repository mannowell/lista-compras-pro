import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface ShoppingListItem {
  id: string
  productId: string
  quantity: number
  price?: number
  checked: boolean
  notes?: string
}

export interface ShoppingList {
  id: string
  name: string
  description?: string
  marketId?: string
  items: ShoppingListItem[]
  createdAt: string
  updatedAt: string
  completedAt?: string
}

export const useShoppingListsStore = defineStore('shoppingLists', () => {
  const lists = ref<ShoppingList[]>([])
  const currentList = ref<ShoppingList | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchLists(): Promise<void> {
    try {
      loading.value = true
      error.value = null

      // TODO: Implementar chamada à API
      await new Promise(resolve => setTimeout(resolve, 500))

      lists.value = [
        {
          id: '1',
          name: 'Lista Semanal',
          description: 'Compras da semana',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          items: []
        }
      ]
    } catch (err) {
      error.value = 'Falha ao carregar listas'
      console.error('Error fetching shopping lists:', err)
    } finally {
      loading.value = false
    }
  }

  async function fetchListById(id: string): Promise<ShoppingList | null> {
    try {
      loading.value = true
      error.value = null

      // TODO: Implementar chamada à API
      await new Promise(resolve => setTimeout(resolve, 500))

      const list = lists.value.find(l => l.id === id) || null

      if (list) {
        currentList.value = { ...list }

        return currentList.value
      }

      return null
    } catch (err) {
      error.value = 'Falha ao carregar a lista'
      console.error('Error fetching shopping list:', err)

      return null
    } finally {
      loading.value = false
    }
  }

  async function createList(
    list: Omit<ShoppingList, 'id' | 'createdAt' | 'updatedAt' | 'items'>
  ): Promise<ShoppingList | null> {
    try {
      loading.value = true
      error.value = null

      // TODO: Implementar chamada à API
      await new Promise(resolve => setTimeout(resolve, 500))

      const newList: ShoppingList = {
        ...list,
        id: Date.now().toString(),
        items: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }

      lists.value.push(newList)

      return newList
    } catch (err) {
      error.value = 'Falha ao criar lista'
      console.error('Error creating shopping list:', err)

      return null
    } finally {
      loading.value = false
    }
  }

  async function updateList(id: string, updates: Partial<ShoppingList>): Promise<boolean> {
    try {
      loading.value = true
      error.value = null

      // TODO: Implementar chamada à API
      await new Promise(resolve => setTimeout(resolve, 500))

      const index = lists.value.findIndex(l => l.id === id)

      if (index !== -1) {
        lists.value[index] = {
          ...lists.value[index],
          ...updates,
          updatedAt: new Date().toISOString()
        }

        if (currentList.value?.id === id) {
          currentList.value = { ...lists.value[index] }
        }

        return true
      }

      return false
    } catch (err) {
      error.value = 'Falha ao atualizar a lista'
      console.error('Error updating shopping list:', err)

      return false
    } finally {
      loading.value = false
    }
  }

  async function deleteList(id: string): Promise<boolean> {
    try {
      loading.value = true
      error.value = null

      // TODO: Implementar chamada à API
      await new Promise(resolve => setTimeout(resolve, 500))

      const index = lists.value.findIndex(l => l.id === id)

      if (index !== -1) {
        lists.value.splice(index, 1)
        if (currentList.value?.id === id) {
          currentList.value = null
        }

        return true
      }

      return false
    } catch (err) {
      error.value = 'Falha ao remover a lista'
      console.error('Error deleting shopping list:', err)

      return false
    } finally {
      loading.value = false
    }
  }

  async function addItemToList(
    listId: string,
    item: Omit<ShoppingListItem, 'id' | 'checked'>
  ): Promise<boolean> {
    try {
      loading.value = true
      error.value = null

      // TODO: Implementar chamada à API
      await new Promise(resolve => setTimeout(resolve, 500))

      const listIndex = lists.value.findIndex(l => l.id === listId)

      if (listIndex !== -1) {
        const newItem: ShoppingListItem = {
          ...item,
          id: Date.now().toString(),
          checked: false
        }

        lists.value[listIndex].items.push(newItem)
        lists.value[listIndex].updatedAt = new Date().toISOString()

        if (currentList.value?.id === listId) {
          currentList.value.items = [...lists.value[listIndex].items]
          currentList.value.updatedAt = lists.value[listIndex].updatedAt
        }

        return true
      }

      return false
    } catch (err) {
      error.value = 'Falha ao adicionar item à lista'
      console.error('Error adding item to list:', err)

      return false
    } finally {
      loading.value = false
    }
  }

  async function updateListItem(
    listId: string,
    itemId: string,
    updates: Partial<ShoppingListItem>
  ): Promise<boolean> {
    try {
      loading.value = true
      error.value = null

      // TODO: Implementar chamada à API
      await new Promise(resolve => setTimeout(resolve, 500))

      const listIndex = lists.value.findIndex(l => l.id === listId)

      if (listIndex !== -1) {
        const itemIndex = lists.value[listIndex].items.findIndex(i => i.id === itemId)

        if (itemIndex !== -1) {
          lists.value[listIndex].items[itemIndex] = {
            ...lists.value[listIndex].items[itemIndex],
            ...updates
          }

          lists.value[listIndex].updatedAt = new Date().toISOString()

          if (currentList.value?.id === listId) {
            const currentItemIndex = currentList.value.items.findIndex(i => i.id === itemId)

            if (currentItemIndex !== -1) {
              currentList.value.items[currentItemIndex] = {
                ...currentList.value.items[currentItemIndex],
                ...updates
              }
              currentList.value.updatedAt = lists.value[listIndex].updatedAt
            }
          }

          return true
        }
      }

      return false
    } catch (err) {
      error.value = 'Falha ao atualizar o item da lista'
      console.error('Error updating list item:', err)

      return false
    } finally {
      loading.value = false
    }
  }

  async function removeItemFromList(listId: string, itemId: string): Promise<boolean> {
    try {
      loading.value = true
      error.value = null

      // TODO: Implementar chamada à API
      await new Promise(resolve => setTimeout(resolve, 500))

      const listIndex = lists.value.findIndex(l => l.id === listId)

      if (listIndex !== -1) {
        const itemIndex = lists.value[listIndex].items.findIndex(i => i.id === itemId)

        if (itemIndex !== -1) {
          lists.value[listIndex].items.splice(itemIndex, 1)
          lists.value[listIndex].updatedAt = new Date().toISOString()

          if (currentList.value?.id === listId) {
            const currentItemIndex = currentList.value.items.findIndex(i => i.id === itemId)

            if (currentItemIndex !== -1) {
              currentList.value.items.splice(currentItemIndex, 1)
              currentList.value.updatedAt = lists.value[listIndex].updatedAt
            }
          }

          return true
        }
      }

      return false
    } catch (err) {
      error.value = 'Falha ao remover o item da lista'
      console.error('Error removing item from list:', err)

      return false
    } finally {
      loading.value = false
    }
  }

  function setCurrentList(list: ShoppingList | null): void {
    currentList.value = list ? { ...list } : null
  }

  return {
    lists,
    currentList,
    loading,
    error,
    fetchLists,
    fetchListById,
    createList,
    updateList,
    deleteList,
    addItemToList,
    updateListItem,
    removeItemFromList,
    setCurrentList
  }
})
