import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BreedView from '../views/BreedView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/breed/:breed",
      name: "breed",
      component: BreedView,
    },
  ],
});

export default router;
