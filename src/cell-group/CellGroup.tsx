import { defineComponent } from 'vue';
import { createNamespace } from '../utils';

const [name, bem] = createNamespace('cell-group');

export default defineComponent({
  name,
  inheritAttrs: false,

  setup(props, { slots, attrs }) {
    const renderGroup = () => (
      <div class={[bem()]} {...attrs}>
        {slots.default?.()}
      </div>
    );
    return () => renderGroup();
  },
});
