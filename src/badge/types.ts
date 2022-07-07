import { ExtractPropTypes, PropType } from 'vue';
import { makeStringProp, numericProp, Numeric, truthProp } from '../utils';

export const badgeProps = {
  dot: Boolean,
  max: numericProp,
  tag: makeStringProp<keyof HTMLElementTagNameMap>('div'),
  color: String,
  border: Boolean,
  offset: Array as unknown as PropType<[Numeric, Numeric]>,
  content: numericProp,
  showZero: truthProp,
};
export type BadgeProps = ExtractPropTypes<typeof badgeProps>;
