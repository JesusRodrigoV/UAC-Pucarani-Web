<template>
  <div id="app">
    <Header />
    <Carousel />

    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Carousel from './components/Carousel.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Carousel,
    Footer
  }
}
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
}
</style>
