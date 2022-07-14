import { App, getCurrentInstance, ref, watch } from 'vue';
import { extend, inBrowser, isObject, withInstall } from '../utils';
import { mountComponent, usePopupState } from '../utils/mount-component';
import { ToastOptions, ToastType, ToastWrapperInstance } from './types';
import MxToast from './Toast';

const defaultOptions: ToastOptions = {
  icon: '',
  type: 'text',
  message: '',
  className: '',
  overlay: false,
  onClose: undefined,
  onOpened: undefined,
  duration: 2000,
  teleport: 'body',
  iconSize: undefined,
  iconPrefix: undefined,
  position: 'bottom',
  transition: 'mx-fade',
  forbidClick: false,
  overlayClass: '',
  overlayStyle: undefined,
  closeOnClick: false,
  closeOnClickOverlay: false,
};

let queue: ToastWrapperInstance[] = [];
let allowMultiple = false;
let currentOptions = extend({}, defaultOptions);

const defaultOptionsMap = new Map<string, ToastOptions>();

function parseOptions(message: string | ToastOptions): ToastOptions {
  if (isObject(message)) return message;
  return { message };
}

function createInstance() {
  const { instance, unmount } = mountComponent({
    setup() {
      const message = ref('');
      const { open, state, close, toggle } = usePopupState();
      const onClosed = () => {
        if (allowMultiple) {
          queue = queue.filter(item => item !== instance);
          unmount();
        }
      };
      const render = () => {
        const attrs: Record<string, unknown> = {
          onClosed,
          'onUpdate:show': toggle,
        };
        return <MxToast {...state} {...attrs} />;
      };
      watch(message, val => {
        state.message = val;
      });
      (getCurrentInstance() as any).render = render;
      return {
        open,
        clear: close,
        message,
      };
    },
  });
  return instance as ToastWrapperInstance;
}

function getInstnce() {
  if (!queue.length || allowMultiple) {
    const instance = createInstance();
    queue.push(instance);
  }
  return queue[queue.length - 1];
}

function Toast(options: string | ToastOptions = {}) {
  if (!inBrowser) return {} as ToastWrapperInstance;
  const toast = getInstnce();
  const parsedOptions = parseOptions(options);
  toast.open(
    extend(
      {},
      currentOptions,
      defaultOptionsMap.get(parsedOptions.type || currentOptions.type!),
      parsedOptions,
    ),
  );
  return toast;
}

const createMethod = (type: ToastType) => (options: string | ToastOptions) => {
  Toast(extend({ type }, parseOptions(options)));
};

Toast.loading = createMethod('loading');
Toast.success = createMethod('success');
Toast.fail = createMethod('fail');

Toast.clear = (all?: boolean) => {
  if (queue.length) {
    if (all) {
      queue.forEach(toast => {
        toast.clear();
      });
      queue = [];
    } else if (allowMultiple) {
      queue[0].clear();
    } else {
      queue.shift()?.clear();
    }
  }
};

function setDefaultOptions(options: ToastOptions): void;
function setDefaultOptions(type: ToastType, options: ToastOptions): void;
function setDefaultOptions(
  type: ToastType | ToastOptions,
  options?: ToastOptions,
) {
  if (typeof type === 'string') {
    defaultOptionsMap.set(type, options!);
  } else {
    extend(currentOptions, type);
  }
}
Toast.setDefaultOptions = setDefaultOptions;

Toast.resetDefaultOptions = (type?: ToastType) => {
  if (typeof type === 'string') {
    defaultOptionsMap.delete(type);
  } else {
    currentOptions = extend({}, defaultOptions);
    defaultOptionsMap.clear();
  }
};

Toast.allowMultiple = (val = true) => {
  allowMultiple = val;
};

Toast.install = (app: App) => {
  app.use(withInstall(MxToast));
  app.config.globalProperties.$toast = Toast;
};
Toast.Component = withInstall(MxToast);

export { Toast };
