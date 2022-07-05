import { Numeric } from './basic';

export const inBrowser = typeof window !== 'undefined';

export const isDef = <T>(val: T): val is NonNullable<T> =>
  val !== undefined && val !== null;

// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (val: unknown): val is Function =>
  typeof val === 'function';

export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object';

export const isPromise = <T = any>(val: unknown): val is Promise<T> =>
  isObject(val) && isFunction(val.then) && isFunction(val.catch);

export const isElement = (node: Element) => {
  const ELEMENT_NODE_TYPE = 1;
  return (
    node.tagName !== 'HTML' &&
    node.tagName !== 'BODY' &&
    node.nodeType === ELEMENT_NODE_TYPE
  );
};

export const isNumeric = (val: Numeric): val is string =>
  typeof val === 'number' || /^\d+(\.\d+)?$/.test(val);
