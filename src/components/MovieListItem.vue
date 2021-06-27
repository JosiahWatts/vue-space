<template>
  <div class="movie-item">
    <router-link :title="movie.title" :to="`/my-movies/movie/${movie.id}`">
      <img
        :src="`http://image.tmdb.org/t/p/w300${movie.poster_path}`"
        :alt="movie.title"
      />
    </router-link>
    <span class="view-text">View Movie</span>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object,
  },
};
</script>

<style lang="scss" scoped>
img {
  height: 200px;
  width: 135px;
}

.movie-item {
  position: relative;

  .view-text {
    display: none;
  }

  &:hover {
    .view-text {
      display: inline-block;
    }
  }
}

.view-text {
  position: absolute;
  left: 0;
  bottom: 0;
  background: var(--primary-500);
  width: 135px;
  text-align: center;
  padding: 4px;
  font-weight: 500;
}
</style>