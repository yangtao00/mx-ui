import { App } from 'vue';
import { camelize } from './format';

export type WithInstall<T> = T & {
  install(app: App): void;
};

export function withInstall<T>(options: T) {
  (options as Record<string, unknown>).install = (app: App) => {
    const { name } = options as unknown as { name: string };
    console.log('name:', name);
    app.component(name, options);
    app.component(camelize(`-${name}`), options);
  };

  return options as WithInstall<T>;
}
