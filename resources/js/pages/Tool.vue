<template>
  <div class="logify-scoped">
    <div :class="{ dark: dark }">
      <Filters />
    </div>
  </div>
</template>

<script setup>
import { useDarkMode } from '../composables/useDarkMode';
import Filters from '../components/Filters.vue';

const dark = useDarkMode();
</script>
