<!-- Toast.vue -->
<template>
    <transition name="fade">
        <div v-if="visible" class="toast">
            <h3>Error</h3>
            <p>{{ message }}</p>
        </div>
    </transition>
</template>

<script>
import { ref, watch } from 'vue';

export default {
    props: {
        message: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const visible = ref(false);

        // Observa los cambios en el mensaje y muestra el toast
        watch(
            () => props.message,
            (newMessage) => {
                if (newMessage) {
                    visible.value = true;
                    setTimeout(() => {
                        visible.value = false;
                    }, 3000); // Desaparece después de 3 segundos
                }
            }
        );

        return {
            visible,
        };
    },
};
</script>

<style scoped>
.toast {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #ff4d4d;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-size: 0.9rem;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
}
</style>
