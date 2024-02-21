import { watch, ref } from 'vue';
/**
 * @typedef {import('axios').AxiosRequestConfig} AxiosRequestConfig
 *
 */

/**
 * @param {string} url
 * @param {any[]} [dependencies=[]]
 * @param {AxiosRequestConfig} [config]
 */

export const useGet = (url, dependencies = [], config) => {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(true);
  watch(
    [url, ...dependencies],
    async () => {
      try {
        const response = await Nova.request().get(url, config);
        data.value = response.data;
      } catch (err) {
        error.value = err;
        Nova.error('Getting logs failed with error: ' + err);
      } finally {
        loading.value = false;
      }
    },
    {
      immediate: true,
    }
  );

  return { data, error, loading };
};
