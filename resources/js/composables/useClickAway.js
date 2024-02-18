import { useEventListener } from './useEventListener';

/**
 * close on click away
 * @param {Element} trigger
 * @param {() => void} callback
 * @param {Element} [exclude]
 *
 * @example
 * const trigger = ref(null);
 * const exclude = ref(null);
 * const show = ref(false);
 *
 * useClickAway(trigger, () => show.value = false, exclude);
 * @returns {void}
 */
export function useClickAway(trigger, callback, exclude) {
  const handler = (event) => {
    if (exclude && exclude.value.contains(event.target)) return;
    if (!trigger.value.contains(event.target)) {
      callback();
    }
  };

  useEventListener(document.body, 'mousedown', handler);
}
