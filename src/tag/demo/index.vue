<template>
  <demo-block title="带指示器">
    <mx-tag
      indicator-color="#FF302D"
      text-color="#fff"
      size="medium"
      color="rgba(0, 0, 0, 0.4)"
    >
      超级品牌日
    </mx-tag>
    <mx-tag
      indicator-color="#68BE56"
      text-color="#fff"
      size="medium"
      color="#FF302D"
    >
      超级新品牌
    </mx-tag>
  </demo-block>
  <demo-block title="填充背景">
    <mx-tag color="#FF302D" text-color="#fff" size="medium">省赚加码</mx-tag>
    <mx-tag color="#FF302D" text-color="#fff" size="small">省赚加码</mx-tag>
  </demo-block>
  <demo-block title="带边框">
    <mx-tag
      color="#F5E5FC"
      text-color="#A649CF"
      size="medium"
      border-color="#D882EE"
    >
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
  </demo-block>
  <demo-block title="小号标签">
    <mx-tag
      color="#F5E5FC"
      text-color="#A649CF"
      size="small"
      border-color="#D882EE"
    >
      省赚加码
    </mx-tag>
    <mx-tag text-color="#FF6600" border-color="#FF6600">省赚加码</mx-tag>
  </demo-block>
  <demo-block title="带前置描述">
    <mx-tag
      text-color="#FF6600"
      border-color="#FF8800"
      prefix-text="补"
      prefix-text-color="#FFB27C40"
    >
      每300减20
    </mx-tag>
    <mx-tag
      text-color="#FF6600"
      size="small"
      border-color="#FF8800"
      prefix-text="赚"
      prefix-text-color="#FFB27C40"
    >
      任选3件199元，共赚52元
    </mx-tag>
  </demo-block>
  <demo-block title="优惠券标签">
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
    <mx-tag
      text-color="#FF6600"
      size="small"
      border-color="#FF8800"
      type="coupon"
      prefix-text="券"
      prefix-text-color="#FFB27C40"
    >
      可领3张
    </mx-tag>
  </demo-block>
</template>
<script lang="ts" setup>
import MxTag from '../Tag';
</script>
<style lang="less">
.demo-tag {
  padding: 0 10px;
  .van-doc-demo-block__title {
    padding: 10px 0;
  }
  .van-doc-demo-block__card {
    margin: 0;
    background-color: var(--mx-background-color-light);
  }
  .mx-tag + .mx-tag {
    margin-left: 10px;
  }
}
</style>
