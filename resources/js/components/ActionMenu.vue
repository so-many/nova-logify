<template>
  <div class="relative">
    <button
      class="flex gap-x-2 items-center px-2 py-1.5 rounded-lg dark:hover:bg-gray-950 hover:bg-gray-700 hover:bg-opacity-5"
      has-popup="true"
      @click="toggle"
      role="button"
      type="button"
      ref="toggler"
    >
      <span>{{ props.name }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        class="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <ul
      class="dark:border-gray-700 border border-gray-200 absolute top-full overflow-hidden dark:shadow-none shadow-lg right-0 mt-1 rounded-lg"
      :class="{ hidden: !open }"
      ref="dropdown"
    >
      <li
        v-for="option in props.options"
        :key="option.id"
        class="dark:hover:bg-gray-950 hover:bg-gray-700 hover:bg-opacity-5 bg-white dark:bg-gray-900"
        role="none"
      >
        <button
          class="flex gap-x-2 items-center px-3 py-1.5 justify-between w-full"
          :style="{ color: option.color }"
          role="button"
          type="button"
          @click="action(option)"
        >
          <span>{{ option.value }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            :aria-checked="option.active ? 'true' : 'false'"
            stroke="green"
            :aria-hidden="!option.active"
            class="w-6 h-6"
            :class="{ 'opacity-0': !option.active }"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import { useCloseOnEscape } from '../composables/useCloseOnEscape';
import { useClickAway } from '../composables/useClickAway';
/**
 * @typedef {import('../types').DropdownItem} DropdownItem
 * /
/**
 * @type {{
 *   name: string;
 *   options: DropdownItem[]
 * }}
 */
const props = defineProps({
  name: {
    type: String,
    required: Boolean,
  },
  options: {
    type: Array,
    required: true,
  },
});
const emits = defineEmits(['action']);
const dropdown = ref(null);
const toggler = ref(null);
const open = ref(false);
useCloseOnEscape(() => (open.value = false));
useClickAway(dropdown, () => (open.value = false), toggler);

const toggle = () => {
  open.value = !open.value;
};

/**
 * @param {DropdownItem} option
 *
 */
const action = (option) => {
  emits('action', option);
};
</script>
