import { Ref, unref } from 'vue';
import { useWindowSize } from '../composables/use-window-size';

export const stopPropagation = (event: Event) => event.stopPropagation();

export function preventDefault(event: Event, isStopPropagation?: boolean) {
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }
  if (isStopPropagation) {
    stopPropagation(event);
  }
}

export function isHidden(
  elementRef: HTMLElement | Ref<HTMLElement | undefined>,
) {
  const el = unref(elementRef);
  if (!el) return false;

  const style = window.getComputedStyle(el);
  const hidden = style.display === 'none';

  // offsetParent returns null in the following situations:
  // 1. The element or its parent element has the display property set to none.
  // 2. The element has the position property set to fixed
  const parentHidden = el.offsetParent === null && style.position !== 'fixed';

  return hidden || parentHidden;
}

export const { width: windowWidth, height: windowHeight } = useWindowSize();
