import { CSSProperties } from 'vue';
import { Numeric } from './basic';
import { isDef, isNumeric } from './validate';

const camelizeRE = /-(\w)/g;
export const camelize = (str: string): string =>
  str.replace(camelizeRE, (_, c) => c.toUpperCase());

export const kebabCase = (key: string) => {
  const result = key.replace(/([A-Z])/g, ' $1').trim();
  return result.split(' ').join('-').toLowerCase();
};

export function getZIndexStyle(zIndex?: number | string) {
  const style: CSSProperties = {};
  if (zIndex !== undefined) {
    style.zIndex = +zIndex;
  }
  return style;
}

export function addUnit(value?: Numeric, unit = 'px'): string | undefined {
  if (isDef(value)) {
    return isNumeric(value) ? `${value}${unit}` : String(value);
  }
  return undefined;
}
export const clamp = (num: number, min: number, max: number): number =>
  Math.min(Math.max(num, min), max);
