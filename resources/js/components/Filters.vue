<template>
  <div class="w-full flex justify-between items-center">
    <div class="w-1/3">
      <index-search-input
        :keyword="search.search.value"
        @update:keyword="updateKeyWord"
      />
    </div>
    <action-menu
      name="Levels"
      :options="logLevels.logLevels.value"
      @action="logLevelAction"
    />
  </div>
</template>

<script setup>
/**
 * @typedef {import('../types').DropdownItem} DropdownItem
 */
import ActionMenu from './ActionMenu.vue';
import { inject } from 'vue';
import { LOG_LEVEL_INJECT_KEY, SEARCH_INJECT_KEY } from '../config/keys';

const logLevels = inject(LOG_LEVEL_INJECT_KEY);
const search = inject(SEARCH_INJECT_KEY);

/**
 * @param {DropdownItem} option
 */
const logLevelAction = (option) => {
  logLevels.updateLogLevel((options) => {
    const fullOption = options.value.find((item) => item.id === option.id);
    if (fullOption) {
      fullOption.active = !fullOption.active;
    }
  });
};

const updateKeyWord = (value) => {
  search.updateSearch(value);
};
</script>
