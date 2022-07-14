import { withInstall } from '../utils';
import _Steps from './Steps';

export const Steps = withInstall(_Steps);
export default Steps;
declare module 'vue' {
  export interface GlobalComponents {
    MxSteps: typeof Steps;
  }
}
