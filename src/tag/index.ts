import { withInstall } from '../utils';
import _Tag from './Tag';

export const Tag = withInstall(_Tag);
export default Tag;
export type { TagType, TagSize, TagProps } from './Tag';

declare module 'vue' {
  export interface GlobalComponents {
    MxTag: typeof Tag;
  }
}
