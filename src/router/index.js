import { createRouter, createWebHistory } from "vue-router"
import careers from "../view/careers.vue"
import home from "../view/home.vue"

const routes = [
    {
        path: '/',
        component:home
    },
    {
        path: '/careers',
        component:careers
    },
]

const router = createRouter ({
    history: createWebHistory(),
    routes,
})

export default router;