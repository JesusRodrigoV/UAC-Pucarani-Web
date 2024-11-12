import { reactive, computed } from 'vue';
import { useRouter } from 'vue-router';

const state = reactive({
  isAuthenticated: false 
});

export function useAuth() {
  const router = useRouter();

  function login() {
    state.isAuthenticated = true;
    router.push('/'); 
  }

  function logout() {
    state.isAuthenticated = false;
    router.push('/login'); 
  }

  return {
    isAuthenticated: computed(() => state.isAuthenticated),
    login,
    logout
  };
}
