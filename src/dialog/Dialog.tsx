import {
  defineComponent,
  ExtractPropTypes,
  PropType,
  reactive,
  ref,
  withKeys,
} from 'vue';
import { popupSharedPropKeys, popupSharedProps } from '../popup/shared';
import {
  addUnit,
  BORDER_LEFT,
  BORDER_TOP,
  callInterceptor,
  ComponentInstance,
  createNamespace,
  extend,
  isFunction,
  makeStringProp,
  noop,
  numericProp,
  pick,
  truthProp,
  unknownProp,
} from '../utils';
import { DialogAction, DialogMessage, DialogMessageAlign } from './types';
import Button from '../button';
import Popup from '../popup';

const [name, bem] = createNamespace('dialog');
const dialogProps = extend({}, popupSharedProps, {
  title: String,
  width: numericProp,
  message: [String, Function] as PropType<DialogMessage>,
  callback: Function as PropType<(action?: DialogAction) => void>,
  allowHtml: Boolean,
  className: unknownProp,
  transition: makeStringProp('mx-dialog-bounce'),
  messageAlign: String as PropType<DialogMessageAlign>,
  closeOnPopstate: truthProp,
  showCancelButton: Boolean,
  cancelButtonText: String,
  cancelButtonColor: String,
  cancelButtonDisabled: Boolean,
  confirmButtonText: String,
  confirmButtonColor: String,
  confirmButtonDisabled: Boolean,
  showConfirmButton: truthProp,
  closeOnClickOverlay: Boolean,
});
export type DialogProps = ExtractPropTypes<typeof dialogProps>;

const popupInheritKeys = [
  ...popupSharedPropKeys,
  'transition',
  'closeOnPopstate',
] as const;
export default defineComponent({
  name,
  props: dialogProps,
  emits: ['confirm', 'cancel', 'keydown', 'update:show'],

  setup(props, { emit, slots }) {
    const root = ref<ComponentInstance>();
    const loading = reactive({
      confirm: false,
      cancel: false,
    });
    const updateShow = (val: boolean) => emit('update:show', val);

    const close = (action: DialogAction) => {
      updateShow(false), props.callback?.(action);
    };

    const getActionHandler = (action: DialogAction) => () => {
      if (!props.show) return;
      emit(action);
      if (props.beforeClose) {
        loading[action] = true;
        callInterceptor(props.beforeClose, {
          args: [action],
          done() {
            close(action);
            loading[action] = false;
          },
          canceld() {
            loading[action] = false;
          },
        });
      } else {
        close(action);
      }
    };
    const onCancel = getActionHandler('cancel');
    const onConfirm = getActionHandler('confirm');
    const onKeydown = withKeys(
      (event: KeyboardEvent) => {
        // skip keyboard events of child elements
        if (event.target !== root.value?.popupRef?.value) {
          return;
        }

        const onEventType: Record<string, () => void> = {
          Enter: props.showConfirmButton ? onConfirm : noop,
          Escape: props.showCancelButton ? onCancel : noop,
        };

        onEventType[event.key]();
        emit('keydown', event);
      },
      ['enter', 'esc'],
    );

    const renderTitle = () => {
      const title = slots.title ? slots.title() : props.title;
      if (title) {
        return <div class={bem('header')}>{title}</div>;
      }
    };
    const renderMessage = () => {
      const { message, allowHtml, messageAlign } = props;
      const classNames = bem('message', {
        [messageAlign as string]: messageAlign,
      });
      const content = isFunction(message) ? message() : message;
      if (allowHtml && typeof content === 'string') {
        return <div class={classNames} innerHTML={content} />;
      }
      return <div class={classNames}>{content}</div>;
    };
    const renderContent = () => {
      const { title, message, allowHtml } = props;
      const hasTitle = !!(title || slots.title);
      if (slots.default) {
        return (
          <div class={bem('content', { 'has-title': hasTitle })}>
            {slots.default()}
          </div>
        );
      }

      if (message) {
        return (
          <div
            key={allowHtml ? 1 : 0}
            class={bem('content', {
              'has-title': hasTitle,
            })}
          >
            {renderMessage()}
          </div>
        );
      }
    };
    const renderButtons = () => (
      <div class={[BORDER_TOP, bem('footer')]}>
        {props.showCancelButton && (
          <Button
            text={props.confirmButtonText || '取消'}
            class={bem('cancel')}
            style={{ color: props.cancelButtonColor }}
            disabled={props.cancelButtonDisabled}
            onClick={onCancel}
          />
        )}
        {props.showConfirmButton && (
          <Button
            text={props.confirmButtonText || '确认'}
            class={[bem('confirm'), { [BORDER_LEFT]: props.showCancelButton }]}
            style={{ color: props.confirmButtonColor }}
            disabled={props.confirmButtonDisabled}
            onClick={onConfirm}
          />
        )}
      </div>
    );
    const renderFooter = () => {
      if (slots.footer) {
        return slots.footer();
      }
      return renderButtons();
    };
    return () => {
      const { width, title, message, className } = props;
      return (
        <Popup
          ref={root}
          role="dialog"
          class={[bem(), className]}
          style={{ width: addUnit(width) }}
          tabindex={0}
          aria-labelledby={title || message}
          onKeydown={onKeydown}
          onUpdate:show={updateShow}
          {...pick(props, popupInheritKeys)}
        >
          {renderTitle()}
          {renderContent()}
          {renderFooter()}
        </Popup>
      );
    };
  },
});
