<template>
  <div class="logify-scoped">
    <div :class="{ dark: dark }">
      <Filters />
      <log-table />
    </div>
  </div>
</template>

<script setup>
import { useDarkMode } from '../composables/useDarkMode';
import Filters from '../components/Filters.vue';
import LogTable from '../components/LogTable.vue';

const dark = useDarkMode();
</script>
