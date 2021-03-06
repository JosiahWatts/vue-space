import { onMounted, ref } from 'vue';

export default function useUserMovies() {
    const movies = ref({});
    const loading = ref(false);

    const fetchOptions = {
        method: "GET",
        headers: {
          authorization: `Bearer ${process.env.VUE_APP_MOVIE_DB}`,
        },
      };
  
    const getUserMovies = async () => {
        loading.value = true;
        const result = await fetch("https://api.themoviedb.org/3/movie/popular", fetchOptions);
        const json = await result.json();
        
        movies.value = json;
        loading.value = false;
    }

    onMounted(getUserMovies);

      return {
          movies,
          loading,
          getUserMovies
      }
}