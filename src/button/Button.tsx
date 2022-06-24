import { defineComponent, type ExtractPropTypes, CSSProperties } from 'vue';
import { createNamespace, makeStringProp } from '../utils';

import { ButtonSize, ButtonType } from './types';

const [name, bem] = createNamespace('button');

export const buttonProps = {
  size: makeStringProp<ButtonSize>('medium'),
  type: makeStringProp<ButtonType>('default'),
  block: Boolean,
  round: Boolean,
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

    const getStyle = () => {
      const { color } = props;
      const style: CSSProperties = {};
      if (color) {
        style.color = color;
      }
      return style;
    };

    const onClick = (event: MouseEvent) => {
      if (!props.disabled) {
        emit('click', event);
      }
    };

    return () => {
      const { type, size, disabled, round, square } = props;

      const classes = [
        bem([
          type,
          size,
          {
            disabled,
            round,
            square,
          },
        ]),
      ];

      return (
        <button
          class={classes}
          style={getStyle()}
          disabled={disabled}
          onClick={onClick}
        >
          <div class={bem('content')}>{renderText()}</div>
        </button>
      );
    };
  },
});
