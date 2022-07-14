import { onMounted, onUnmounted, watch } from 'vue';
import {
  CSSProperties,
  defineComponent,
  ExtractPropTypes,
  PropType,
  TeleportProps,
} from 'vue';
import Popup from '../popup';
import {
  createNamespace,
  isDef,
  makeNumberProp,
  makeStringProp,
  numericProp,
  pick,
  unknownProp,
} from '../utils';
import { lockClick } from './lock-click';
import { ToastPosition, ToastType } from './types';

const [name, bem] = createNamespace('toast');
const toastProps = {
  icon: String,
  show: Boolean,
  type: makeStringProp<ToastType>('text'),
  overlay: Boolean,
  message: numericProp,
  iconSize: numericProp,
  duration: makeNumberProp(2000),
  position: makeStringProp<ToastPosition>('bottom'),
  teleport: [String, Object] as PropType<TeleportProps['to']>,
  className: unknownProp,
  iconPrefix: String,
  transition: makeStringProp('mx-fade'),
  forbidClick: Boolean,
  overlayClass: unknownProp,
  overlayStyle: Object as PropType<CSSProperties>,
  closeOnClick: Boolean,
  closeOnClickOverlay: Boolean,
};
export type ToastProps = ExtractPropTypes<typeof toastProps>;
const popupInheritProps = [
  'show',
  'overlay',
  'teleport',
  'transition',
  'overlayClass',
  'overlayStyle',
  'closeOnClickOverlay',
] as const;
export default defineComponent({
  name,
  props: toastProps,
  emit: ['update: show'],
  setup(props, { emit, slots }) {
    let timer: NodeJS.Timeout;
    let clickable = false;

    const toggleClickable = () => {
      const newVal = props.show && props.forbidClick;
      if (clickable !== newVal) {
        clickable = newVal;
        lockClick(clickable);
      }
    };
    const updateShow = (show: boolean) => emit('update:show', show);
    const onClick = () => {
      if (props.closeOnClick) {
        updateShow(false);
      }
    };
    const clearTimer = () => clearTimeout(timer);
    const renderIcon = () => {
      const { icon, iconSize, iconPrefix } = props;
      if (icon) {
        return <img src={icon} class={bem('icon')}></img>;
      }
    };
    const renderMessage = () => {
      if (slots.default) return slots.default();
      const { type, message, icon } = props;
      const hasIcon = icon || type === 'success' || type === 'fail';
      if (isDef(message) && message !== '') {
        return type === 'html' ? (
          <div
            key={0}
            class={bem('text', { 'has-icon': hasIcon })}
            innerHTML={String(message)}
          ></div>
        ) : (
          <div class={bem('text', { 'has-icon': hasIcon })}>{message}</div>
        );
      }
    };
    watch(() => [props.show, props.forbidClick], toggleClickable);
    watch(
      () => [props.show, props.type, props.message, props.duration],
      () => {
        clearTimer();
        if (props.show && props.duration > 0) {
          timer = setTimeout(() => {
            updateShow(false);
          }, props.duration);
        }
      },
    );
    onMounted(toggleClickable);
    onUnmounted(toggleClickable);

    return () => (
      <Popup
        class={[
          bem([props.position, { [props.type]: !props.icon }]),
          props.className,
        ]}
        lockScroll={false}
        onClick={onClick}
        onClosed={clearTimer}
        onUpdate:show={updateShow}
        {...pick(props, popupInheritProps)}
      >
        {renderIcon()}
        {renderMessage()}
      </Popup>
    );
  },
});
