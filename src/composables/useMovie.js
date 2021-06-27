import { onMounted, ref } from 'vue';

export default function useMovie(id) {
    const movie = ref({});
    const loading = ref(false);

    const fetchOptions = {
        method: "GET",
        headers: {
          authorization: `Bearer ${process.env.VUE_APP_MOVIE_DB}`,
        },
      };
  
    const getMovieById = async () => {
        if (!id) {
            movie.value = null;
            return;
        }

        loading.value = true;
        const result = await fetch(`https://api.themoviedb.org/3/movie/${id}`, fetchOptions);
        const json = await result.json();
        
        movie.value = json;
        loading.value = false;
    }

    onMounted(getMovieById);

      return {
          movie,
          loading,
          getMovieById
      }
}