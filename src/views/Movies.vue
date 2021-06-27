<template>
  <p v-if="loading">Loading...</p>
  <MovieList :movies="movies.results" />
</template>

<script>
import useUserMovies from "../composables/useUserMovies";
import MovieList from "../components/MovieList.vue";

export default {
  setup() {
    const { movies, loading } = useUserMovies();

    return {
      movies,
      loading,
    };
  },
  components: {
    MovieList,
  },
};
</script>