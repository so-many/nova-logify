import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useDarkMode() {
  const observer = ref(null);
  const dark = ref(false);

  onMounted(() => {
    dark.value = document.documentElement.classList.contains('dark');

    observer.value = new MutationObserver((records) => {
      records.forEach((record) => {
        dark.value = record.target.classList.contains('dark');
      });
    });

    observer.value.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
      childList: false,
      characterData: false,
    });
  });

  onBeforeUnmount(() => {
    observer.value.disconnect();
    observer.value = null;
  });

  return dark;
}
