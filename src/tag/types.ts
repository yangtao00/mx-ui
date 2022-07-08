import { makeStringProp, truthProp } from '../utils';
import { ExtractPropTypes } from 'vue';

export type TagType = 'coupon' | 'default';
export type TagSize = 'medium' | 'small';

export const tagProps = {
  mark: Boolean,
  show: truthProp,
  size: makeStringProp<TagSize>('small'),
  type: makeStringProp<TagType>('default'),
  color: String,
  textColor: String,
  round: Boolean,
};

export type TagProps = ExtractPropTypes<typeof tagProps>;
