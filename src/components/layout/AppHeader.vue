<template>
  <header>
    <h1>VueSpace</h1>
    <div class="link-container">
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link class="nav-link" to="/my-movies">My Movies</router-link>
      <router-link class="nav-link" event="" to="/browse">Search</router-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 2rem;

  h1 {
    margin-bottom: 0;
  }
}
</style>