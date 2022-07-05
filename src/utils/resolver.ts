import { kebabCase } from './format';

interface MxtResolverOptions {
  /**
   * import style css or less along with components
   *
   * @default true
   */
  importStyle?: boolean | 'css' | 'less';
}
const moduleType = 'es';
function getSideEffects(dirName: string, options: MxtResolverOptions) {
  const { importStyle = true } = options;
  if (!importStyle) return;
  if (importStyle === 'less')
    return `akc-ui/${moduleType}/${dirName}/style/less`;
  if (importStyle === 'css')
    return `akc-ui/${moduleType}/${dirName}/style/index`;
  return `akc-ui/${moduleType}/${dirName}/style/index`;
}

export function MxResolver(options: MxtResolverOptions = {}) {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.startsWith('Mx')) {
        const partialName = name.slice(2);
        return {
          name: partialName,
          from: `akc-ui/${moduleType}`,
          sideEffects: getSideEffects(kebabCase(partialName), options),
        };
      }
    },
  };
}
