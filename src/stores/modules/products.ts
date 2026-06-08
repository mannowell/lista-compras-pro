import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Product {
  id: string
  name: string
  description?: string
  barcode?: string
  category?: string
  unit?: string
  imageUrl?: string
  createdAt: string
  updatedAt: string
}

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const selectedProduct = ref<Product | null>(null)

  async function fetchProducts(): Promise<void> {
    try {
      loading.value = true
      error.value = null

      // TODO: Implementar chamada à API
      // Simulação de busca de produtos
      await new Promise(resolve => setTimeout(resolve, 500))

      products.value = [
        {
          id: '1',
          name: 'Arroz',
          category: 'Grãos',
          unit: 'kg',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: '2',
          name: 'Feijão',
          category: 'Grãos',
          unit: 'kg',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      ]
    } catch (err) {
      error.value = 'Falha ao carregar produtos'
      console.error('Error fetching products:', err)
    } finally {
      loading.value = false
    }
  }

  async function createProduct(
    product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<Product | null> {
    try {
      loading.value = true
      error.value = null

      // TODO: Implementar chamada à API
      await new Promise(resolve => setTimeout(resolve, 500))

      const newProduct: Product = {
        ...product,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }

      products.value.push(newProduct)

      return newProduct
    } catch (err) {
      error.value = 'Falha ao criar produto'
      console.error('Error creating product:', err)

      return null
    } finally {
      loading.value = false
    }
  }

  async function updateProduct(
    id: string,
    updates: Partial<Omit<Product, 'id' | 'createdAt'>>
  ): Promise<boolean> {
    try {
      loading.value = true
      error.value = null

      // TODO: Implementar chamada à API
      await new Promise(resolve => setTimeout(resolve, 500))

      const index = products.value.findIndex(p => p.id === id)

      if (index !== -1) {
        products.value[index] = {
          ...products.value[index],
          ...updates,
          updatedAt: new Date().toISOString()
        }

        return true
      }

      return false
    } catch (err) {
      error.value = 'Falha ao atualizar produto'
      console.error('Error updating product:', err)

      return false
    } finally {
      loading.value = false
    }
  }

  async function deleteProduct(id: string): Promise<boolean> {
    try {
      loading.value = true
      error.value = null

      // TODO: Implementar chamada à API
      await new Promise(resolve => setTimeout(resolve, 500))

      const index = products.value.findIndex(p => p.id === id)

      if (index !== -1) {
        products.value.splice(index, 1)

        return true
      }

      return false
    } catch (err) {
      error.value = 'Falha ao remover produto'
      console.error('Error deleting product:', err)

      return false
    } finally {
      loading.value = false
    }
  }

  function setSelectedProduct(product: Product | null): void {
    selectedProduct.value = product
  }

  return {
    products,
    loading,
    error,
    selectedProduct,
    fetchProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    setSelectedProduct
  }
})
