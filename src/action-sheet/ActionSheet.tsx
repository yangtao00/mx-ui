import Popup from '../popup';
import { defineComponent, ExtractPropTypes, nextTick } from 'vue';
import { popupSharedPropKeys, popupSharedProps } from '../popup/shared';
import {
  createNamespace,
  extend,
  makeArrayProp,
  pick,
  truthProp,
} from '../utils';

export type ActionSheetAction = {
  name?: string;
  color?: string;
  disabled?: boolean;
  callback?: (action: ActionSheetAction) => void;
  className?: unknown;
};

const actionSheetProps = extend({}, popupSharedProps, {
  title: String,
  round: truthProp,
  actions: makeArrayProp<ActionSheetAction>(),
  cancelText: String,
  description: String,
  closeOnPopstate: truthProp,
  closeOnClickAction: Boolean,
  safeAreaInsetBottom: truthProp,
});

export type ActionSheetProps = ExtractPropTypes<typeof actionSheetProps>;

const popupInheritKeys = [
  ...popupSharedPropKeys,
  'round',
  'closeOnPopstate',
  'safeAreaInsetBottom',
] as const;

const [name, bem] = createNamespace('action-sheet');

export default defineComponent({
  name,
  props: actionSheetProps,
  emit: ['select', 'cancel', 'update:show'],

  setup(props, { slots, emit }) {
    const renderHeader = () => {
      if (props.title) {
        return <div class={bem('header')}>{props.title}</div>;
      }
    };
    const renderDescription = () => {
      if (props.description || slots.description) {
        const content = slots.description
          ? slots.description()
          : props.description;
        return (
          <div class={[bem('description'), 'mx-multi-ellipsis--l3']}>
            {content}
          </div>
        );
      }
    };

    const updateShow = (show: boolean) => emit('update:show', show);

    const renderActionContent = (action: ActionSheetAction, index: number) => {
      if (slots.action) {
        return slots.action({ action, index });
      }
      return [<span class={bem('name')}>{action.name}</span>];
    };
    const renderAction = (action: ActionSheetAction, index: number) => {
      const { color, callback, disabled, className } = action;

      const onClick = () => {
        if (disabled) {
          return;
        }
        if (callback) {
          callback(action);
        }
        if (props.closeOnClickAction) {
          updateShow(false);
        }
        nextTick(() => emit('select', action, index));
      };

      return (
        <button
          type="button"
          style={{ color }}
          class={[bem('item', { disabled }), className]}
          onClick={onClick}
        >
          {renderActionContent(action, index)}
        </button>
      );
    };

    const onCancel = () => {
      updateShow(false);
      emit('cancel');
    };
    const renderCancel = () => {
      if (slots.cancel || props.cancelText) {
        return [
          <button type="button" class={bem('cancel')} onClick={onCancel}>
            {slots.cancel ? slots.cancel() : props.cancelText}
          </button>,
        ];
      }
    };

    return () => (
      <Popup
        class={bem()}
        position="bottom"
        backgroundColor="transparent"
        onUpdate:show={updateShow}
        {...pick(props, popupInheritKeys)}
      >
        <div class={bem('content')}>
          {renderHeader()}
          {renderDescription()}
          {props.actions.map(renderAction)}
          {slots.default?.()}
        </div>
        {renderCancel()}
      </Popup>
    );
  },
});
