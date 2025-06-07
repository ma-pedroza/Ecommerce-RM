<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import{ref} from 'vue'

const dadoFilho = ref('')

function receberFilho(search) {
  dadoFilho.value = search
  console.log(dadoFilho)


}

</script>

<template>
  <Navbar @atualizar="receberFilho"></Navbar>
  <div class="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
    <RouterView :busca="dadoFilho" />
  </div>
  
</template>

