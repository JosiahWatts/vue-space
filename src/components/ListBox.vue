<template>
  <Listbox v-model="selectedOption">
    <ListboxButton class="listbox-button">
      <span class="button-label">{{ selectedOption.label }}</span>
      <span class="button-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </span>
    </ListboxButton>
    <ListboxOptions class="listbox-options-container">
      <ListboxOption
        v-slot="{ active, selected }"
        v-for="option in items"
        :key="option"
        :value="option"
      >
        <div class="listbox-option" :class="active ? 'active' : ''">
          <span
            class="list-box-option-label"
            :class="selected ? 'selected' : ''"
            >{{ option.label }}</span
          >
        </div>
      </ListboxOption>
    </ListboxOptions>
  </Listbox>
</template>

<script>
import { ref, watch } from "vue";

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

export default {
  props: {
    items: Array,
  },

  components: {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  },

  emits: ["on-option-selected"],

  setup(props, context) {
    const selectedOption = ref(props.items[0] ?? null);

    watch(selectedOption, () => {
      context.emit("on-option-selected", selectedOption.value);
    });

    return {
      selectedOption,
    };
  },
};
</script>

<style lang="scss">
.listbox-button {
  position: relative;
  width: 100%;
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 8px;
  text-align: left;
  font-size: 13px;
  cursor: pointer;

  .button-icon {
    position: absolute;
    top: 10px;
    right: 7px;
    line-height: 0;

    svg {
      height: var(--base);
      width: var(--base);
    }
  }
}

.listbox-options-container {
  position: absolute;
  background: white;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  margin-top: 0.5rem;
  list-style: none;
  padding: 0;
  min-width: 12rem;
  z-index: 50;
  box-shadow: 0 4px 6px -1px #0000001a, 0 2px 4px -1px #0000000f;
}

.listbox-option {
  padding: 0.75rem 0.75rem;
  cursor: pointer;
  font-size: 13px;

  &:hover {
    background: #ffedd5;
  }
}
</style>