# NoticeBar 通知栏

### 介绍

用于循环播放展示一组消息通知。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { NoticeBar } from 'akc-ui';

const app = createApp();
app.use(NoticeBar);
```

## 代码演示

### 基础用法

通过 `text` 属性设置通知栏的内容，通过 `left-icon` 属性设置通知栏左侧的图标。

```html
<mx-notice-bar left-icon="x" square text="有两件商品已降价，点击查看" />
```

### 滚动播放

通知栏的内容长度溢出时会自动开启滚动播放，通过 `scrollable` 属性可以控制该行为。

```html
<!-- 文字较短时，通过设置 scrollable 属性开启滚动播放 -->
<mx-notice-bar
  left-icon="x"
  closeable
  scrollable
  text="有两件商品已降价，点击查看"
/>

<!-- 文字较长时，通过禁用 scrollable 属性关闭滚动播放 -->
<mx-notice-bar
  left-icon="x"
  closeable
  scrollable
  text="有两件商品已降价，点击查看"
/>
```

### 多行展示

文字较长时，可以通过设置 `wrapable` 属性来开启多行展示。

```html
<mx-notice-bar
  left-icon="x"
  wrapable
  :scrollable="false"
  closeable
  text="使用优惠券的订单，在“待发货”状态下取消订单，优惠券可退回，退款金额按优惠后的实际支付金额退款"
/>
```

### 方形

通过设置 `square` 属性来展示方形。

```html
<mx-notice-bar left-icon="x" square text="有两件商品已降价，点击查看" />
```

### 通知栏模式

通知栏支持 `closeable` 和 `link` 两种模式。

```html
<!-- closeable 模式，在右侧显示关闭按钮 -->
<mx-notice-bar mode="closeable">有两件商品已降价，点击查看！</mx-notice-bar>

<!-- link 模式，在右侧显示链接箭头 -->
<mx-notice-bar mode="link">有两件商品已降价，点击查看</mx-notice-bar>
```

### 自定义样式

通过 `color` 属性设置文本颜色，通过 `background` 属性设置背景色。

```html
<mx-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">
  米袋虽空——樱花开哉！
</mx-notice-bar>
```

## API

### Props

| 参数       | 说明                                                                       | 类型               | 默认值    |
| ---------- | -------------------------------------------------------------------------- | ------------------ | --------- |
| mode       | 通知栏模式，可选值为 `closeable` `link`                                    | _string_           | `''`      |
| text       | 通知文本内容                                                               | _string_           | `''`      |
| color      | 通知文本颜色                                                               | _string_           | `#ed6a0c` |
| background | 滚动条背景                                                                 | _string_           | `#fffbe8` |
| left-icon  | 左侧图标名称或图片链接，等同于 Icon 组件的 [name 属性](#/zh-CN/icon#props) | _string_           | -         |
| delay      | 动画延迟时间 (s)                                                           | _number \| string_ | `1`       |
| speed      | 滚动速率 (px/s)                                                            | _number \| string_ | `60`      |
| scrollable | 是否开启滚动播放，内容长度溢出时默认开启                                   | _boolean_          | -         |
| wrapable   | 是否开启文本换行，只在禁用滚动时生效                                       | _boolean_          | `false`   |
| square     | 方形通告栏                                                                 | _boolean_          | `false`   |

### Events

| 事件名 | 说明                         | 回调参数            |
| ------ | ---------------------------- | ------------------- |
| click  | 点击通知栏时触发             | _event: MouseEvent_ |
| close  | 关闭通知栏时触发             | _event: MouseEvent_ |
| replay | 每当滚动栏重新开始滚动时触发 | -                   |

### 方法

通过 ref 可以获取到 NoticeBar 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明                 | 参数 | 返回值 |
| ------ | -------------------- | ---- | ------ |
| reset  | 重置通知栏到初始状态 | -    | -      |

### 类型定义

组件导出以下类型定义：

```ts
import type { NoticeBarProps, NoticeBarInstance } from 'akc-ui';
```

`NoticeBarInstance` 是组件实例的类型，用法如下：

```ts
import { ref } from 'vue';
import type { NoticeBarInstance } from 'akc-ui';

const noticeBarRef = ref<NoticeBarInstance>();

noticeBarRef.value?.reset();
```

### Slots

| 名称       | 内容           |
| ---------- | -------------- |
| default    | 通知文本内容   |
| left-icon  | 自定义左侧图标 |
| right-icon | 自定义右侧图标 |
