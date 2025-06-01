<template>
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div class="shadow-lg p-6 md:p-8 lg:p-10 rounded-lg">
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
                        <span class="bg-gradient-to-r from-red-500 to-pink-500 py-1 px-3 text-sm font-bold rounded-full text-white">{{ product.desconto }}</span>
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