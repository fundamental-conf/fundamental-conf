import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import OurTeam from "@/views/FDTeam.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/team",
    name: "OurTeam",
    component: OurTeam,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;