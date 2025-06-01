<template>
    <div class="max-w-6xl mx-auto px-4 py-2 sm:px-6 py-4 lg:px-8 py-6 flex items-center text-sm space-x-2">
                <router-link class="text-emerald-600" to="/"><i class="fa-solid fa-arrow-left"></i>  Voltar</router-link>
                <p class="text-slate-300">></p>
                <span class="text-slate-500">{{ product.categoria }}</span>
                <p class="text-slate-300">></p>
                <span class="text-slate-500">{{ product.nome }}</span>
    </div>
    <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div class="shadow-2xl p-6 md:p-8 lg:p-10 rounded-lg mt-2">
            <div class="flex flex-wrap justify-between">
                <div>
                    <span class="text-sm font-medium text-emerald-300 bg-emerald-50 px-3 py-1 rounded-full">
                        {{ product.categoria }}
                    </span>
                    <h1 class="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                        {{ product.nome }}
                    </h1>
                </div>
                <div>
                    Botões
                </div>
            </div>
            <div class="grid grid-cols-2 gap-12 mt-5">
                <div class="flex flex-col justify-center">
                    <img class="bg-neutral-100 rounded-md shadow-lg p-2" :src="product.thumbnail" alt="">
                    <div class="grid grid-cols-4 gap-4 mt-5">
                        <div v-for="f in product.images">
                            <img class="bg-neutral-100 rounded shadow-lg p-2" :src="f" alt="">
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex items-baseline space-x-3 mb-4">
                        <span class="text-3xl font-bold text-slate-900">${{ product.preco - product.desconto }}</span>
                        <span class="text-xl text-slate-500 line-through">${{ product.preco}}</span>
                        <span class="bg-gradient-to-r from-red-500 to-pink-500 py-1 px-2 text-sm font-bold rounded-full text-white">-{{ product.desconto }}%</span>
                    </div>
                    <div class="mb-6 flex items-center space-x-4">
                        <div>Estrelinhas</div>
                        <div>Avaliações</div>
                    </div>
                    <h3 class="text-slate-900 font-bold mb-3 text-lg">Descrição</h3>
                    <p class="text-slate-600 leading-relax">{{ product.descricao }}</p>
                    <div class="mt-5">
                        <h3 class="font-bold text-lg text-slate-900 mb-3">Disponibilidade</h3>
                        <div class="flex items-center space-x-3">
                            <div class="h-3 w-3 bg-emerald-500 rounded-full"></div>
                            <span class="text-slate-600">Em estoque ({{ product.estoque }} disponíveis)</span>
                        </div> 
                    </div>
                    <div class="mt-5">
                        <h3 class="font-bold text-slate-900 text-lg mb-3">Quantidade</h3>
                        <div class="flex items-center space-x-3">Botoes</div>
                    </div>
                    <div class="flex space-x-4 pt-6">
                        <button class="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 px-8 rounded-2xl hover:scale-105 transition transform duration-400 hover:from-emerald-600 hover:to-teal-600 shadow-lg shadow-emerald-500/25">Adicionar ao Carrinho</button>
                        <button class="border border-2 border-slate-200 rounded-2xl"><i class="p4 fa-solid fa-cart-shopping text-xl p-4 text-slate-300"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const product = ref({})
const route = useRoute()

const FetchProduto = async() => {
    const id = route.params.id
    const response = await axios.get(`https://dummyjson.com/products/${id}`)
    const p = response.data

    product.value = {
        id: p.id,
        nome: p.title,
        descricao: p.description,
        categoria: p.category,
        preco: p.price,
        desconto: p.discountPercentage,
        nota: p.rating,
        estoque: p.stock,
        images: p.images,
        thumbnail: p.thumbnail

    }
}

onMounted(FetchProduto)
</script>