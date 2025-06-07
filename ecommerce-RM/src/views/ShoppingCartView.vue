<template>
    <div class="bg-gradient-to-r from-rose-500 to-fuchsia-700 text-white py-12">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
            <div class="flex items-center space-x-4">
            <div class="p-4 rounded-2xl bg-white/20 backdrop-blur-sm" ><i class="fa-solid fa-cart-shopping text-3xl"></i></div>
            <div>
                <h1 class="text-4xl font-bold">Your Cart</h1>
                <p class="mt-2">{{ carrinho.length }} products selected</p>
            </div>
        </div>
        </div>  
    </div>
    <div class="min-h-screen -mt-8 pt-3">
        <div class="max-w-6xl mx-auto px-4">
            <div class="grid sm:grid-cols-1 xl:grid-cols-3 gap-8">
                <div v-if="carrinho.length >= 1" class=" bg-white shadow-white/50 shadow-md rounded-3xl border border-white/20 col-span-2  overflow-hidden ">
                    <div v-for="p in carrinho" class="p-8 hover:bg-gray-50/50 transition-all duration-200">
                        <div class="flex items-center space-x-6">
                            <div class="bg-gradient-to-br from-gray-100 to-gray-200 p-4 shadow-lg rounded-2xl w-52 h-30 overflow-hidden"><img class="rounded-2xl w-full h-full" :src="p.thumbnail" alt=""></div>
                            <div class="overflow-hidden">
                                <h3 class="mb-1 text-lg font-bold text-slate-900">{{ p.nome }}</h3>
                                <p class="mb-3 text-xs text-gray-500 line-clamp-1">{{ p.descricao }}</p>
                                <div class="flex space-x-2 items-center">
                                    <span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-fuchsia-700">${{ p.precoDesconto }}</span>
                                    <span class="rounded-full py-1 px-2 text-xs bg-green-100 text-green-900 font-semibold">In stock</span>
                                </div>
                            </div>
                            <div class="flex items-center p-2 rounded-2xl bg-gray-50 space-x-3">
                                <button @click="diminuirQuatidade(p)" class="py-1 px-2 bg-gray-200/50 rounded-lg hover:scale-110 hover:bg-rose-300 transform transition duration-200 hover:shadow"><i class="fa-solid fa-minus text-rose-500"></i></button>
                                <span class="text-lg font-bold text-center text-slate-900">{{ p.quantidade }}</span>
                                <button @click="aumentarQuantidade(p)" class="py-1 px-2 bg-gray-200/50 rounded-lg hover:scale-110 hover:bg-emerald-200 transform transition duration-200 hover:shadow"><i class="fa-solid fa-plus text-emerald-500"></i></button>
                            </div>
                            <div class="flex flex-col items-center">
                                <span class="text-2xl font-bold text-slate-900 mb-3">${{ p.precoDesconto }}</span>
                                <button @click="deleteProduto(p.id)" class="flex justify-between gap-3 bg-red-50 p-2 rounded-lg font-medium items-center text-red-400 text-sm hover:scale-110 transform transition duration-200 hover:shadow"><i class="fa-solid fa-trash "></i> Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else="carrinho.length" class=" bg-white shadow-white/50 shadow-md rounded-3xl border border-white/20 col-span-2  overflow-hidden ">
                    <div class="p-16 flex flex-col items-center">
                        <div class="bg-rose-100 rounded-full p-12 text-center mb-8">
                            <i class="fa-solid fa-cart-shopping text-8xl text-rose-400"></i>
                        </div>
                        <h2 class="font-bold text-4xl mb-4">Your Shopping Cart is empty</h2>
                        <p class="text-xl mb-2 text-gray-600">Why not add some amazing products?</p>
                        <p class="text-gray-500">Explore our collection and find products you'll love!</p>
                        <div class="flex gap-4 mt-12 justify-center">
                            <router-link to="/" class="px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-500 to-fuchsia-700 text-white font-bold shadow-lg hover:scale-115 transform transition duration-200 hover:shadow-lg"><i class="fa-solid fa-magnifying-glass text-white"></i> Discover Products</router-link>
                            <router-link class="px-8 py-4 rounded-2xl border-2 border-gray-200 shadow-lg font-bold hover:scale-115 transform transition duration-200 hover:shadow-lg"><i class="fa-regular fa-heart"></i> View Favorites</router-link>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col-1">
                    <div class="bg-white rounded-3xl shadow-white/50 shadow-md border border-white/20 p-10 w-full backdrop-blur-sm">
                        <div class="flex items-center space-x-3 mb-6">
                            <div class="bg-gray-200/50 py-2 px-3 rounded-xl"><i class="fa-solid fa-calculator text-3xl bg-gradient-to-r from-rose-500 to-fuchsia-700 bg-clip-text text-transparent" ></i></div>
                            <div class="font-bold text-2xl text-slate-800">Resume</div>
                        </div>
                        <div class="flex justify-between text-gray-600 mb-4">
                            <span class="font-medium">Subtotal</span>
                            <span class="font-bold">${{ valorTotal.toFixed(2) }}</span>
                        </div>
                        <div v-if="carrinho.length >= 1" class="flex justify-between text-gray-600 mb-4">
                            <span class="font-medium">Shipping</span>
                            <span class="font-bold">$29.99</span>
                        </div>
                        <div v-else="carrinho.length" class="flex justify-between text-gray-600 mb-4">
                            <span class="font-medium">Shipping</span>
                            <span class="font-bold">$0.00</span>
                        </div>
                        <div class="flex justify-between text-gray-600 mb-4">
                            <span class="font-medium text-emerald-600">Discount</span>
                            <span class="font-bold text-emerald-600">-$0.00</span>
                        </div>
                        <div class="pt-3 border-t border-gray-200">
                            <div class="flex justify-between">
                                <span class="text-2xl text-slate-800 font-bold">Total</span>
                                <span v-if="carrinho.length >= 1" class="text-3xl font-bold bg-gradient-to-r from-rose-500 to-fuchsia-700 bg-clip-text text-transparent">${{ (valorTotal + 29.99).toFixed(2) }}</span>
                                <span v-else="carrinho.length" class="text-3xl font-bold bg-gradient-to-r from-rose-500 to-fuchsia-700 bg-clip-text text-transparent">${{ 0 }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { onMounted, ref, computed } from 'vue'

const carrinho = ref([])

const pegarCarrinho = () => {
    carrinho.value = JSON.parse(localStorage.getItem('carrinho')) || []
    console.log(carrinho.value)
    
}

const deleteProduto = (id) =>{
    carrinho.value = carrinho.value.filter(i => i.id !== id)

    localStorage.setItem('carrinho', JSON.stringify(carrinho.value))
}

const valorTotal = computed(() => {
    let total = 0

    for(const produto of carrinho.value){
        total += produto.precoDesconto * produto.quantidade
    }
    return total
})

const aumentarQuantidade = (item) => {
    const cart = JSON.parse(localStorage.getItem('carrinho')) || []
    for(const i in cart){
        if (cart[i].id === item.id){
            cart[i].quantidade += 1;   
        }
    }
     localStorage.setItem('carrinho', JSON.stringify(cart))
     carrinho.value = cart
}

const diminuirQuatidade = (item) => {
    const cart = JSON.parse(localStorage.getItem('carrinho')) || []
    for(const i in cart){
        if (cart[i].id === item.id){
            if(cart[i].quantidade > 1){
                cart[i].quantidade -= 1
            }break
        }
    }
        localStorage.setItem('carrinho', JSON.stringify(cart))
        carrinho.value = cart
}


onMounted(pegarCarrinho)
console.log(localStorage.getItem('carrinho'))
</script>