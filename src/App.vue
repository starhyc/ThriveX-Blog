<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    anchorPlacement: 'top-bottom'
  })
})
</script>

<style>
#app {
  min-height: 100vh;
}
</style>