import { createRouter, createWebHistory } from "vue-router"
import careers from "../views/careers.vue"
import home from "../views/home.vue"

const routes = [
    {
        path: '/home',
        component:home
    },
    {
        path: '/careers',
        component:careers
    }
]

const router = createRouter ({
    history: createWebHistory(),
    routes,
})

export default router;