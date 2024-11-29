import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path:  
      '/home', 
      name: 'home',
      component: HomeView,
    },
    {
      path: '/productos',
      name: 'productos',
      component: () => import('../views/ProductView.vue'),
      props: { 
        products: [
          { 
            id: 1, 
            name: 'Colaciones', 
            description: "Delicious snacks ready to enjoy.",
            price: 10.99,
            image: new URL('@/assets/img/colaciones.jpg', import.meta.url).href 
          },
          { 
            id: 2, 
            name: 'Dulces',
            description: "Sweeten your day.",
            price: 1.99,
            image: new URL('@/assets/img/dulces.jpg', import.meta.url).href 
          },
          { 
            id: 3, 
            name: 'Empanadas',
            description: "Traditional empanadas with homemade flavor.",
            price: 3.99,
            image: new URL('@/assets/img/empanadas.jpg', import.meta.url).href 
          },
        ]
      }
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/contactView.vue')
    }
  ],
})

export default router