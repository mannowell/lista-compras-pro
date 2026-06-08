<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item router-link="/listas" @click="closeMenu">
          <template #start>
            <ion-icon :icon="listOutline" />
          </template>
          <ion-label>Listas de Compras</ion-label>
        </ion-item>

        <ion-item router-link="/produtos" @click="closeMenu">
          <template #start>
            <ion-icon :icon="cubeOutline" />
          </template>
          <ion-label>Produtos</ion-label>
        </ion-item>

        <ion-item router-link="/mercados" @click="closeMenu">
          <template #start>
            <ion-icon :icon="storefront" />
          </template>
          <ion-label>Mercados</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  menuController
} from '@ionic/vue'
import { listOutline, cubeOutline, storefront } from 'ionicons/icons'

export default defineComponent({
  name: 'MenuLateral',
  components: {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonIcon
  },
  setup() {
    const closeMenu = async () => {
      await menuController.close()
    }

    return {
      closeMenu,
      listOutline,
      cubeOutline,
      storefront
    }
  }
})
</script>
