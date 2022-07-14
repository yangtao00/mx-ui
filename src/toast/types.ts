import { ComponentPublicInstance, TeleportProps } from 'vue';
import { Numeric } from '../utils';

export type ToastType = 'text' | 'loading' | 'success' | 'fail' | 'html';
export type ToastPosition = 'top' | 'middle' | 'bottom';

export type ToastOptions = {
  icon?: string;
  type?: ToastType;
  mask?: boolean;
  message?: Numeric;
  onClose?: () => void;
  onOpened?: () => void;
  overlay?: boolean;
  duration?: number;
  teleport?: TeleportProps['to'];
  iconSize?: Numeric;
  position?: ToastPosition;
  className?: unknown;
  transition?: string;
  iconPrefix?: string;
  forbidClick?: boolean;
  closeOnClick?: boolean;
  overlayClass?: unknown;
  overlayStyle?: Record<string, any>;
  closeOnClickOverlay?: boolean;
};

export type ToastWrapperInstance = ComponentPublicInstance<
  { message: Numeric },
  {
    clear: () => void;
    open: (props: Record<string, any>) => void;
  }
>;
