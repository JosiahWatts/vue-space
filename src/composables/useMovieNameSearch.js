import { computed, ref } from 'vue';

export default function useMovieNameSearch(searchText, movies) {
    const searchQuery = ref(searchText);
    
    const moviesMatchingSearch = computed(() => {
        if (!movies.value?.results) 
            return [];
        
        return movies.value.results.filter(movie => {
            return movie.title.toLowerCase().includes(searchQuery.value.toLowerCase());
        });
    });

    return  {
        moviesMatchingSearch
    };
}