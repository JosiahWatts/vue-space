<template>
  <p v-if="loading">Loading...</p>

  <div class="details-wrapper">
    <section class="movie-details-container">
      <img
        :src="`http://image.tmdb.org/t/p/w300${movie.poster_path}`"
        :alt="movie.title"
      />
      <div class="movie-details">
        <h5>
          {{ movie.title }}
          <span v-if="releaseYear">({{ releaseYear }})</span>
        </h5>
        <p class="genres">{{ genres }}</p>
        <p class="certification">PG</p>
        <div class="rating">
          <StarRating />
          <span>300 ratings</span> <span>20 Reviews</span>
        </div>
        <p class="overview">{{ movie.overview }}</p>
      </div>
    </section>

    <section class="movie-reviews-container">
      <h5>Reviews:</h5>
      <div class="review">
        <div class="review-heading">
          <div>
            <h5 class="review-title">Best Movie Ever!!</h5>
            <p class="review-author">Written by Bob Smith</p>
          </div>
        </div>
        <div class="review-content">
          <p>
            YOLO succulents mlkshk tumblr. Polaroid you probably haven't heard
            of them tofu whatever flexitarian freegan. Cold-pressed live-edge
            bicycle rights, vegan four loko shabby chic hexagon four dollar
            toast you probably haven't heard of them kale chips authentic vinyl.
            Prism chia irony flannel.
          </p>
        </div>
      </div>
      <a href="#" class="nav-link reviews-link">Read all reviews</a>
      <a href="#" class="nav-link reviews-link">Write a review</a>
    </section>
  </div>
</template>

<script>
import { computed } from "vue";
import useMovie from "../composables/useMovie";
import StarRating from "../components/StarRating.vue";

export default {
  props: {
    movieId: String,
  },
  setup(props) {
    const { movie, loading } = useMovie(props.movieId);

    const releaseYear = computed(() => {
      if (!movie || !movie.value.release_date) return "Not Released";

      const date = new Date(movie.value.release_date);
      return date.getFullYear();
    });

    const genres = computed(() => {
      if (!movie) return [];
      return movie.value.genres?.map((x) => x.name).join(" | ");
    });

    return {
      movie,
      genres,
      releaseYear,
      loading,
    };
  },
  components: {
    StarRating,
  },
};
</script>

<style lang="scss" scoped>
.details-wrapper {
  padding: 3rem;
}

.movie-details-container {
  display: flex;

  h5 {
    margin-bottom: 0.25rem;

    span {
      font-family: inherit;
    }
  }

  .movie-details {
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .genres,
  .certification {
    margin-bottom: 0.25rem;
    font-size: var(--small);
  }

  .rating {
    margin-top: 0.5rem;
    display: flex;
  }

  .overview {
    margin-top: 1rem;
  }

  .rating {
    span {
      font-size: var(--small);
      font-weight: 500;
      margin-left: 1rem;
    }
  }

  img {
    height: 250px;
    width: auto;
  }
}

.movie-reviews-container {
  margin-top: 2rem;

  h5 {
    margin-bottom: 0.25rem;
  }
}

.review {
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 1rem;
}

.review-author {
  font-size: var(--small);
}

.reviews-link {
  color: var(--primary-500);
  font-size: var(--small);
}
</style>