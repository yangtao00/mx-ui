import { App } from 'vue';
import { ComponentInstance, extend, inBrowser, withInstall } from '../utils';
import { mountComponent, usePopupState } from '../utils/mount-component';
import MxDialog from './Dialog';
import { DialogAction, DialogOptions } from './types';

let instance: ComponentInstance;

function initInstance() {
  const wrapper = {
    setup() {
      const { state, toggle } = usePopupState();
      return () => <MxDialog {...state} onUpdate:show={toggle} />;
    },
  };
  ({ instance } = mountComponent(wrapper));
}
function Dialog(options: DialogOptions) {
  if (!inBrowser) {
    return Promise.resolve();
  }
  return new Promise((resolve, reject) => {
    if (!instance) {
      initInstance();
    }
    instance.open(
      extend({}, Dialog.currentOptions, options, {
        callback: (action: DialogAction) => {
          (action === 'confirm' ? resolve : reject)(action);
        },
      }),
    );
  });
}

Dialog.defaultOptions = {
  title: '',
  width: '',
  message: '',
  overlay: true,
  callback: null,
  teleport: 'body',
  className: '',
  allowHtml: false,
  lockScroll: true,
  transition: undefined,
  beforeClose: null,
  overlayClass: '',
  overlayStyle: undefined,
  messageAlign: '',
  cancelButtonText: '',
  cancelButtonColor: null,
  cancelButtonDisabled: false,
  confirmButtonText: '',
  confirmButtonColor: null,
  confirmButtonDisabled: false,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnPopstate: true,
  closeOnClickOverlay: false,
};
Dialog.currentOptions = extend({}, Dialog.defaultOptions);

Dialog.alert = Dialog;

Dialog.confirm = (options: DialogOptions) => {
  Dialog(extend({ showCancelButton: true }, options));
};
Dialog.close = () => {
  if (instance) {
    instance.toggle(false);
  }
};
Dialog.setDefaultOptions = (options: DialogOptions) => {
  extend(Dialog.currentOptions, options);
};
Dialog.resetDefaultOptions = () => {
  Dialog.currentOptions = extend({}, Dialog.defaultOptions);
};
Dialog.Component = withInstall(MxDialog);
Dialog.install = (app: App) => {
  app.use(Dialog.Component);
  app.config.globalProperties.$dialog = Dialog;
};

export { Dialog };
