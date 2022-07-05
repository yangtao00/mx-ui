# 快速上手

### 介绍

通过本章节你可以了解到 Vant 的安装方法和基本使用姿势。

### 安装

```bash
# 通过 npm
npm i akc-ui

# 通过 yarn
yarn add akc-ui

# 通过 pnpm
pnpm add akc-ui
```

## 引入组件

### 按需引入组件（推荐）

在基于 `vite`、`webpack` 或 `vue-cli` 的项目中使用时，推荐安装 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 插件，它可以自动按需引入组件。

#### 1. 安装插件

```bash
# 通过 npm 安装
npm i unplugin-vue-components -D

# 通过 yarn 安装
yarn add unplugin-vue-components -D

# 通过 pnpm 安装
pnpm add unplugin-vue-components -D
```

#### 2. 配置插件

如果是基于 `vite` 的项目，在 `vite.config.js` 文件中配置插件：

```js
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { MxResolver } from 'akc-ui/lib/utils/resolver';

export default {
  plugins: [
    vue(),
    Components({
      resolvers: [MxResolver()],
    }),
  ],
};
```

如果是基于 `vue-cli` 的项目，在 `vue.config.js` 文件中配置插件：

```js
import { MxResolver } from 'akc-ui/lib/utils/resolver';
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [MxResolver()],
      }),
    ],
  },
};
```

#### 3. 引入组件

完成以上两步，就可以直接使用 Vant 组件了：

```js
import { createApp } from 'vue';
import { Button } from 'akc-ui';

const app = createApp();
app.use(Button);
```

### 导入所有组件（不推荐）

akc-ui 支持一次性导入所有组件，引入所有组件会**增加代码包体积**，因此不推荐这种做法。

```js
import { createApp } from 'vue';
import AkcUi from 'akc-ui';
import 'akc-ui/lib/index.css';

const app = createApp();
app.use(AkcUi);
```

### 手动按需引入组件（不推荐）

在不使用任何构建插件的情况下，可以手动引入需要使用的组件和样式。

```js
// 引入组件脚本
import Button from 'akc-ui/es/button/index';
// 引入组件样式
// 若组件没有样式文件，则无须引入
import 'akc-ui/es/button/style/index';
```
