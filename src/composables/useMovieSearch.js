import { ref } from 'vue';

export default function useUserMovies() {
    const movies = ref([]);
    const loading = ref(false);

    const fetchOptions = {
        method: "GET",
        headers: {
          authorization: `Bearer ${process.env.VUE_APP_MOVIE_DB}`,
        },
      };
  
    const getMoviesBySearchQuery = async (query, page) => {
        loading.value = true;
        const result = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}&include_adult=false&language=en-US`, fetchOptions);
        const json = await result.json();
        
        movies.value = json.results;
        loading.value = false;
    }

    return {
          movies,
          loading,
          getMoviesBySearchQuery
      }
}