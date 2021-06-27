<template>
  <ul class="movie-list">
    <li v-for="movie in movies" :key="movie.id">
      <MovieListItem :movie="movie" />
    </li>
  </ul>
</template>

<script>
import MovieListItem from "../components/MovieListItem.vue";

export default {
  props: {
    movies: Array,
  },
  components: {
    MovieListItem,
  },
};
</script>

<style lang="scss" scoped>
</style>