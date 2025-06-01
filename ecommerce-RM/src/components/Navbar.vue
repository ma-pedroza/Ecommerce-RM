 <template>
    <div class="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 sticky">
        <div class="flex items-center justify-between py-5 px-23">
            <div class="flex items-center justify-between gap-2">
                <div class="rounded-xl bg-gradient-to-r from-rose-500 to-fuchsia-700 h-10 w-10 flex items-center justify-center">
                    <span class="font-bold text-white text-lg">RM</span>
                </div>
                <h2 class="text-xl font-bold bg-gradient-to-r from-rose-500 to-fuchsia-700 bg-clip-text text-transparent">Ecommerce</h2>
            </div>
                <div class="flex-1 max-w-2xl mx-8">
                    <div class="relative group">
                        <i class="fa-solid fa-magnifying-glass absolute left-5 top-1/2 transform -translate-y-1/2 group-focus-within:text-rose-500 text-slate-400 text-sm"></i>
                        <input type="text" placeholder="Descubra nossos produtos..."
                        class="w-full bg-slate-800/50 border border-slate-700 rounded-2xl focus:ring-2 focus:ring-rose-500 focus:border-transparent text-white placeholder-slate-400 py-4 pl-12 pr-6 transition-all">
                    </div>                
                </div>
            <div class="flex items-center space-x-9 ">
                <button><i class="p4 fa-regular fa-heart text-xl text-white"></i></button>
                <button><i class="p4 fa-solid fa-cart-shopping text-xl text-white"></i></button>
                <!-- POR ENQUANTO SEM FUNCIONALIDADES -->
            </div>
        </div>
    </div>
</template>

<script>
</script>