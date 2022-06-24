import { ref } from 'vue';

type Direction = '' | 'vertical' | 'horizontal';

function getDirection(x: number, y: number) {
  if (x > y) {
    return 'horizontal';
  }
  if (y > x) {
    return 'vertical';
  }
  return '';
}

export function useTouch() {
  const startX = ref(0);
  const startY = ref(0);
  const deltaX = ref(0);
  const deltaY = ref(0);
  const offsetX = ref(0);
  const offsetY = ref(0);
  const direction = ref<Direction>('');
  const isVertical = () => direction.value === 'vertical';
  const isHorizontal = () => direction.value === 'horizontal';
  const reset = () => {
    deltaX.value = 0;
    deltaY.value = 0;
    offsetX.value = 0;
    offsetY.value = 0;
    direction.value = '';
  };
  const start = ((event: TouchEvent) => {
    reset();
    const { clientX, clientY } = event.touches[0];
    startX.value = clientX;
    startY.value = clientY;
  }) as EventListener;
  const move = ((event: TouchEvent) => {
    const { clientX, clientY } = event.touches[0];
    deltaX.value = (clientX < 0 ? 0 : clientX) - startX.value;
    deltaY.value = clientY - startY.value;
    offsetX.value = Math.abs(deltaX.value);
    offsetY.value = Math.abs(deltaY.value);

    const lock_move_distance = 10;
    if (
      !direction.value ||
      (offsetX.value < lock_move_distance && offsetY.value < lock_move_distance)
    ) {
      direction.value = getDirection(offsetX.value, offsetY.value);
    }
  }) as EventListener;
  return {
    startX,
    startY,
    deltaX,
    deltaY,
    offsetX,
    offsetY,
    direction,
    isVertical,
    isHorizontal,
    move,
    start,
    reset,
  };
}
