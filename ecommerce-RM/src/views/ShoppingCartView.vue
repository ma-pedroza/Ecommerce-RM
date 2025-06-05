<template>
    <div class="bg-gradient-to-r from-rose-500 to-fuchsia-700 text-white py-12">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
            <div class="flex items-center space-x-4">
            <div class="p-4 rounded-2xl bg-white/20 backdrop-blur-sm" ><i class="fa-solid fa-cart-shopping text-3xl"></i></div>
            <div>
                <h1 class="text-4xl font-bold">Your Cart</h1>
                <p class="mt-2">{{ carrinho.length }} selected products</p>
            </div>
        </div>
        </div>  
    </div>
    <div class="min-h-screen bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div class="max-w-6xl mx-auto px-4">
            <div class="grid sm:grid-cols-1 xl:grid-cols-3 gap-8">
                <div class="bg-white shadow-white/50 shadow-md rounded-3xl border border-white/20 col-span-2 overflow-hidden">
                    <div v-for="p in carrinho" class="p-8 hover:bg-gray-50/50 transition-all duration-200">
                        <div class="flex items-center space-x-6">
                            <div class="bg-gradient-to-br from-gray-100 to-gray-200 p-4 shadow-lg rounded-2xl "><img class="object-cover rounded-2xl" :src="p.thumbnail" alt=""></div>
                            <div class="">
                                <h3 class="mb-1 text-lg font-bold text-slate-900">{{ p.nome }}</h3>
                                <p class="mb-3 text-xs   text-gray-500 line-clamp-1">{{ p.descricao }}</p>
                                <div class="flex space-x-2 items-center">
                                    <span class="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-fuchsia-700">${{ p.precoDesconto }}</span>
                                    <span class="rounded-full py-1 px-2 text-xs bg-green-100 text-green-900 font-semibold">Em estoque</span>
                                </div>
                            </div>
                            <div class="flex items-center p-2 rounded-2xl bg-gray-50 space-x-2">
                                <button class="p-2"><i class="fa-solid fa-minus text-gray-500"></i></button>
                                <span class="text-lg font-bold text-center text-slate-900">{{ p.quantidade }}</span>
                                <button class="p-2"><i class="fa-solid fa-plus text-gray-500"></i></button>
                            </div>
                            <div>
                                <span class="text-md font-bold text-slate-900 mb-3">${{ p.precoDesconto }}</span>
                                <button @click="deleteProduto(p.id)" class="items-center text-red-500 text-sm"><i class="fa-solid fa-trash "></i> Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-cols-1">
                    <div class="bg-white/80 rounded-3xl shadow-white/50 shadow-md border border-white/20 p-8">
                        <div>Resumo </div>
                        <div>Subtotal</div>
                        <div>Frete</div>
                        <Div>Desconto</Div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>


<script setup>
import { onMounted, ref } from 'vue'

const carrinho = ref([])

const pegarCarrinho = () => {
    carrinho.value = JSON.parse(localStorage.getItem('carrinho')) || []
    console.log(carrinho.value)
    
}

const deleteProduto = (id) =>{
    carrinho.value = carrinho.value.filter(i => i.id !== id)

    localStorage.setItem('carrinho', JSON.stringify(carrinho))
}


onMounted(pegarCarrinho)
console.log(localStorage.getItem('carrinho'))
</script>