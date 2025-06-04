<template>
    <div class="block py-16 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h1 class="text-5xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-fuchsia-700 bg-clip-text text-transparent">Premium Products</h1>
                <p class="text-xl text-slate-300 font-bold max-w-3xl mx-auto">Find out about our luxury products that makes you exclusive wherever you go!</p>
            </div>
        </div>
        <div class="flex flex-wrap justify-center px-24 gap-4">
            <button @click="getCategoriaSelecionada('')" :class="botaoCategoriaSelecionado === '' ?'bg-gradient-to-r from-rose-500 to-fuchsia-700 text-white shadow-rose-500/25 px-3 py-1 rounded-full font-medium transition-all transform scale-110' :'px-3 py-1  rounded-full font-medium transition-all transform hover:scale-110 bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700 hover:bg-gradient-to-r from-rose-500 to-fuchsia-700 text-white hover:shadow-rose-500/25'">All</button>
            <button @click="getCategoriaSelecionada(cat.slug)" v-for="cat in categorias" :class="botaoCategoriaSelecionado === cat.slug ?'bg-gradient-to-r from-rose-500 to-fuchsia-700 text-white shadow-rose-500/25 px-3 py-1  rounded-full font-medium transition-all transform scale-110' :'px-3 py-1  rounded-full font-medium transition-all transform hover:scale-110 bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700 hover:bg-gradient-to-r from-rose-500 to-fuchsia-700 text-white hover:shadow-rose-500/25'">{{ cat.nome }}</button>    
        </div>
    </div>
</template>
<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios'
const categorias = ref([])
const botaoCategoriaSelecionado = ref('')
const emit = defineEmits(['categoriaSelecionada'])

defineProps({
    categorias: Object,
    onClick:  {
        type: Function,
        required: true
    }
})


  const fetchCategorias = async () =>{
    const response = await axios.get('https://dummyjson.com/products/categories')
    const categories = response.data

    const categoriesFilter = categories.map(c => ({
      nome: c.name,
      url: c.url,
      slug: c.slug
    }))

    categorias.value = categoriesFilter
  }

  const getCategoriaSelecionada = (categoria) => {
    emit('categoriaSelecionada', categoria)
    botaoCategoriaSelecionado.value = categoria
  }

onMounted(fetchCategorias)
</script>


