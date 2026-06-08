<template>
  <div id="app">
    <MenuLateral />
    <ion-app id="main-content">
      <ion-router-outlet />
    </ion-app>
  </div>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue'
import MenuLateral from './components/MenuLateral.vue'
</script>
