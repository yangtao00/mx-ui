# Button 按钮

### 介绍

按钮用于触发一个操作，如提交表单。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Button } from 'mx-ui';

const app = createApp();
app.use(Button);
```

## 代码演示

### 按钮类型

按钮支持 `default`、`primary`、`success`、`warning`、`danger` 五种类型，默认为 `default`。

```html
<mx-button type="primary">主要按钮</mx-button>
<mx-button type="success">成功按钮</mx-button>
<mx-button type="default">默认按钮</mx-button>
<mx-button type="warning">警告按钮</mx-button>
<mx-button type="danger">危险按钮</mx-button>
```

### 朴素按钮

通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```html
<mx-button plain type="primary">朴素按钮</mx-button>
<mx-button plain type="primary">朴素按钮</mx-button>
```

### 细边框

设置 `hairline` 属性可以展示 0.5px 的细边框。

```html
<mx-button plain hairline type="primary">细边框按钮</mx-button>
<mx-button plain hairline type="primary">细边框按钮</mx-button>
```

### 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

```html
<mx-button disabled type="primary">禁用状态</mx-button>
<mx-button disabled type="primary">禁用状态</mx-button>
```

### 加载状态

通过 `loading` 属性设置按钮为加载状态，加载状态下默认会隐藏按钮文字，可以通过 `loading-text` 设置加载状态下的文字。

```html
<mx-button loading type="primary" />
<mx-button loading type="primary" loading-type="spinner" />
<mx-button loading type="primary" loading-text="加载中..." />
```

### 按钮形状

通过 `square` 设置方形按钮，通过 `round` 设置圆形按钮。

```html
<mx-button square type="primary">方形按钮</mx-button>
<mx-button round type="primary">圆形按钮</mx-button>
```

### 图标按钮

通过 `icon` 属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL。

```html
<mx-button icon="plus" type="primary" />
<mx-button icon="plus" type="primary">按钮</mx-button>
<mx-button
  icon="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png"
  type="primary"
>
  按钮
</mx-button>
```

### 按钮尺寸

支持 `large`、`normal`、`small`、`mini` 四种尺寸，默认为 `normal`。

```html
<mx-button type="primary" size="large">大号按钮</mx-button>
<mx-button type="primary" size="normal">普通按钮</mx-button>
<mx-button type="primary" size="small">小型按钮</mx-button>
<mx-button type="primary" size="mini">迷你按钮</mx-button>
```

### 块级元素

按钮在默认情况下为行内块级元素，通过 `block` 属性可以将按钮的元素类型设置为块级元素。

```html
<mx-button type="primary" block>块级元素</mx-button>
```

### 页面导航

可以通过 `url` 属性进行 URL 跳转，或通过 `to` 属性进行路由跳转。

```html
<mx-button type="primary" url="https://github.com">URL 跳转</mx-button>
<mx-button type="primary" to="index">路由跳转</mx-button>
```

### 自定义颜色

通过 `color` 属性可以自定义按钮的颜色。

```html
<mx-button color="#7232dd">单色按钮</mx-button>
<mx-button color="#7232dd" plain>单色按钮</mx-button>
<mx-button color="linear-gradient(to right, #ff6034, #ee0a24)">
  渐变色按钮
</mx-button>
```

## API

### Props

| 参数          | 说明                                                                                          | 类型               | 默认值     |
| ------------- | --------------------------------------------------------------------------------------------- | ------------------ | ---------- |
| type          | 类型，可选值为 `primary` `success` `warning` `danger`                                         | _string_           | `default`  |
| size          | 尺寸，可选值为 `large` `small` `mini`                                                         | _string_           | `normal`   |
| text          | 按钮文字                                                                                      | _string_           | -          |
| color         | 按钮颜色，支持传入 `linear-gradient` 渐变色                                                   | _string_           | -          |
| icon          | 左侧图标名称或图片链接，等同于 Icon 组件的 [name 属性](#/zh-CN/icon#props)                    | _string_           | -          |
| icon-prefix   | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props)                      | _string_           | `mx-icon`  |
| icon-position | 图标展示位置，可选值为 `right`                                                                | _string_           | `left`     |
| tag           | 按钮根节点的 HTML 标签                                                                        | _string_           | `button`   |
| native-type   | 原生 button 标签的 type 属性                                                                  | _string_           | `button`   |
| block         | 是否为块级元素                                                                                | _boolean_          | `false`    |
| plain         | 是否为朴素按钮                                                                                | _boolean_          | `false`    |
| square        | 是否为方形按钮                                                                                | _boolean_          | `false`    |
| round         | 是否为圆形按钮                                                                                | _boolean_          | `false`    |
| disabled      | 是否禁用按钮                                                                                  | _boolean_          | `false`    |
| hairline      | 是否使用 0.5px 边框                                                                           | _boolean_          | `false`    |
| loading       | 是否显示为加载状态                                                                            | _boolean_          | `false`    |
| loading-text  | 加载状态提示文字                                                                              | _string_           | -          |
| loading-type  | [加载图标类型](#/zh-CN/loading)，可选值为 `spinner`                                           | _string_           | `circular` |
| loading-size  | 加载图标大小，默认单位为 `px`                                                                 | _number \| string_ | `20px`     |
| url           | 点击后跳转的链接地址                                                                          | _string_           | -          |
| to            | 点击后跳转的目标路由对象，等同于 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) | _string \| object_ | -          |
| replace       | 是否在跳转时替换当前页面历史                                                                  | _boolean_          | `false`    |

### Events

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| click      | 点击按钮，且按钮状态不为加载或禁用时触发 | _event: MouseEvent_ |
| touchstart | 开始触摸按钮时触发                       | _event: TouchEvent_ |

### Slots

| 名称           | 说明           |
| -------------- | -------------- |
| default        | 按钮内容       |
| icon `v3.0.18` | 自定义图标     |
| loading        | 自定义加载图标 |

### 类型定义

组件导出以下类型定义：

```ts
import type { ButtonType, ButtonSize, ButtonProps } from 'mx-ui';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                 | 默认值                             | 描述 |
| ------------------------------------ | ---------------------------------- | ---- |
| --mx-button-mini-height              | _24px_                             | -    |
| --mx-button-mini-padding             | _0 var(--mx-padding-base)_         | -    |
| --mx-button-mini-font-size           | _var(--mx-font-size-xs)_           | -    |
| --mx-button-small-height             | _32px_                             | -    |
| --mx-button-small-padding            | _0 var(--mx-padding-xs)_           | -    |
| --mx-button-small-font-size          | _var(--mx-font-size-sm)_           | -    |
| --mx-button-normal-font-size         | _var(--mx-font-size-md)_           | -    |
| --mx-button-normal-padding           | _0 15px_                           | -    |
| --mx-button-large-height             | _50px_                             | -    |
| --mx-button-default-height           | _44px_                             | -    |
| --mx-button-default-line-height      | _1.2_                              | -    |
| --mx-button-default-font-size        | _var(--mx-font-size-lg)_           | -    |
| --mx-button-default-color            | _var(--mx-text-color)_             | -    |
| --mx-button-default-background-color | _var(--mx-background-color-light)_ | -    |
| --mx-button-default-border-color     | _var(--mx-border-color)_           | -    |
| --mx-button-primary-color            | _var(--mx-white)_                  | -    |
| --mx-button-primary-background-color | _var(--mx-primary-color)_          | -    |
| --mx-button-primary-border-color     | _var(--mx-primary-color)_          | -    |
| --mx-button-success-color            | _var(--mx-white)_                  | -    |
| --mx-button-success-background-color | _var(--mx-success-color)_          | -    |
| --mx-button-success-border-color     | _var(--mx-success-color)_          | -    |
| --mx-button-danger-color             | _var(--mx-white)_                  | -    |
| --mx-button-danger-background-color  | _var(--mx-danger-color)_           | -    |
| --mx-button-danger-border-color      | _var(--mx-danger-color)_           | -    |
| --mx-button-warning-color            | _var(--mx-white)_                  | -    |
| --mx-button-warning-background-color | _var(--mx-orange)_                 | -    |
| --mx-button-warning-border-color     | _var(--mx-orange)_                 | -    |
| --mx-button-border-width             | _var(--mx-border-width-base)_      | -    |
| --mx-button-border-radius            | _var(--mx-border-radius-sm)_       | -    |
| --mx-button-round-border-radius      | _var(--mx-border-radius-max)_      | -    |
| --mx-button-plain-background-color   | _var(--mx-white)_                  | -    |
| --mx-button-disabled-opacity         | _var(--mx-disabled-opacity)_       | -    |
| --mx-button-icon-size                | _1.2em_                            | -    |
| --mx-button-loading-icon-size        | _20px_                             | -    |
