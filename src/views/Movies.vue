<template>
  <div class="movies-flex-layout">
    <aside class="movies-navigation">
      <a href="#" class="movies-navigation-item nav-link">Watched (0)</a>
      <a href="#" class="movies-navigation-item nav-link">Need to Watch (0)</a>
    </aside>
    <div class="flex-1">
      <div class="filter-controls-container">
        <div class="input-group search">
          <label for="filter">Search</label>
          <input
            v-model="searchText"
            type="text"
            name="filter"
            id="filter"
            placeholder="Search for a movie..."
          />
        </div>
        <div class="input-group sort">
          <label for="filter">Sort</label>
          <ListBox :items="sortOptions" @on-option-selected="changeSort" />
        </div>
      </div>
      <p v-if="loading">Loading...</p>
      <MovieList :movies="movies" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import useUserMovies from "../composables/useUserMovies";
import useMovieNameSearch from "../composables/useMovieNameSearch";
import useMovieSort from "../composables/useMovieSort";
import MovieList from "../components/MovieList.vue";
import ListBox from "../components/ListBox.vue";

export default {
  setup() {
    const sortOptions = [
      { id: 1, label: "Most Popular", value: "popularity" },
      { id: 2, label: "Name", value: "title" },
      { id: 3, label: "Release Date", value: "release_date" },
    ];

    const searchText = ref("");
    const sortOption = ref(sortOptions[0].value);

    const { movies, loading } = useUserMovies();
    const { moviesMatchingSearch } = useMovieNameSearch(searchText, movies);
    const { sortedMovies } = useMovieSort(sortOption, moviesMatchingSearch);

    const changeSort = (option) => {
      sortOption.value = option.value;
    };

    return {
      movies: sortedMovies,
      sortOptions,
      loading,
      searchText,
      changeSort,
    };
  },

  components: {
    MovieList,
    ListBox,
  },
};
</script>

<style lang="scss" scoped>
.movies-flex-layout {
  display: flex;
}

.movies-navigation {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  position: sticky;
  top: 0;
  left: 0;
  background: white;
  height: 100%;
  border-radius: 8px;
  margin: 1rem;

  .movies-navigation-item {
    padding: 0.5rem;
  }
}

.filter-controls-container {
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem 1rem 2rem;
  margin-top: 1rem;

  .search {
    width: 100%;
    max-width: 20rem;

    input {
      width: 100%;
    }
  }

  .sort {
    width: 100%;
    max-width: 10rem;
  }
}

.flex-1 {
  flex: 1;
}
</style>