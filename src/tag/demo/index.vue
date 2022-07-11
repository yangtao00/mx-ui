<template>
  <demo-block title="基础用法">
    <mx-tag
      indicator-color="#FF302D"
      text-color="#fff"
      size="medium"
      color="rgba(0, 0, 0, 0.4)"
    >
      超级品牌日
    </mx-tag>
    <mx-tag color="#FF302D" text-color="#fff" size="medium">省赚加码</mx-tag>
    <mx-tag
      color="#F5E5FC"
      text-color="#A649CF"
      size="medium"
      border-color="#D882EE"
    >
      超级爆品
    </mx-tag>
    <mx-tag text-color="#FF6600FF" size="medium" border-color="#FF6600FF">
      秒杀
    </mx-tag>
    <mx-tag
      text-color="#FF6600"
      border-color="#FF8800"
      prefix-text="补"
      size="medium"
      prefix-text-color="#FFB27C40"
    >
      每300减20
    </mx-tag>
  </demo-block>
  <demo-block title="边框标签">
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
  </demo-block>
  <demo-block title="标签大小">
    <mx-tag text-color="#FF6600" size="medium" border-color="#FF6600">
      中号标签
    </mx-tag>
    <mx-tag text-color="#FF6600" border-color="#FF6600">小号标签</mx-tag>
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
      可领2张
    </mx-tag>
    <mx-tag
      text-color="#FF6600"
      size="medium"
      border-color="#FF8800"
      type="coupon"
    >
      可领2张
    </mx-tag>
    <mx-tag
      text-color="#FF6600"
      size="small"
      border-color="#FF8800"
      type="coupon"
    >
      可领2张
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
  .mx-tag {
    margin-bottom: 10px;
    margin-left: 10px;
  }
}
</style>
