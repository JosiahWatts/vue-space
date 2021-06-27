<template>
  <div class="app">
    <header class="layout-heading">
      <h1>VueSpace</h1>
      <div class="link-container">
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/my-movies">My Movies</router-link>
        <router-link class="nav-link" event="" to="/browse">Browse</router-link>
      </div>
    </header>
    <div class="layout">
      <div class="content container">
        <main>
          <router-view></router-view>
        </main>
      </div>
    </div>
    <footer>
      Made with ☕ by
      <a
        class="nav-link"
        href="https://www.github.com/josiahwatts"
        target="_blank"
        >Josiah Watts</a
      >
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "./assets/styles/main.scss";

.app {
  max-width: 1100px;
  margin: 0 auto;
}

.layout-heading {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 2rem;

  h1 {
    margin-bottom: 0;
  }
}

.nav-link {
  font-weight: 700;
  margin-right: 1rem;
  text-decoration: none;
  color: var(--font-color);

  &.router-link-active {
    color: var(--primary-500);
  }

  &:hover {
    text-decoration: underline;
    color: var(--primary-600);
  }
}

.layout {
  display: flex;
  margin: 2rem 0;

  .content {
    flex: 1;
    background: white;
    border-radius: 8px;
  }
}

footer {
  text-align: center;
}
</style>
