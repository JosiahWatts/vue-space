<template>
  <b>{{ movie.title }}</b>
  <router-link class="nav-link" :to="`/my-movies/movie/${movie.id}`"
    >View</router-link
  >
</template>

<script>
export default {
  props: {
    movie: Object,
  },
};
</script>

<style lang="scss" scoped>
</style>