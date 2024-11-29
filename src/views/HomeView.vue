<script setup>
import Card from '../components/Card.vue';

const products = [
  {
    id: 1,
    name: 'Refresco',
    description: 'Gaseosa',
    price: 2000,
    image: new URL('@/assets/img/bebidas.jpg', import.meta.url).href
  },
  {
    id: 2,
    name: 'Verduras',
    description: 'Fresca y deliciosas verduras de temporada.',
    price: 2500,
    image: new URL('@/assets/img/verduras.jpg', import.meta.url).href 
  },
  {
    id: 3,
    name: 'Desayuno',
    description: 'Delicioso desayuno mediterraneo',
    price: 2500,
    image: new URL('@/assets/img/desayunos.jpg', import.meta.url).href 
  },

];
const featuredProduct = products[0];
</script>

<template>
  <div class="container mt-5">
    <section class="mb-5 text-center">
      <h1>Bienvenidos a Supermercado</h1>
      <p class="text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </section>

    <section class="mb-5"> 
      <h4 class="text-center mb-4">Producto Destacado</h4>
      <Card :product="featuredProduct" /> 
    </section>

    <section>
      <h4 class="text-center mb-4">Nuestros Productos Destacados</h4>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
          <Card :product="product" />
        </div>
      </div>
    </section>

    <div class="text-center my-4">
      <router-link to="/productos" class="btn btn-primary">Ver todos los productos</router-link>
    </div>
  </div>
</template>

<style scoped>
.text-muted {
  color: #6c757d;
}
</style>




