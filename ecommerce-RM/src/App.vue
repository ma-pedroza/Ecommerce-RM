<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'



</script>

<template>
  <Navbar></Navbar>
  <div class="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
    <RouterView />
  </div>
  
</template>

