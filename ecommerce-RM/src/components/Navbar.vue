<template>
    <div class="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 sticky">
        <div class="flex items-center justify-between py-5 px-23">
            <router-link to="/" class="flex items-center justify-between gap-2 hover:scale-110 transition transform duration-300">
                <div class="rounded-xl bg-gradient-to-r from-rose-500 to-fuchsia-700 h-10 w-10 flex items-center justify-center">
                    <span class="font-bold text-white text-lg">RM</span>
                </div>
                <h2 class="text-xl font-bold bg-gradient-to-r from-rose-500 to-fuchsia-700 bg-clip-text text-transparent ">Ecommerce</h2>
            </router-link>
                <div class="flex-1 max-w-2xl mx-8">
                    <div class="relative group">
                        <i class="fa-solid fa-magnifying-glass absolute left-5 top-1/2 transform -translate-y-1/2 group-focus-within:text-rose-500 text-slate-400 text-sm"></i>
                        <input @input="atualizarPai" v-model="search" type="text" placeholder="Discover our products..."
                        class="w-full bg-slate-800/50 border border-slate-700 rounded-2xl focus:ring-2 focus:ring-rose-500 focus:border-transparent text-white placeholder-slate-400 py-4 pl-12 pr-6 transition-all">
                    </div>                
                </div>
            <div class="flex items-center space-x-9 ">
                <button><i class="p4 fa-regular fa-heart text-xl text-white"></i></button>
                <router-link to="/cart"><i class="p4 fa-solid fa-cart-shopping text-xl text-white hover:text-emerald-300 hover:scale-110 transition transform duration-300"></i></router-link>
                <!-- POR ENQUANTO SEM FUNCIONALIDADES -->
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref, watch } from 'vue'
  
  const search = ref('')
  const produtos = ref([])

  const emit = defineEmits(['atualizar'])

  function atualizarPai() {
    emit('atualizar', search.value)
  }
  
  watch(search, async (novaBusca) => {
    if (novaBusca.trim() === '') {
      produtos.value = []
      return
    }
  
    try {
      const resposta = await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(novaBusca)}`)
      const dados = await resposta.json()
      produtos.value = dados.products
    } catch (erro) {
      console.error('Erro ao buscar produtos:', erro)
      produtos.value = []
    }
  })
  </script>