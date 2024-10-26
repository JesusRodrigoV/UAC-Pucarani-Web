<template>
  <div v-if="visible" class="modal-overlay">
    <div class="modal-content">
      
      <button @click="closeModal">Cerrar</button>
    </div>
  </div>
</template>

<script>

export default {
  props: ['visible'],
  components: {
    'vue3-calendar': Calendar
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  }
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
