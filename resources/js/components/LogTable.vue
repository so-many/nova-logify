<template>
  <div role="grid" class="rounded-full grid mt-8 grid-cols-12">
    <div class="col-span-1 py-2 pl-2">Level</div>
    <div class="col-span-2 py-2">Date</div>
    <div class="col-span-5 py-2">Message</div>
    <div class="col-span-3 py-2 pr-2">Context</div>
    <div
      class="grid-cols-12 hover:bg-gray-950 grid rounded-full col-span-12 gap-4"
      v-for="log in logs.data"
      :key="log.id"
    >
      <div class="col-span-1 truncate py-2 pl-2">{{ log.level }}</div>
      <div class="col-span-2 truncate py-2">
        {{ new Date(log.date).toLocaleString() }}
      </div>
      <div class="col-span-5 truncate py-2">{{ log.message }}</div>
      <div class="transition-all ease-linear truncate col-span-3 py-2 pr-2">
        {{ log.context }}
      </div>
      <!--  -->
      <div class="col-span-1 flex gap-x-1 items-center">
        <a
          :href="`/nova/resources/${log.resource}/${log.resourceId}`"
          class="hover:text-blue-700"
          v-tooltip.click="__('View')"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import { LOGS_INJECT_KEY } from '../config/keys';

const logs = inject(LOGS_INJECT_KEY);
</script>
