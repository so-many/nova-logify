import { useGet } from './composables/useGet';
import { LOG_LEVELS } from './config/constants';
import {
  LOGS_INJECT_KEY,
  LOG_LEVEL_INJECT_KEY,
  SEARCH_INJECT_KEY,
} from './config/keys';
import Tool from './pages/Tool';
import { ref, readonly } from 'vue';
/**
 * @typedef {import('./types').DropdownItem} DropdownItem
 */

Nova.booting((app, store) => {
  Nova.inertia('NovaLogify', Tool);
  const search = ref('');
  const logLevels = ref(LOG_LEVELS);
  const logs = useGet('/nova-vendor/nova-logify', [search, logLevels]);

  const updateSearch = (value) => {
    search.value = value;
  };

  /**
   *
   * @param {(val: DropdownItem[]) =>void} callback
   */
  const updateLogLevel = (callback) => {
    callback(logLevels);
  };

  app.provide(SEARCH_INJECT_KEY, {
    search: readonly(search),
    updateSearch,
  });
  app.provide(LOG_LEVEL_INJECT_KEY, {
    logLevels: readonly(logLevels),
    updateLogLevel,
  });
  app.provide(LOGS_INJECT_KEY, readonly(logs.data));
});
