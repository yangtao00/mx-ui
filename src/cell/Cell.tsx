import {
  createNamespace,
  extend,
  isDef,
  numericProp,
  truthProp,
  unknownProp,
} from '../utils';
import {
  CSSProperties,
  defineComponent,
  ExtractPropTypes,
  PropType,
} from 'vue';
import { routeProps, useRoute } from '../composables/use-route';

const [name, bem] = createNamespace('cell');

export type CellArrowDirection = 'up' | 'down' | 'left' | 'right';
export const cellSharedProps = {
  icon: String,
  title: numericProp,
  label: numericProp,
  value: numericProp,
  center: Boolean,
  isLink: Boolean,
  border: truthProp,
  required: Boolean,
  iconPrefix: String,
  valueClass: unknownProp,
  labelClass: unknownProp,
  titleClass: unknownProp,
  titleStyle: null as unknown as PropType<string | CSSProperties>,
  arrowDirection: String as PropType<CellArrowDirection>,
  clickable: {
    type: Boolean as PropType<boolean | null>,
    default: null,
  },
};

const cellProps = extend({}, cellSharedProps, routeProps);

export type CellProps = ExtractPropTypes<typeof cellProps>;

export default defineComponent({
  name,
  props: cellProps,
  setup(props, { emit, slots }) {
    const route = useRoute();

    const renderLabel = () => {
      const showLabel = slots.label || isDef(props.label);

      if (showLabel) {
        return (
          <div class={[bem('label'), props.labelClass]}>
            {slots.label ? slots.label() : props.label}
          </div>
        );
      }
    };

    const renderTitle = () => {
      if (slots.title || isDef(props.title)) {
        return (
          <div
            class={[bem('title'), props.titleClass]}
            style={props.titleStyle}
          >
            {slots.title ? slots.title() : <span>{props.title}</span>}
            {renderLabel()}
          </div>
        );
      }
    };

    const renderValue = () => {
      // slots.default is an alias of slots.value
      const slot = slots.value || slots.default;
      const hasValue = slot || isDef(props.value);

      if (hasValue) {
        const hasTitle = slots.title || isDef(props.title);
        return (
          <div class={[bem('value', { alone: !hasTitle }), props.valueClass]}>
            {slot ? slot() : <span>{props.value}</span>}
          </div>
        );
      }
    };
    return () => {
      const { center, border, isLink, required } = props;
      const clickable = props.clickable ?? isLink;

      const classes: Record<string, boolean | undefined> = {
        center,
        required,
        clickable,
        borderless: !border,
      };

      return (
        <div
          class={bem(classes)}
          role={clickable ? 'button' : undefined}
          tabindex={clickable ? 0 : undefined}
          onClick={route}
        >
          {renderTitle()}
          {renderValue()}
          {slots.extra?.()}
        </div>
      );
    };
  },
});
