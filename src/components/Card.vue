<template>
  <div class="card h-100">
    <img :src="product.image" class="card-img-top" :alt="`Imagen de ${product.name}`" />
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">{{ product.description }}</p>
      <p class="card-text">Precio: ${{ product.price }}</p>
      <button class="btn btn-primary" @click="addToCart(product)">
        Agregar al carrito
      </button>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';

defineProps({
  product: {
    type: Object,
    required: true
  }
});

const cart = inject('cart');

const addToCart = (product) => {
  cart.value.push(product);
  console.log('Producto agregado al carrito:', product.name); 
};
</script>

<style scoped>
.card {
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>
