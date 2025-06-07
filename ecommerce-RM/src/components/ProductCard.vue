    <template>
        <router-link :to="`/product/${produto.id}`" class="bg-white rounded-3xl shadow shadow-white/40 overflow-hidden hover:scale-105 hover:shadow-lg transition transform duration-500">
            <div class="relative bg-gradient-to-br from-zinc-300">
                <img class="w-full h-45 object-cover" :src="produto.thumbnail" alt="">
                <div class="absolute top-4 left-4">
                    <span class="px-2 py-0.5 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full text-xs font-bold">-{{ produto.desconto}}%</span>
                </div>
                <div>
                    <button class="flex items-center justify-center absolute top-4 right-4 rounded-full bg-white shadow-lg w-8 h-8"><i class="p4 fa-regular fa-heart text-lg"></i></button>
                </div>
            </div>
            <div class="p-3">  
                <span class="text-[10px] bg-emerald-50 rounded-full px-2 py-1 text-emerald-600 font-medium mb-3 tracking-wide">{{ produto.categoria }}</span>
                <h3 class="font-bold text-slate-900 mb-1 mt-1 text-sm">{{ produto.nome}}</h3>
                <p class="mb-2 text-slate-500 text-[10px] line-clamp-2">{{ produto.descricao }}</p>
                <div class="mb-3 flex items-center justify-between">
                    <span class="text-lg font-bold text-slate-900">
                       ${{ produto.precoDesconto }}
                    </span>
                    <span class="text-[10px] px-2 py-1 font-medium rounded-full bg-emerald-50 text-emerald-500">
                        {{ produto.estoque }} in stock
                    </span>
                </div>
                <div class="flex items-center justify-center">
                    <button class="px-4 py-1 text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 font-medium shadow-lg shadow-emerald-500/30">
                        Add
                    </button>
                </div>
            </div>    
        </router-link>
    </template>


    <script setup>
    defineProps({
        produto: Object
    })
    </script>