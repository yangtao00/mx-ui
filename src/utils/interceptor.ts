import { noop } from './basic';
import { isPromise } from './validate';

export type Interceptor = (
  ...args: any[]
) => Promise<boolean> | boolean | undefined | void;

export function callInterceptor(
  interceptor: Interceptor | undefined,
  {
    args = [],
    done,
    canceld,
  }: {
    args?: unknown[];
    done: () => void;
    canceld?: () => void;
  }
) {
  if (interceptor) {
    // eslint-disable-next-line prefer-spread
    const returnVal = interceptor.apply(null, args);
    if (isPromise(returnVal)) {
      returnVal
        .then((res) => {
          if (res) {
            done();
          } else if (canceld) {
            canceld();
          }
        })
        .catch(noop);
    } else if (returnVal) {
      done();
    } else if (canceld) {
      canceld();
    }
  } else {
    done();
  }
}
