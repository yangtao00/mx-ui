# Tag 标签

### 介绍

用于标记关键词和概括主要内容。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Tag } from 'akc-ui';

const app = createApp();
app.use(Tag);
```

## 代码演示

### 基础用法

```html
<mx-tag
  indicator-color="#FF302D"
  text-color="#fff"
  size="medium"
  color="rgba(0, 0, 0, 0.4)"
>
  超级品牌日
</mx-tag>
<mx-tag color="#FF302D" text-color="#fff" size="medium">省赚加码</mx-tag>
```

### 边框标签

```html
<mx-tag text-color="#FF6600" size="medium" border-color="#FF6600">
  圆角边框
</mx-tag>
<mx-tag text-color="#FF6600" size="medium" hairline border-color="#FF6600">
  圆角细边框
</mx-tag>
<mx-tag text-color="#FF6600" size="medium" border-color="#FF6600" square>
  方形边框
</mx-tag>
<mx-tag
  text-color="#FF6600"
  size="medium"
  hairline
  border-color="#FF6600"
  square
>
  方形细边框
</mx-tag>
```

### 标签大小

通过 `size` 属性调整标签大小。

```html
<mx-tag text-color="#FF6600" size="medium" border-color="#FF6600">
  中号标签
</mx-tag>
<mx-tag text-color="#FF6600" border-color="#FF6600">小号标签</mx-tag>
```

### 优惠券标签

```html
<mx-tag
  text-color="#FF6600"
  size="medium"
  border-color="#FF8800"
  type="coupon"
  prefix-text="券"
  prefix-text-color="#FFB27C40"
>
  可领2张
</mx-tag>
```

## API

### Props

| 参数              | 说明                              | 类型      | 默认值    |
| ----------------- | --------------------------------- | --------- | --------- |
| size              | 大小, 可选值为 `medium` `small`   | _string_  | `small`   |
| color             | 标签颜色                          | _string_  | -         |
| square            | 是否为方形标签                    | _boolean_ | `false`   |
| text-color        | 文本颜色                          | _string_  | -         |
| color             | 背景颜色                          | _string_  | -         |
| border-color      | 边框颜色                          | _string_  | -         |
| prefix-text       | 前置文字                          | _string_  | -         |
| prefix-text-color | 前置文字背景颜色                  | _string_  | -         |
| type              | 类型，可选值为`default`, `coupon` | _string_  | `default` |

### Slots

| 名称    | 说明         |
| ------- | ------------ |
| default | 标签显示内容 |

### 类型定义

组件导出以下类型定义：

```ts
import type { TagSize, TagType, TagProps } from 'akc-ui';
```
