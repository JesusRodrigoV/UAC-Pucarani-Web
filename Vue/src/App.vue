<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
onMounted(() => {
  const observeFadeElements = () => {
    const fadeElements = document.querySelectorAll('.fade-in-element');
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    fadeElements.forEach((el) => observer.observe(el));
  };
  observeFadeElements();
});
</script>

<template>

  <transition name="fade">
    <RouterView/>
  </transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-in-element {
  opacity: 0;
}
.fade-in-visible {
  opacity: 1;
  transition: opacity 0.5s;
}
</style>
