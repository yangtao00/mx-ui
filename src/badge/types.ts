import { ExtractPropTypes, PropType } from 'vue';
import { makeStringProp, numericProp, Numeric, truthProp } from '../utils';

export type BadgePosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export const badgeProps = {
  dot: Boolean,
  max: numericProp,
  tag: makeStringProp<keyof HTMLElementTagNameMap>('div'),
  color: String,
  offset: Array as unknown as PropType<[Numeric, Numeric]>,
  content: numericProp,
  showZero: truthProp,
  position: makeStringProp<BadgePosition>('top-right'),
};
export type BadgeProps = ExtractPropTypes<typeof badgeProps>;
