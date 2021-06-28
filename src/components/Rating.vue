<template>
  <button
    class="rating-button"
    :class="index <= rating ? 'solid' : ''"
    v-for="(_, index) in 5"
    @click="rate(index)"
    :key="index"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="star"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  </button>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup(_, context) {
    const rating = ref(-1);

    const rate = (index) => {
      rating.value = index;
    };

    watch(rating, () => {
      context.emit("on-rating-selected", rating.value);
    });

    return {
      rating,
      rate,
    };
  },
};
</script>

<style lang="scss">
.rating-button {
  background: none;
  color: var(--primary-500);
  border: none;
  display: inline-block;
  padding: 0;
  min-width: unset;
  margin-right: 6px;
  cursor: pointer;

  .star {
    height: var(--heading-5);
    width: var(--heading-5);
  }

  &.solid {
    .star {
      fill: var(--primary-500);
    }
  }
}
</style>