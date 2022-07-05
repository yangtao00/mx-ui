export const extend = Object.assign;

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function noop() {}

export type Numeric = number | string;

export type Writeable<T> = { -readonly [P in keyof T]: T[P] };
export function pick<T, U extends keyof T>(
  obj: T,
  keys: ReadonlyArray<U>,
  ignoreUndefined?: boolean,
) {
  return keys.reduce((ret, key) => {
    if (!ignoreUndefined || obj[key] !== undefined) {
      ret[key] = obj[key];
    }
    return ret;
  }, {} as Writeable<Pick<T, U>>);
}
