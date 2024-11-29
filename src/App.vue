<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from './components/Footer.vue';
import MedioPago from './components/MedioPago.vue';

import { ref, provide } from 'vue';

const cart = ref([]); 
provide('cart', cart); 
</script>

<template>
  <Navbar />
  <br>
  <RouterView /> 
  <MedioPago />
  <Footer />
</template>

<style scoped>

</style>
