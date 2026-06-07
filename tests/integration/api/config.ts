import { vi } from 'vitest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Cria uma instância do axios e do mock adapter
const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

const mock = new MockAdapter(api, { onNoMatch: 'throwException' });

// Configuração de mocks para os testes de integração de API
const mockApiResponses = {
  // Autenticação
  login: {
    success: {
      user: {
        id: 'user-123',
        email: 'test@example.com',
        name: 'Test User',
        token: 'test-token-123'
      }
    },
    error: {
      error: 'Invalid credentials',
      message: 'Email or password is incorrect'
    }
  },

  // Produtos
  products: {
    list: {
      data: [
        { id: 'prod-1', name: 'Product 1', price: 10.99 },
        { id: 'prod-2', name: 'Product 2', price: 15.99 }
      ],
      pagination: {
        page: 1,
        limit: 10,
        total: 2,
        pages: 1
      }
    },
    detail: {
      id: 'prod-1',
      name: 'Product 1',
      description: 'Description of product 1',
      price: 10.99,
      category: 'Category 1',
      image: 'https://example.com/product1.jpg'
    }
  },

  // Listas de compras
  shoppingLists: {
    list: {
      data: [
        { id: 'list-1', name: 'Weekly Shopping', itemCount: 5 },
        { id: 'list-2', name: 'Monthly Shopping', itemCount: 10 }
      ]
    },
    detail: {
      id: 'list-1',
      name: 'Weekly Shopping',
      items: [
        { id: 'item-1', productId: 'prod-1', quantity: 2, checked: false },
        { id: 'item-2', productId: 'prod-2', quantity: 1, checked: true }
      ]
    },
  },
};

// Configura os mocks padrão
mock.onPost('/auth/login').reply(200, mockApiResponses.login.success);
mock.onGet('/products').reply(200, mockApiResponses.products.list);
mock.onGet(/\/products\/.*/).reply(200, mockApiResponses.products.detail);
mock.onGet('/shopping-lists').reply(200, mockApiResponses.shoppingLists.list);
mock.onGet(/\/shopping-lists\/.*/).reply(200, mockApiResponses.shoppingLists.detail);

// Configuração de variáveis de ambiente para testes de integração de API
process.env.VITE_APP_NAME = 'App Mercado';
process.env.VITE_APP_VERSION = '1.0.0';
process.env.VITE_API_BASE_URL = 'http://localhost:3000/api';
process.env.VITE_ENABLE_MOCKS = 'true';

// Exporta os mocks e a instância do axios para uso nos testes
export { api, mock, mockApiResponses };
