export interface Produto {
  id?: number
  nome: string
  descricao?: string
  createdAt: Date
  updatedAt: Date
}

export interface Mercado {
  id?: number
  nome: string
  endereco?: string
  createdAt: Date
  updatedAt: Date
}

export interface ListaCompra {
  id?: number
  data: Date
  mercadoId: number
  status: 'pendente' | 'concluida'
  total?: number
  createdAt: Date
  updatedAt: Date
}

export interface ItemLista {
  id?: number
  listaId: number
  produtoId: number
  quantidade: number
  preco?: number
  comprado: boolean
  createdAt: Date
  updatedAt: Date
}

// Interface para o histórico de preços
export interface HistoricoPreco {
  id?: number
  produtoId: number
  mercadoId: number
  preco: number
  data: Date
  createdAt: Date
  updatedAt: Date
}
