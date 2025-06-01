<script setup>
  import Header from '../components/Header.vue'
  import ProductCard from '../components/ProductCard.vue'

  import { ref, onMounted } from 'vue'
  import axios from 'axios'

  const produtos = ref([])

  const fetchProdutos = async () => {
    const response = await axios.get('https://dummyjson.com/products')
    const products = response.data.products

    const productFilter = products.map(p => ({
      id: p.id,
      nome: p.title,
      descricao: p.description,
      categoria: p.category,  
      preco: p.price,
      desconto: p.discountPercentage.toFixed(2),
      estoque: p.stock,
      thumbnail: p.thumbnail,
      imagem: p.images
    }))
    
    produtos.value = productFilter

  }

  onMounted(fetchProdutos)
</script>

<template>
  <main>
    <Header></Header>
    <div class="grid grid-cols-4 gap-4 mt-10">
      <ProductCard v-for="p in produtos" :produto="p"></ProductCard>
    </div>
    
  </main>
</template>
