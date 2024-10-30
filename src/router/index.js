import { createRouter, createWebHistory } from "vue-router";

import login from "../views/login.vue";

import boton from "../views/Boton.vue";
import Calendar from "../views/Calendar.vue";
import careers from "../views/careers.vue";
import contacts from "../views/contacts.vue";
import content from "../views/content.vue";
import enfe from "../views/enfe.vue";
import fisio from "../views/fisio.vue";
import home from "../views/home.vue";
import jobBank from "../views/jobBank.vue";
import library from "../views/library.vue";
import pastoral from "../views/Pastoral.vue";
import vac from "../views/vacio.vue";

const routes = [
  {
    path: "/",
    component: home,
  },
  {
    path: "/login",
    component: login,
  },
  {
    path: "/careers",
    component: careers,
  },
  {
    path: "/library",
    component: library,
  },
  {
    path: "/content",
    component: content,
  },
  {
    path: "/contacts",
    component: contacts,
  },
  {
    path: "/jobBank",
    component: jobBank,
  },
  {
    path: "/fisio",
    component: fisio,
  },
  {
    path: "/enfe",
    component: enfe,
  },
  {
    path: "/boton",
    component: boton,
  },
  {
    path: "/vac",
    component: vac,
  },
  {
    path: "/calendar",
    component: Calendar,
  },
  {
    path: '/pastoral',
    component: pastoral,
},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
