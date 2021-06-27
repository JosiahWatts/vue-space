import { createRouter, createWebHashHistory } from "vue-router";
import Movies from "../views/Movies.vue";
import Browse from '../views/Browse.vue';

const routes = [
  {
    path: "/",
    component: Browse,
  },
  {
    path: '/my-movies',
    name: 'Movies',
    component: Movies,
  },
  {
    path: '/browse',
    name: 'Browse',
    component: Browse
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
