# Cell 单元格

### 介绍

单元格为列表中的单个展示项。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Cell, CellGroup } from 'akc-ui';

const app = createApp();
app.use(Cell);
app.use(CellGroup);
```

## 代码演示

### 基础用法

```html
<mx-cell title="单元格" value="内容" label="描述信息" />
```

### 只设置 value

只设置 `value` 时，内容会靠左对齐。

```html
<mx-cell value="只设置value" />
```

### 使用插槽

如以上用法不能满足你的需求，可以使用插槽来自定义内容。

```html
<mx-cell>
  <!-- 使用 title 插槽来自定义标题 -->
  <template #title>
    <span>插槽title</span>
  </template>
  <!-- 使用 value 插槽来自定义标题 -->
  <template #value>
    <span>插槽value</span>
  </template>
</m-cell>
```

### 单元组

`Cell` 可以单独使用，也可以与 `CellGroup` 搭配使用，`CellGroup` 可以为 `Cell` 提供一个包裹容器。

```html
<mx-cell-group>
  <mx-cell title="单元格" value="内容" />
  <mx-cell title="单元格" value="内容" label="描述信息" />
</mx-cell-group>
```

## API

### Cell Props

| 参数            | 说明                                                                                          | 类型                        | 默认值     |
| --------------- | --------------------------------------------------------------------------------------------- | --------------------------- | ---------- |
| title           | 左侧标题                                                                                      | _number \| string_          | -          |
| value           | 右侧内容                                                                                      | _number \| string_          | -          |
| label           | 标题下方的描述信息                                                                            | _string_                    | -          |
| icon            | 左侧图标名称或图片链接，等同于 Icon 组件的 [name 属性](#/zh-CN/icon#props)                    | _string_                    | -          |
| icon-prefix     | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props)                      | _string_                    | `van-icon` |
| url             | 点击后跳转的链接地址                                                                          | _string_                    | -          |
| to              | 点击后跳转的目标路由对象，等同于 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) | _string \| object_          | -          |
| replace         | 是否在跳转时替换当前页面历史                                                                  | _boolean_                   | `false`    |
| clickable       | 是否开启点击反馈                                                                              | _boolean_                   | `null`     |
| is-link         | 是否展示右侧箭头并开启点击反馈                                                                | _boolean_                   | `false`    |
| required        | 是否显示表单必填星号                                                                          | _boolean_                   | `false`    |
| arrow-direction | 箭头方向，可选值为 `left` `up` `down`                                                         | _string_                    | `right`    |
| title-style     | 左侧标题额外样式                                                                              | _string \| Array \| object_ | -          |
| title-class     | 左侧标题额外类名                                                                              | _string \| Array \| object_ | -          |
| value-class     | 右侧内容额外类名                                                                              | _string \| Array \| object_ | -          |
| label-class     | 描述信息额外类名                                                                              | _string \| Array \| object_ | -          |

### Cell Events

| 事件名 | 说明             | 回调参数            |
| ------ | ---------------- | ------------------- |
| click  | 点击单元格时触发 | _event: MouseEvent_ |

### CellGroup Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 默认插槽       |
| title   | 自定义分组标题 |

### Cell Slots

| 名称       | 说明                         |
| ---------- | ---------------------------- |
| title      | 自定义左侧标题               |
| value      | 自定义右侧内容               |
| label      | 自定义标题下方的描述信息     |
| icon       | 自定义左侧图标               |
| right-icon | 自定义右侧图标               |
| extra      | 自定义单元格最右侧的额外内容 |

### 类型定义

组件导出以下类型定义：

```ts
import type { CellProps, CellArrowDirection } from 'akc-ui';
```
