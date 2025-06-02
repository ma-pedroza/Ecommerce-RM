    <template>
        <router-link :to="`/product/${produto.id}`" class="bg-white rounded-3xl shadow shadow-white/40 overflow-hidden hover:scale-104 hover:shadow-lg transition transform duration-500">
            <div class="relative bg-gradient-to-br from-zinc-300 to-zing-300 ">
                <img class="w-full h-full" :src="produto.thumbnail" alt="">
                <div class="absolute top-4 left-4">
                    <span class="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full text-sm font-bold">-{{ produto.desconto}}%</span>
                </div>
                <div>
                    <button class="absolute top-4 right-4 rounded-full bg-white shadow-lg w-10 h-10"><i class="p4 fa-regular fa-heart text-xl"></i></button>
                </div>
            </div>
            <div class="p-4">  
                <span class="text-xs bg-emerald-50 rounded-full px-2 py-1 text-emerald-600 font-medium mb-3 tracking-wide">{{ produto.categoria }}</span>
                <h3 class="font-bold text-slate-900 mb-2 mt-2 text-base">{{ produto.nome}}</h3>
                <p class="mb-3 text-slate-500 text-xs line-clamp-2">{{ produto.descricao }}</p>
                <div class="mb-3 flex items-center justify-between">
                    <span class="text-xl font-bold text-slate-900">
                       ${{ produto.precoDesconto }}
                    </span>
                    <span class="text-xs px-2 py-1 font-medium rounded-full bg-emerald-50 text-emerald-500">
                        {{ produto.estoque }} em estoque
                    </span>
                </div>
                <div class="flex items-center justify-center">
                    <button class="px-6 py-2 text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded hoover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 font-medium shadow-lg shadow-emerald-500/30">
                        Adicionar
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