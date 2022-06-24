import { withInstall } from '../utils';
import _Button from './Button';

export const Button = withInstall(_Button);
export default Button;
export type { ButtonProps } from './Button';
export type { ButtonType, ButtonSize, ButtonNativeType } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    MxButton: typeof Button;
  }
}
