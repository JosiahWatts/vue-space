<template>
  <p v-if="loading">Loading...</p>
  <h5>{{ movie.title }}</h5>
  <p>{{ movie.overview }}</p>
</template>

<script>
import useMovie from "../composables/useMovie";

export default {
  props: {
    movieId: String,
  },
  setup(props) {
    const { movie, loading } = useMovie(props.movieId);

    return {
      movie,
      loading,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>