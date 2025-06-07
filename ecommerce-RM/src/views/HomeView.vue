<script setup>
  import Header from '../components/Header.vue'
  import ProductCard from '../components/ProductCard.vue'

  import { ref, onMounted, watch } from 'vue'
  import axios from 'axios'

  const props = defineProps({
  busca: String
  })


  watch(() => props.busca, () => {
  skip.value = 0
  fetchProdutos()
})



  const produtos = ref([])
  const currentPage = ref(1)
  const limit = 12
  const skip = ref(0)
  const totalProdutos = ref(194)
  const search = ref('')
  const categoriaSelecionada = ref ('')
  

  const fetchProdutos = async () => {
    const word = props.busca
    let url = ''
    if(categoriaSelecionada.value){
      url = `https://dummyjson.com/products/category/${categoriaSelecionada.value}`
    }else if(word!=''){
      url = `https://dummyjson.com/products/search?q=${encodeURIComponent(word)}`

    }else{
      url = `https://dummyjson.com/products/search?q=&limit=12&skip=${skip.value}`
    }

    const response = await axios.get(url)
    const products = response.data.products

    const productFilter = products.map(p => ({
      id: p.id,
      nome: p.title,
      descricao: p.description,
      categoria: p.category,  
      preco: p.price,
      desconto: p.discountPercentage.toFixed(0),
      estoque: p.stock,
      thumbnail: p.thumbnail,
      imagem: p.images,
      precoDesconto: (p.price * (1 - p.discountPercentage/100)).toFixed(2)  
    }))
    
    produtos.value = productFilter

  }

  const setcategoriaSelecionada = (categoria) => {
    categoriaSelecionada.value = categoria
  }

  const nextPage = () => {
    skip.value += limit
    fetchProdutos()
  }

  const previousPage = () => {
    if(skip.value >= limit){
      skip.value -= limit
      fetchProdutos()
    }
  }
  watch(search, () => {
    skip.value = 0
    fetchProdutos()
  })
  watch(categoriaSelecionada, () =>{
    skip.value = 0
    fetchProdutos()
  })
  onMounted(fetchProdutos)
</script>

<template>
  <main>
    <Header @categoriaSelecionada="setcategoriaSelecionada"></Header>
    <div class="grid grid-cols-4 gap-5 mt-5 px-20">
      <ProductCard v-for="p in produtos" :produto="p"></ProductCard>
    </div>
    <div class="flex items-center justify-center pt-5 pb-5 space-x-9">
      <button @click="previousPage" class="hover:scale-105 cursor-pointer px-4 py-2 rounded-xl text-white bg-rose-600 hover:bg-rose-700  transition transform duration-300 hover:shadow-yellow-50 disabled:opacity-50" :disabled="skip == 0">
        Previous
      </button>
      <button @click="nextPage" class="hover:scale-105 cursor-pointer px-4 py-2 rounded-xl text-white bg-rose-600 hover:bg-rose-700  transition transform duration-300 hover:shadow-yellow-50 disabled:opacity-50" :disabled="(skip + limit) >= totalProdutos">
        Next
      </button>
    </div>
  </main>
</template>
