import { defineComponent } from 'vue';
import { createNamespace } from '../utils';

const [name, bem] = createNamespace('steps');
export default defineComponent({
  name,
  setup(props, { slots, emit }) {
    return () => <div class={bem()}>steps</div>;
  },
});
