<template>
  <MovieList :movies="movies.results" />
</template>

<script>
import useUserMovies from "../composables/useUserMovies";
import MovieList from "../components/MovieList.vue";

export default {
  setup() {
    const { movies } = useUserMovies();

    return {
      movies,
    };
  },
  components: {
    MovieList,
  },
};
</script>