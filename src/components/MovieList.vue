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
.movie-list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  gap: 2rem;
  padding: 0.5rem;
  margin: 0;
  justify-content: space-around;

  li {
    margin: 1rem;
  }
}
</style>