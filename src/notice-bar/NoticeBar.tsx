import {
  defineComponent,
  ExtractPropTypes,
  PropType,
  reactive,
  ref,
  watch,
} from 'vue';
import { doubleRaf, raf } from '../utils/raf';
import { createNamespace, isDef, makeNumericProp } from '../utils';
import { NoticeBarMode } from './types';
import { useRect } from '../composables/use-react';
import { onPopupReopen } from '../composables/on-popup-reopen';
import { onMountedOrActivated } from '../composables/on-mounted-or-activated';
import { useEventListener } from '../composables/use-event-listener';
import { useExpose } from '../composables/use-expose';

export const noticeBarProps = {
  text: String,
  mode: String as PropType<NoticeBarMode>,
  color: String,
  delay: makeNumericProp(1),
  speed: makeNumericProp(60),
  square: Boolean as PropType<boolean>,
  leftIcon: String,
  wrapable: Boolean,
  background: String,
  scrollable: {
    type: Boolean as PropType<boolean | null>,
    default: null,
  },
};
export type NoticeBarProps = ExtractPropTypes<typeof noticeBarProps>;

const [name, bem] = createNamespace('notice-bar');

export default defineComponent({
  name,
  props: noticeBarProps,
  emits: ['close', 'replay'],
  setup(props, { emit, slots }) {
    let wrapWidth = 0;
    let contentWidth = 0;
    let startTimer: NodeJS.Timeout;

    const wrapRef = ref<HTMLElement>();
    const contentRef = ref<HTMLElement>();

    const state = reactive({
      show: true,
      offset: 0,
      duration: 0,
    });

    const renderLeftIcon = () => {
      if (slots['left-icon']) {
        return slots['left-icon']();
      }
      if (props.leftIcon) {
        return <div class={bem('left-icon')}></div>;
      }
    };

    const renderRightIcon = () => {
      if (slots['right-icon']) {
        return slots['right-icon']();
      }

      return <div class={bem('right-icon')}></div>;
    };

    const isAutoScrollable = () => {
      if (!wrapRef.value || !contentRef.value || props.scrollable === false) {
        return false;
      }
      const wrapRefWidth = useRect(wrapRef).width;
      const contentRefWidth = useRect(contentRef).width;
      return contentRefWidth > wrapRefWidth;
    };

    const renderMarquee = () => {
      const ellipsis = props.scrollable === false && !props.wrapable;
      const style = {
        transform: state.offset ? `translateX(${state.offset}px)` : '',
        transitionDuration: `${state.duration}s`,
      };
      const isAutoPlay = isAutoScrollable();

      const onTransitionEnd = () => {
        state.offset = -contentWidth / 2 + wrapWidth;
        state.duration = 0;
        // wait for Vue to render offset
        // using nextTick won't work in iOS14
        raf(() => {
          // use double raf to ensure animation can start
          doubleRaf(() => {
            state.offset = -contentWidth + wrapWidth;
            state.duration = (contentWidth - wrapWidth) / +props.speed;
            emit('replay');
          });
        });
      };

      return (
        <div ref={wrapRef} role="marquee" class={bem('wrap')}>
          <div
            ref={contentRef}
            style={style}
            class={[bem('content'), { 'mx-ellipsis': ellipsis }]}
            onTransitionend={onTransitionEnd}
          >
            <span style={{ marginRight: '30px' }}>
              {slots.default ? slots.default() : props.text}
            </span>
            {isAutoPlay ? (
              <span style={{ marginRight: '30px' }}>
                {slots.default ? slots.default() : props.text}
              </span>
            ) : null}
          </div>
        </div>
      );
    };

    const reset = () => {
      const { delay, speed, scrollable } = props;
      const ms = isDef(delay) ? +delay * 1000 : 0;

      wrapWidth = 0;
      contentWidth = 0;
      state.offset = 0;
      state.duration = 0;

      clearTimeout(startTimer);
      startTimer = setTimeout(() => {
        if (!wrapRef.value || !contentRef.value || scrollable === false) {
          return;
        }

        const wrapRefWidth = Math.round(useRect(wrapRef).width);
        const contentRefWidth = Math.round(useRect(contentRef).width);
        if (scrollable || contentRefWidth > wrapRefWidth) {
          doubleRaf(() => {
            wrapWidth = wrapRefWidth;
            contentWidth = contentRefWidth;
            state.offset = -contentWidth + wrapRefWidth;
            state.duration = (contentWidth - wrapRefWidth) / +speed;
          });
        }
      }, ms);
    };

    onPopupReopen(reset);
    onMountedOrActivated(reset);

    // fix cache issues with forwards and back history in safari
    // see: https://guwii.com/cache-issues-with-forwards-and-back-history-in-safari/
    useEventListener('pageshow', reset);
    useExpose({ reset });

    watch(() => [props.text, props.scrollable], reset);

    return () => {
      const { color, wrapable, background, square } = props;
      return (
        <div
          v-show={state.show}
          role="alert"
          class={bem({ wrapable, square })}
          style={{ color, background }}
        >
          {renderLeftIcon()}
          {renderMarquee()}
          {renderRightIcon()}
        </div>
      );
    };
  },
});
