    <template>
        <div class="bg-white rounded-3xl shadow-xl">
            <div>
                <img :src="produto.thumbnail" alt="">
            </div>
        </div>
    </template>


    <script setup>
    defineProps({
        produto: Object
    })
    </script>