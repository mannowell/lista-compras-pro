<template>
  <ion-app id="main-content">
    <MenuLateral />
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue'
import MenuLateral from './components/MenuLateral.vue'
</script>
