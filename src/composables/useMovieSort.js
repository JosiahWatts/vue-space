import { computed } from '@vue/runtime-core';
import { ref } from 'vue';

export default function useMovieSort(sortKey = '', movies) {

    const sortProperty = ref(sortKey);

    const sortedMovies = computed(() => {

        if (!movies.value) return [];

        if (!sortProperty.value) return movies;

        const sorted = movies.value.sort((a, b) => {

            if (typeof a[sortProperty.value] === 'string') {
                const sortableA = a[sortProperty.value]?.toUpperCase();
                const sortableB = b[sortProperty.value]?.toUpperCase();

                if (!sortableA) return 1;
                if (!sortableB) return -1;

                if (sortableA < sortableB) {
                    return -1;
                }
                if (sortableA > sortableB) {
                    return 1;
                }

                return 0;
            }
            else if (typeof a[sortProperty.value] === 'number') {
                return b[sortProperty.value] - a[sortProperty.value];
            }
        });

        return [...sorted];
    });

    return {
        sortedMovies
    }
}