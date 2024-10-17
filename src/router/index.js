import { createRouter, createWebHistory } from "vue-router"

import login from "../views/login.vue"

import careers from "../views/careers.vue"
import home from "../views/home.vue"
import library from "../views/library.vue"
import content from "../views/content.vue"
import contacts from "../views/contacts.vue"
import jobBank from "../views/jobBank.vue"
import fisio from "../views/fisio.vue"
import enfe from "../views/enfe.vue";
const routes = [
    {
        path: '/',
        component:home
    },
    {
        path: '/login',
        component: login
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
    {
        path: '/fisio',
        component: fisio,
    },
    {
        path: '/enfe',
        component: enfe,
    },
]

const router = createRouter ({
    history: createWebHistory(),
    routes,
})

export default router;