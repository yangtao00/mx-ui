import { CSSProperties } from 'vue';
import { Numeric } from './basic';
import { isDef, isNumeric } from './validate';

const camelizeRE = /-(\w)/g;

export const camelize = (str: string): string =>
  str.replace(camelizeRE, (_, c) => c.toUpperCase());

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
