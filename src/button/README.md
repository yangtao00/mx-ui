# Button 按钮

### 介绍

按钮用于触发一个操作，如提交表单。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Button } from 'akc-ui';

const app = createApp();
app.use(Button);
```

## 代码演示

### 按钮类型

按钮支持 `default`、`primary`、`plain`、`danger` 四种类型，默认为 `default`。

```html
<mx-button type="default">默认按钮</mx-button>
<mx-button type="primary">主要按钮</mx-button>
<mx-button type="plain">朴素按钮</mx-button>
<mx-button type="danger">警告按钮</mx-button>
```

### 按钮尺寸

支持`xlarge` `large`、`medium`、`small`、`mini` 五种尺寸，默认为 `medium`。

```html
<mx-button type="primary" size="xlarge">超大按钮</mx-button>
<mx-button type="primary" size="large">大按钮</mx-button>
<mx-button type="primary" size="normal">正常按钮</mx-button>
<mx-button type="primary" size="small">小按钮</mx-button>
<mx-button type="primary" size="mini">mini按钮</mx-button>
```

### 按钮形状

通过 `square` 设置方形按钮，通过 `round` 设置圆形按钮。

```html
<mx-button round type="primary">圆形按钮</mx-button>
<mx-button square type="primary">方形按钮</mx-button>
```

### 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

```html
<mx-button disabled type="primary">禁用状态</mx-button>
```

## API

### Props

| 参数     | 说明                                                    | 类型      | 默认值    |
| -------- | ------------------------------------------------------- | --------- | --------- |
| type     | 类型，可选值为 `primary` `plain` `default` `danger`     | _string_  | `default` |
| size     | 尺寸，可选值为 `xlarge` `large` `medium` `small` `mini` | _string_  | `normal`  |
| text     | 按钮文字                                                | _string_  | -         |
| block    | 是否为块级元素                                          | _boolean_ | `false`   |
| square   | 是否为方形按钮                                          | _boolean_ | `false`   |
| disabled | 是否禁用按钮                                            | _boolean_ | `false`   |
| hairline | 是否使用 0.5px 边框                                     | _boolean_ | `false`   |

### Events

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| click      | 点击按钮，且按钮状态不为加载或禁用时触发 | _event: MouseEvent_ |
| touchstart | 开始触摸按钮时触发                       | _event: TouchEvent_ |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 按钮内容 |

### 类型定义

组件导出以下类型定义：

```ts
import type { ButtonType, ButtonSize, ButtonProps } from 'akc-ui';
```
