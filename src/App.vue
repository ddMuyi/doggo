<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderComponent from './components/Header/main.vue'
</script>

<template>
  <HeaderComponent/>
  <RouterView />
</template>

<style scoped>
*{
  margin:0 !important;
  padding:0 !important;
}
</style>
