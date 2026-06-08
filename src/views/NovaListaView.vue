<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <template #start>
          <ion-buttons>
            <ion-back-button default-href="/" />
          </ion-buttons>
        </template>
        <ion-title>Nova Lista de Compras</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item>
          <ion-label position="stacked">Data</ion-label>
          <ion-datetime-button datetime="date" />
          <ion-modal :keep-contents-mounted="true">
            <ion-datetime id="date" v-model="data" presentation="date" />
          </ion-modal>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Mercado</ion-label>
          <ion-select v-model="mercadoId" interface="action-sheet">
            <ion-select-option v-for="mercado in mercados" :key="mercado.id" :value="mercado.id">
              {{ mercado.nome }}
            </ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>

      <ion-button expand="block" :disabled="!isValid" @click="salvar"> Criar Lista </ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonButtons,
  IonBackButton,
  IonDatetime,
  IonDatetimeButton,
  IonModal
} from '@ionic/vue'
import { DatabaseService } from '@/services/DatabaseService'
import type { Mercado } from '@/types'

export default defineComponent({
  name: 'NovaListaView',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonButtons,
    IonBackButton,
    IonDatetime,
    IonDatetimeButton,
    IonModal
  },
  setup() {
    const router = useRouter()
    const db = DatabaseService.getInstance()

    const data = ref(new Date().toISOString())
    const mercadoId = ref<number | null>(null)
    const mercados = ref<Mercado[]>([])

    const isValid = computed(() => {
      return data.value && mercadoId.value
    })

    const loadMercados = async () => {
      await db.init()
      mercados.value = await db.getMercados()
    }

    const salvar = async () => {
      if (isValid.value) {
        await db.addListaCompra({
          data: new Date(data.value),
          mercadoId: mercadoId.value!,
          status: 'pendente',
          total: 0
        })
        router.back()
      }
    }

    onMounted(() => {
      loadMercados()
    })

    return {
      data,
      mercadoId,
      mercados,
      isValid,
      salvar
    }
  }
})
</script>
