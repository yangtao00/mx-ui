import { inBrowser, isElement } from '../utils';
import { ref, Ref, onMounted } from 'vue';

type ScrollElement = HTMLElement | Window;
const overflowScrollReg = /scroll|auto/i;
const defaultRoot = inBrowser ? window : undefined;

export function getScrollParent(
  el: Element,
  root: ScrollElement | undefined = defaultRoot
) {
  let node = el;
  while (node && node !== root && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowScrollReg.test(overflowY)) {
      return node;
    }
    node = node.parentNode as Element;
  }
  return root;
}

export function useScrollParent(
  el: Ref<Element | undefined>,
  root: ScrollElement | undefined = defaultRoot
) {
  const scrollParent = ref<Element | Window>();
  onMounted(() => {
    if (el.value) {
      scrollParent.value = getScrollParent(el.value, root);
    }
  });
  return scrollParent;
}