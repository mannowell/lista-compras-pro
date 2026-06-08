<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <template #start>
          <ion-buttons>
            <ion-menu-button />
          </ion-buttons>
        </template>
        <ion-title>Mercados</ion-title>
        <template #end>
          <ion-buttons>
            <ion-button @click="showModal">
              <ion-icon :icon="addOutline" />
            </ion-button>
          </ion-buttons>
        </template>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item-sliding v-for="mercado in mercados" :key="mercado.id">
          <ion-item>
            <ion-label>
              <h2>{{ mercado.nome }}</h2>
              <p>{{ mercado.endereco || 'Sem endereço' }}</p>
            </ion-label>
          </ion-item>

          <ion-item-options side="end">
            <ion-item-option color="danger" @click="deleteMercado(mercado.id!)">
              Excluir
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>

      <ion-modal v-model="isModalOpen">
        <ion-header>
          <ion-toolbar>
            <ion-title>Novo Mercado</ion-title>
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
              <ion-label position="stacked">Nome</ion-label>
              <ion-input v-model="novoMercado.nome" type="text" placeholder="Nome do mercado" />
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Endereço</ion-label>
              <ion-input
                v-model="novoMercado.endereco"
                type="text"
                placeholder="Endereço do mercado"
              />
            </ion-item>
          </ion-list>

          <ion-button expand="block" :disabled="!novoMercado.nome" @click="salvar">
            Adicionar
          </ion-button>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { addOutline } from 'ionicons/icons'
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
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonModal,
  IonInput
} from '@ionic/vue'
import { DatabaseService } from '@/services/DatabaseService'
import type { Mercado } from '@/types'

export default defineComponent({
  name: 'MercadosView',
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
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonModal,
    IonInput
  },
  setup() {
    const db = DatabaseService.getInstance()

    const mercados = ref<Mercado[]>([])
    const isModalOpen = ref(false)
    const novoMercado = ref({
      nome: '',
      endereco: ''
    })

    const loadData = async () => {
      await db.init()
      mercados.value = await db.getMercados()
    }

    const showModal = () => {
      isModalOpen.value = true
    }

    const closeModal = () => {
      isModalOpen.value = false
      novoMercado.value = {
        nome: '',
        endereco: ''
      }
    }

    const salvar = async () => {
      if (novoMercado.value.nome) {
        await db.addMercado(novoMercado.value)
        closeModal()
        loadData()
      }
    }

    const deleteMercado = async (id: number) => {
      // TODO: Verificar se o mercado está sendo usado em alguma lista antes de excluir
      // await db.deleteMercado(id);
      loadData()
    }

    onMounted(() => {
      loadData()
    })

    return {
      mercados,
      isModalOpen,
      novoMercado,
      showModal,
      closeModal,
      salvar,
      deleteMercado,
      addOutline
    }
  }
})
</script>
