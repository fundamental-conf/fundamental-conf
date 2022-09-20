import { createWebHashHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import OurTeam from "@/views/FDTeam.vue";
import Agenda from "@/views/FDAgenda.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/team",
    name: "OurTeam",
    component: OurTeam
  },
  {
    path: "/agenda",
    name: "Agenda",
    component: Agenda
  },
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;