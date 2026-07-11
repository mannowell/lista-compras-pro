<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <template #start>
          <ion-buttons>
            <ion-menu-button />
          </ion-buttons>
        </template>
        <ion-title>Produtos</ion-title>
        <template #end>
          <ion-buttons>
            <ion-button @click="showAddModal">
              <ion-icon :icon="addOutline" />
            </ion-button>
          </ion-buttons>
        </template>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-searchbar
        v-model="searchTerm"
        :debounce="300"
        placeholder="Buscar produtos"
        @ion-input="handleSearch"
      />

      <ion-list>
        <ion-item-sliding v-for="produto in produtosFiltrados" :key="produto.id">
          <ion-item>
            <ion-label>
              <h2>{{ produto.nome }}</h2>
              <p v-if="produto.descricao">{{ produto.descricao }}</p>
            </ion-label>
          </ion-item>

          <ion-item-options side="end">
            <ion-item-option color="primary" @click="editProduto(produto)">
              Editar
            </ion-item-option>
            <ion-item-option color="danger" @click="deleteProduto(produto.id)">
              Excluir
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>

      <ion-modal :is-open="isModalOpen" @did-dismiss="closeModal">
        <ion-header>
          <ion-toolbar>
            <ion-title>{{ editMode ? 'Editar' : 'Novo' }} Produto</ion-title>
            <template #end>
              <ion-buttons>
                <ion-button @click="closeModal">Fechar</ion-button>
              </ion-buttons>
            </template>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <form @submit.prevent="saveProduto">
            <ion-item>
              <ion-label position="stacked">Nome</ion-label>
              <ion-input v-model="currentProduto.nome" required type="text" />
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Descrição</ion-label>
              <ion-textarea v-model="currentProdutoDescricao" :rows="3" />
            </ion-item>

            <div class="ion-padding">
              <ion-button expand="block" type="submit">
                {{ editMode ? 'Atualizar' : 'Adicionar' }}
              </ion-button>
            </div>
          </form>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonButtons,
  IonMenuButton,
  IonIcon,
  IonSearchbar,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonModal,
  IonInput,
  IonTextarea
} from '@ionic/vue'
import { addOutline } from 'ionicons/icons'
import { Produto } from '@/types'
import { DatabaseService } from '@/services/DatabaseService'

export default defineComponent({
  name: 'ProdutosView',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonButtons,
    IonMenuButton,
    IonIcon,
    IonSearchbar,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonModal,
    IonInput,
    IonTextarea
  },
  setup() {
    const db = DatabaseService.getInstance()
    const produtos = ref<Produto[]>([])
    const searchTerm = ref('')
    const isModalOpen = ref(false)
    const editMode = ref(false)
    const currentProduto = ref<Omit<Produto, 'createdAt' | 'updatedAt'>>({
      nome: '',
      descricao: ''
    })

    const loadProdutos = async () => {
      await db.init()
      produtos.value = await db.getProdutos()
    }

    const produtosFiltrados = computed(() => {
      if (!searchTerm.value) return produtos.value
      const term = searchTerm.value.toLowerCase()

      return produtos.value.filter(
        p =>
          p.nome.toLowerCase().includes(term) ||
          (p.descricao && p.descricao.toLowerCase().includes(term))
      )
    })

    const currentProdutoDescricao = computed({
      get() {
        return currentProduto.value.descricao || ''
      },
      set(value: string) {
        currentProduto.value.descricao = value
      }
    })

    const showAddModal = () => {
      editMode.value = false
      currentProduto.value = {
        nome: '',
        descricao: ''
      }
      isModalOpen.value = true
    }

    const editProduto = (produto: Produto) => {
      editMode.value = true
      currentProduto.value = {
        id: produto.id,
        nome: produto.nome,
        descricao: produto.descricao
      }
      isModalOpen.value = true
    }

    const closeModal = () => {
      isModalOpen.value = false
    }

    const saveProduto = async () => {
      if (currentProduto.value.nome) {
        await db.init()
        if (editMode.value && currentProduto.value.id) {
          await db.updateProduto(currentProduto.value)
        } else {
          await db.addProduto(currentProduto.value)
        }
        closeModal()
        loadProdutos()
      }
    }

    const deleteProduto = async (id?: number) => {
      if (id) {
        await db.deleteProduto(id)
        loadProdutos()
      }
    }

    const handleSearch = (event: CustomEvent) => {
      searchTerm.value = event.detail.value || ''
    }

    loadProdutos()

    return {
      produtos,
      searchTerm,
      isModalOpen,
      editMode,
      currentProduto,
      currentProdutoDescricao,
      produtosFiltrados,
      showAddModal,
      editProduto,
      closeModal,
      saveProduto,
      deleteProduto,
      handleSearch,
      addOutline
    }
  }
})
</script>
