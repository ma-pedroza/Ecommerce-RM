<script setup>
  import Header from '../components/Header.vue'

  import { ref, onMounted } from 'vue'
  import axios from 'axios'

  const produtos = ref([])

  const fetchProdutos = async () => {
    const response = await axios.get('https://dummyjson.com/products')
    const products = response.data.products

    console.log(products)

  }

  onMounted(fetchProdutos)
</script>

<template>
  <main>
    <Header></Header>
    
  </main>
</template>
