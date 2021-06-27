<template>
  <div class="search-container">
    <h2>Looking for something to watch?</h2>
    <input
      type="text"
      name="search"
      id="search"
      placeholder="Search for a movie or TV show..."
    />
    <Button variant="primary">Search</Button>
  </div>
</template>

<script>
import Button from "../components/Button.vue";

export default {
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.search-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;

  h2 {
    margin-bottom: 1.5rem;
  }

  input {
    max-width: 80%;
    width: 100%;
    margin-bottom: 2rem;
  }
}
</style>