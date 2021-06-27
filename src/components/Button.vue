<template>
  <button :class="variant">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    variant: String,
  },
};
</script>

<style lang="scss" scoped>
button {
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 8px 32px;
  cursor: pointer;
  font-weight: 500;
}

.primary {
  background: var(--primary-500);

  &:hover {
    background: var(--primary-600);
  }
}
</style>