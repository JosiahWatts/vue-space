import { onMounted, ref } from 'vue';

export default function useUserMovies() {
    const movies = ref({});

    const fetchOptions = {
        method: "GET",
        headers: {
          authorization: `Bearer ${process.env.VUE_APP_MOVIE_DB}`,
        },
      };
  
    const getUserMovies = async () => {
        const result = await fetch("https://api.themoviedb.org/3/movie/550", fetchOptions);
        const json = await result.json();

        movies.value = json;
    }

    onMounted(getUserMovies);

      return {
          movies,
          getUserMovies
      }
}