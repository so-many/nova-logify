import { useEventListener } from './useEventListener';

/**
 * Closes the modal when the escape key is pressed.
 * @param {() => void} callback
 */
export function useCloseOnEscape(callback) {
  useEventListener(document, 'keydown', (event) => {
    if (event.key === 'Escape') {
      callback();
    }
  });
}
