import { nextTick, onMounted, onActivated } from 'vue';

export function useMountedOrActivated(hook: () => any) {
  let mounted: boolean;

  onMounted(() => {
    hook();
    nextTick(() => {
      mounted = true;
    });
  });

  onActivated(() => {
    if (mounted) {
      hook();
    }
  });
}
