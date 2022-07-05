import { addUnit, createNamespace, isDef, isNumeric } from '../utils';
import { computed, CSSProperties, defineComponent } from 'vue';
import { badgeProps } from './types';

const [name, bem] = createNamespace('badge');

export default defineComponent({
  name,
  props: badgeProps,

  setup(props, { slots }) {
    const hasContent = () => {
      if (slots.content) {
        return true;
      }
      const { content, showZero } = props;
      return isDef(content) && content !== '' && (showZero || content !== 0);
    };

    const renderContent = () => {
      const { dot, max, content } = props;
      if (!dot && hasContent()) {
        if (slots.content) {
          return slots.content();
        }
        if (isDef(max) && isNumeric(content!) && +content > max) {
          return `${max}+`;
        }
        return content;
      }
    };

    const style = computed(() => {
      const style: CSSProperties = {
        background: props.color,
      };
      if (props.offset) {
        const [x, y] = props.offset;
        if (slots.default) {
          style.top = addUnit(y);
          if (typeof x === 'number') {
            style.right = addUnit(-x);
          } else {
            style.right = x.startsWith('-') ? x.replace('-', '') : `-${x}`;
          }
        } else {
          style.marginTop = addUnit(y);
          style.marginLeft = addUnit(x);
        }
      }
      return style;
    });

    const renderBadge = () => {
      if (hasContent() || props.dot) {
        return (
          <div
            class={bem([
              props.position,
              { dot: props.dot, fixed: !!slots.default },
            ])}
            style={style.value}
          >
            {renderContent()}
          </div>
        );
      }
    };

    return () => {
      if (slots.default) {
        const { tag } = props;
        return (
          <tag class={bem('wrapper')}>
            {slots.default()}
            {renderBadge()}
          </tag>
        );
      }
      return renderBadge();
    };
  },
});
