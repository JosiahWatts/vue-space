<template>
  <article class="review">
    <div class="review-heading">
      <div>
        <h5 class="review-title">{{ review.title }}</h5>
        <p class="review-author">Written by {{ review.author }}</p>
      </div>
    </div>
    <div class="review-content">
      <p>{{ review.content }}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    review: Object,
  },
};
</script>

<style lang="scss">
.review {
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 1rem;
}

.review-title {
  margin-bottom: 0.25rem;
}

.review-author {
  font-size: var(--small);
}

.reviews-link {
  color: var(--primary-500);
  font-size: var(--small);
}
</style>