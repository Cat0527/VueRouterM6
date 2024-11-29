<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Nuestros Productos</h1>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
        <Card :product="product" />
      </div>
    </div>
    <div class="text-center my-4">
      <router-link to="/" class="btn btn-primary">Volver al inicio</router-link>
    </div>
  </div>
</template>
  
  <script setup>
import Card from '@/components/Card.vue';

defineProps({
  products: {
    type: Array,
    required: true
  }
});
</script>
  
  <style scoped>
  </style>
  