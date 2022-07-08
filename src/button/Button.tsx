import { defineComponent, type ExtractPropTypes } from 'vue';
import { createNamespace, makeStringProp, BORDER_SURROUND } from '../utils';

import { ButtonSize, ButtonType } from './types';

const [name, bem] = createNamespace('button');

export const buttonProps = {
  size: makeStringProp<ButtonSize>('medium'),
  type: makeStringProp<ButtonType>('default'),
  block: Boolean,
  square: Boolean,
  text: String,
  hairline: Boolean,
  disabled: Boolean,
  color: String,
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

export default defineComponent({
  name,
  props: buttonProps,
  emits: ['click'],
  setup(props, { emit, slots }) {
    const renderText = () => {
      const text = slots.default ? slots.default() : props.text;
      if (text) {
        return <span class={bem('text')}>{text}</span>;
      }
    };

    // 暂不支持自定义配色
    // const getStyle = () => {
    //   const { color, type } = props;
    //   const style: CSSProperties = {};
    //   return style;
    // };

    const onClick = (event: MouseEvent) => {
      if (!props.disabled) {
        emit('click', event);
      }
    };

    return () => {
      const { type, size, block, disabled, square, hairline } = props;

      const classes = [
        bem([
          type,
          size,
          {
            disabled,
            square,
            block,
            hairline,
          },
        ]),
        { [BORDER_SURROUND]: hairline },
      ];

      return (
        <button
          class={classes}
          // style={getStyle()}
          disabled={disabled}
          onClick={onClick}
        >
          <div class={bem('content')}>{renderText()}</div>
        </button>
      );
    };
  },
});
