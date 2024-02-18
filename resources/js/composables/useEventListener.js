import { onMounted, onUnmounted } from 'vue';

/**
 * @param {HTMLElement} element
 * @param {keyof HTMLElementEventMap} event
 * @param {(event: Event) => void} callback
 */
export function useEventListener(element, event, callback) {
  onMounted(() => element.addEventListener(event, callback));
  onUnmounted(() => element.removeEventListener(event, callback));
}
