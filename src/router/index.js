// index.js
import { createRouter, createWebHistory } from "vue-router";
import admin from "../views/admin.vue";
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
import Loading from "../views/Loading.vue";
import login from "../views/login.vue";
import MenuPage from "../views/MenuPage.vue";
import pastoral from "../views/Pastoral.vue";
import feed from "../views/SocialFeed.vue";
import Carrera from "../views/CarreraInd.vue";

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
    path: "/calendar",
    component: Calendar,
  },
  {
    path: "/pastoral",
    component: pastoral,
  },
  {
    path: "/menu",
    component: MenuPage,
  },
  {
    path: "/Carrera",
    component: Carrera,
  },
  {
    path: "/admin",
    component: admin,
    name: "AdminPage",
  },
  {
    path: "/loading",
    name: "Loading",
    component: Loading,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 };
  },
});
router.beforeEach((to, from, next) => {
  const defaultTitle = "UAC Pucarani";
  const routeTitles = {
    "/": "Inicio - UAC Pucarani",
    "/login": "Login - UAC Pucarani",
    "/careers": "Carreras - UAC Pucarani",
    "/library": "Biblioteca - UAC Pucarani",
    "/content": "Contenido - UAC Pucarani",
    "/contacts": "Contactos - UAC Pucarani",
    "/jobBank": "Bolsa de Trabajo - UAC Pucarani",
    "/fisio": "Fisioterapia - UAC Pucarani",
    "/enfe": "Enfermería - UAC Pucarani",
    "/boton": "Botón - UAC Pucarani",
    "/vac": "Vacío - UAC Pucarani",
    "/calendar": "Calendario - UAC Pucarani",
    "/pastoral": "Pastoral - UAC Pucarani",
    "/menu": "Menú - UAC Pucarani",
    "/admin": "Admin - UAC Pucarani",
    "/loading": "Cargando - UAC Pucarani",
  };
  document.title = routeTitles[to.path] || defaultTitle;
  next();
});
export default router;
