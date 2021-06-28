import { createRouter, createWebHashHistory } from "vue-router";
import Movies from "../views/Movies.vue";
import Browse from '../views/Browse.vue';
import Movie from '../views/Movie.vue';

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
    path: '/my-movies/movie/:movieId',
    name: 'Movie',
    component: Movie,
    props: route => ({ movieId: route.params.movieId }),
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
