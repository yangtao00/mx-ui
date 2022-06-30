import { withInstall } from '../utils';
import _CellGroup from './CellGroup';

export const CellGroup = withInstall(_CellGroup);
export default CellGroup;

declare module 'vue' {
  export interface GlobalComponents {
    MxCellGroup: typeof CellGroup;
  }
}
