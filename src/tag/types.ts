import { makeStringProp, truthProp } from '../utils';
import { ExtractPropTypes } from 'vue';

export type TagType = 'coupon' | 'default';
export type TagSize = 'md' | 'sm';

export const tagProps = {
  mark: Boolean,
  show: truthProp,
  size: makeStringProp<TagSize>('sm'),
  type: makeStringProp<TagType>('default'),
  color: String,
  textColor: String,
  round: Boolean,
};

export type TagProps = ExtractPropTypes<typeof tagProps>;
