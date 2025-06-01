    <template>
        <div class="bg-white rounded-3xl shadow-xl">
            <div class="bg-gradient-to-br from-zinc-300 to-zing-300">
                <img :src="produto.thumbnail" alt="">
            </div>
            <div class="p-6">
                <span class="text-xs bg-emerald-50 rounded-full px-2 py-1 text-emerald-600 font-medium mb-4">{{ produto.categoria }}</span>
                <h3 class="font-bold text-slate-900 mb-2 text-lg">{{ produto.nome}}</h3>
                <p class="mb-4 text-slate-500 text-xs line-clamp-2">{{ produto.descricao }}</p>
                <div class="mb-4 flex items-center justify-between">
                    <span class="text-2xl font-bold text-slate-900">
                       ${{ produto.preco }}
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
            
        </div>
    </template>


    <script setup>
    defineProps({
        produto: Object
    })
    </script>