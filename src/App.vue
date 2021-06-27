<template>
  <div class="app-layout">
    <AppHeader />
    <div class="layout">
      <main class="content">
        <router-view></router-view>
      </main>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss">
@import "./assets/styles/main.scss";

.app-layout {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
}

.layout {
  display: flex;
  margin: 2rem 0;
  min-height: calc(100vh - 250px);

  .content {
    flex: 1;
    background: white;
    border-radius: 8px;
  }

  main {
    min-height: 100%;
  }
}
</style>
