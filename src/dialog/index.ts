import { Dialog } from './function-call';

export default Dialog;
export { Dialog };
export type { DialogProps } from './Dialog';
export type { DialogMessage, DialogOptions, DialogMessageAlign } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    MxDialog: typeof Dialog.Component;
  }
}
