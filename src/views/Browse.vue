<template>
  <div class="search-container">
    <h2>Looking for something to watch?</h2>
    <input
      v-model="searchQuery"
      @keypress.enter="getMoviesBySearchQuery(searchQuery, page)"
      type="text"
      name="search"
      id="search"
      placeholder="Search for a movie or TV show..."
    />
    <Button variant="primary" @click="getMoviesBySearchQuery(searchQuery, page)">Search</Button>
  </div>
  <div class="movie-list-container">
    <MovieList :movies="movies" />
  </div>
</template>

<script>
import { ref } from 'vue';
import Button from "../components/Button.vue";
import MovieList from "../components/MovieList.vue";
import useMovieSearch from '../composables/useMovieSearch';

export default {
  components: {
    Button,
    MovieList,
  },

  setup() {
    const searchQuery = ref('');
    const page = ref(1);
    const { movies, loading, getMoviesBySearchQuery } = useMovieSearch();
  
    return {
      searchQuery,
      page,
      movies,
      loading,
      getMoviesBySearchQuery,
    }
  }
};
</script>

<style lang="scss" scoped>
.search-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;

  h2 {
    margin-bottom: 1.5rem;
  }

  input {
    max-width: 80%;
    width: 100%;
    margin-bottom: 2rem;
  }
}

.movie-list-container {
    max-width: 90%;
    margin: 0 auto;
    margin-top: 2rem;
}
</style>