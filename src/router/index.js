import { createRouter, createWebHistory } from "vue-router"
import careers from "../view/careers.vue"
import home from "../view/home.vue"
import library from "../view/library.vue"
import content from "../view/content.vue"
import contacts from "../view/contacts.vue"
import jobBank from "../view/jobBank.vue"
/*import fisio from "../views/fisio.vue"
import enfe from "../views/enfe.vue";*/
const routes = [
    {
        path: '/',
        component:home
    },
    {
        path: '/careers',
        component:careers
    },
    {
        path: '/library',
        component:library
    },
    {
        path: '/content',
        component:content
    },
    {
        path: '/contacts',
        component:contacts
    },
    {
        path: '/jobBank',
        component:jobBank
    },
    /*{
        path: '/fisio',
        component: fisio,
    },
    {
        path: '/enfe',
        component: enfe,
    }*/
]

const router = createRouter ({
    history: createWebHistory(),
    routes,
})

export default router;