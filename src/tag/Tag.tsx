import { BORDER_SURROUND, createNamespace } from '../utils';
import {
  CSSProperties,
  defineComponent,
  ExtractPropTypes,
  PropType,
} from 'vue';
import { makeStringProp } from '../utils';

export type TagType = 'coupon' | 'default';
export type TagSize = 'medium' | 'small';
export const tagProps = {
  size: makeStringProp<TagSize>('small'),
  type: makeStringProp<TagType>('default'),
  color: String,
  textColor: String,
  borderColor: String,
  round: Boolean as PropType<boolean>,
  square: Boolean as PropType<boolean>,
  indicator: Boolean as PropType<boolean>,
  indicatorColor: String,
  hairline: Boolean as PropType<boolean>,
  prefixText: String,
  prefixTextColor: String,
};
export type TagProps = ExtractPropTypes<typeof tagProps>;

const [name, bem] = createNamespace('tag');

export default defineComponent({
  name,
  props: tagProps,
  setup(props, { slots }) {
    const getStyle = (): CSSProperties => ({
      color: props.textColor,
      borderColor: props.borderColor,
      backgroundColor: props.color,
    });
    const renderIndicator = () => (
      <div
        style={{ background: props.indicatorColor }}
        class={bem('indicator')}
      ></div>
    );
    const renderPrefixText = () => (
      <div class={bem('prefix')} style={{ background: props.prefixTextColor }}>
        {props.prefixText}
      </div>
    );
    const renderCoupun = () => (
      <div class={bem('coupon')}>
        <div
          class={[
            bem([
              props.size,
              props.type,
              {
                square: props.square,
                hairline: props.hairline,
                border: props.borderColor,
              },
            ]),
            { [BORDER_SURROUND]: props.hairline },
          ]}
          style={getStyle()}
        >
          {props.indicatorColor ? renderIndicator() : null}
          {props.prefixText ? renderPrefixText() : null}
          <div class={bem('text')}>{slots.default?.()}</div>
        </div>
      </div>
    );
    return () =>
      props.type === 'coupon' ? (
        renderCoupun()
      ) : (
        <div
          class={[
            bem([
              props.size,
              props.type,
              {
                square: props.square,
                hairline: props.hairline,
                border: props.borderColor,
              },
            ]),
            { [BORDER_SURROUND]: props.hairline },
          ]}
          style={getStyle()}
        >
          {props.indicatorColor ? renderIndicator() : null}
          {props.prefixText ? renderPrefixText() : null}
          <div class={bem('text')}>{slots.default?.()}</div>
        </div>
      );
  },
});
