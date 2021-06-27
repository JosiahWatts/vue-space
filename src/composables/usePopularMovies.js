import { onMounted, ref } from 'vue';

export default function usePopularMovies(page = 1) {
    const movies = ref({});

    const fetchOptions = {
        method: "GET",
        headers: {
          authorization: `Bearer ${process.env.VUE_APP_MOVIE_DB}`,
        },
      };
  
    const getPopularMovies = async () => {
        const result = await fetch(`https://api.themoviedb.org/3/movie/popular?page=${page}`, fetchOptions);
        const json = await result.json();

        movies.value = json;
    }

    onMounted(getPopularMovies);

      return {
          movies,
          getUserMovies,
      }
}