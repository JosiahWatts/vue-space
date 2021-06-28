<template>
  <p v-if="loading">Loading...</p>

  <div class="details-wrapper">
    <section class="movie-details-container">
      <div class="poster-container">
        <img
          :src="`http://image.tmdb.org/t/p/w300${movie.poster_path}`"
          :alt="movie.title"
        />
        <div class="watch-option-wrapper">
          <ListBox :items="watchOptions" @on-option-selected="onWatchUpdate" />
        </div>
      </div>
      <div class="movie-details">
        <h5>
          {{ movie.title }}
          <span v-if="releaseYear">({{ releaseYear }})</span>
        </h5>
        <p class="genres">{{ genres }}</p>
        <p class="certification">PG</p>
        <div class="rating">
          <Rating />
          <span>300 ratings</span> <span>20 Reviews</span>
        </div>
        <p class="overview">{{ movie.overview }}</p>
      </div>
    </section>
    <section class="movie-reviews-container">
      <h5>Reviews:</h5>
      <Review :review="mockReview" />
      <div class="review-button-container">
        <a href="#" class="nav-link reviews-link">Read all reviews</a>
        <a href="#" class="nav-link reviews-link">Write a review</a>
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from "vue";

import useMovie from "../composables/useMovie";

import Rating from "../components/Rating.vue";
import ListBox from "../components/ListBox.vue";
import Review from "../components/Review.vue";

import { watchOptions } from "../lib/watchOptions";

export default {
  props: {
    movieId: String,
  },

  components: {
    Rating,
    ListBox,
    Review,
  },

  setup(props) {
    const mockReview = {
      title: "Best Movie Ever!!!",
      author: "Bob Smith",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, odit, ipsum dolor enim non quaerat corporis provident, ratione voluptates fuga officia nulla sint. Optio recusandae numquam vitae atque, porro alias.",
    };

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

    const onWatchUpdate = (selectedOption) => {
      console.log("new selection", selectedOption);
    };

    return {
      movie,
      genres,
      releaseYear,
      loading,
      watchOptions,
      onWatchUpdate,
      mockReview,
    };
  },
};
</script>

<style lang="scss" scoped>
.details-wrapper {
  padding: 3rem;
}

.poster-container {
  display: flex;
  flex-direction: column;

  .watch-option-wrapper {
    margin-top: 1rem;
    width: 100%;
  }
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
  margin-top: 3rem;

  h5 {
    margin-bottom: 0.25rem;
  }

  .review-button-container {
    margin-top: 0.25rem;
  }
}
</style>