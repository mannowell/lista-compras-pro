<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <template #start>
          <ion-buttons>
            <ion-back-button default-href="/" />
          </ion-buttons>
        </template>
        <ion-title>Detalhes da Lista</ion-title>
        <template #end>
          <ion-buttons v-if="!todosItensComprados">
            <ion-button @click="concluirLista">
              <ion-icon :icon="checkmarkOutline" />
            </ion-button>
          </ion-buttons>
        </template>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item-sliding v-for="item in itens" :key="item.id">
          <ion-item>
            <template #start>
              <ion-checkbox v-model="item.comprado" @ion-change="toggleComprado(item)" />
            </template>
            <ion-label>
              <h2>{{ getProdutoNome(item.produtoId) }}</h2>
              <p>Quantidade: {{ item.quantidade }}</p>
            </ion-label>
          </ion-item>

          <ion-item-options side="end">
            <ion-item-option color="danger" @click="deleteItem(item.id!)">
              Excluir
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>

      <template #fixed>
        <ion-fab vertical="bottom" horizontal="end">
          <ion-fab-button @click="addItem">
            <ion-icon :icon="addOutline" />
          </ion-fab-button>
        </ion-fab>
      </template>

      <ion-modal v-model="isModalOpen">
        <ion-header>
          <ion-toolbar>
            <ion-title>Adicionar Item</ion-title>
            <template #end>
              <ion-buttons>
                <ion-button @click="closeModal">Cancelar</ion-button>
              </ion-buttons>
            </template>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <ion-list>
            <ion-item>
              <ion-label position="stacked">Produto</ion-label>
              <ion-select v-model="novoItem.produtoId" interface="action-sheet">
                <ion-select-option
                  v-for="produto in produtos"
                  :key="produto.id"
                  :value="produto.id"
                >
                  {{ produto.nome }}
                </ion-select-option>
              </ion-select>
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Quantidade</ion-label>
              <ion-input v-model="novoItem.quantidade" type="number" min="1" />
            </ion-item>
          </ion-list>

          <ion-button expand="block" :disabled="!novoItem.produtoId" @click="salvarItem">
            Adicionar
          </ion-button>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { addOutline, checkmarkOutline } from 'ionicons/icons'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonFab,
  IonFabButton,
  IonModal,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonButton
} from '@ionic/vue'
import { DatabaseService } from '@/services/DatabaseService'
import type { ItemLista, Produto } from '@/types'

export default defineComponent({
  name: 'DetalhesListaView',
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
    IonBackButton,
    IonIcon,
    IonCheckbox,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonFab,
    IonFabButton,
    IonModal,
    IonSelect,
    IonSelectOption,
    IonInput
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const db = DatabaseService.getInstance()
    const listaId = Number(route.params.id)

    const itens = ref<ItemLista[]>([])
    const produtos = ref<Produto[]>([])
    const isModalOpen = ref(false)
    const novoItem = ref({
      produtoId: 0,
      quantidade: 1,
      comprado: false
    })

    const produtosMap = ref<Map<number, Produto>>(new Map())

    const loadData = async () => {
      await db.init()
      itens.value = await db.getItensLista(listaId)
      produtos.value = await db.getProdutos()

      // Criar mapa de produtos para acesso rápido
      produtosMap.value = new Map(produtos.value.map(p => [p.id!, p]))
    }

    const getProdutoNome = (produtoId: number): string => {
      return produtosMap.value.get(produtoId)?.nome || 'Produto não encontrado'
    }

    const toggleComprado = async (item: ItemLista) => {
      if (item.id === undefined) return
      await db.updateItemLista({
        id: item.id,
        comprado: item.comprado
      })
      loadData()
    }

    const addItem = () => {
      isModalOpen.value = true
    }

    const closeModal = () => {
      isModalOpen.value = false
      novoItem.value = {
        produtoId: 0,
        quantidade: 1,
        comprado: false
      }
    }

    const salvarItem = async () => {
      if (novoItem.value.produtoId && novoItem.value.quantidade > 0) {
        await db.addItemLista({
          ...novoItem.value,
          listaId
        })
        closeModal()
        loadData()
      }
    }

    const deleteItem = async (itemId: number) => {
      await db.deleteItemLista(itemId)
      loadData()
    }

    const todosItensComprados = computed(() => {
      return itens.value.length > 0 && itens.value.every(item => item.comprado)
    })

    const concluirLista = async () => {
      await db.updateLista({
        id: listaId,
        status: 'concluida'
      })
      router.back()
    }

    onMounted(() => {
      loadData()
    })

    return {
      itens,
      produtos,
      isModalOpen,
      novoItem,
      addItem,
      closeModal,
      salvarItem,
      deleteItem,
      getProdutoNome,
      toggleComprado,
      todosItensComprados,
      concluirLista,
      addOutline,
      checkmarkOutline
    }
  }
})
</script>
