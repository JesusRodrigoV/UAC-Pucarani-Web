<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
  <RouterView></RouterView>
  <div id="app">
    
  </div>
</template>

<script>
import axios from 'axios'
import { ref, onMounted } from 'vue'
export default {
  setup() {
    const message = ref('')
    onMounted(async () =>{
      const responce = await axios.get('http://localhost:5173/api/mensaje')
      message.value = response.data.message
    })
    return {message}
  }
}
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
}
</style>
