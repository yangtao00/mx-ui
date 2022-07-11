<template>
  <demo-block title="基础使用">
    <mx-notice-bar left-icon="x" text="有两件商品已降价，点击查看" />
  </demo-block>
  <demo-block title="滚动播放">
    <mx-notice-bar
      left-icon="x"
      closeable
      text="订单提交成功后，预计30分钟内到账（月初月末运营商不稳定）"
    />
    <mx-notice-bar
      left-icon="x"
      closeable
      :scrollable="false"
      text="订单提交成功后，预计30分钟内到账（月初月末运营商不稳定）"
    />
  </demo-block>
  <demo-block title="多行展示">
    <mx-notice-bar
      left-icon="x"
      wrapable
      :scrollable="false"
      closeable
      text="使用优惠券的订单，在“待发货”状态下取消订单，优惠券可退回，退款金额按优惠后的实际支付金额退款"
    />
  </demo-block>
  <demo-block title="方形通告栏">
    <mx-notice-bar left-icon="x" square text="有两件商品已降价，点击查看" />
  </demo-block>
  <demo-block title="自定义样式">
    <mx-notice-bar color="#1989fa" background="#ecf9ff" left-icon="x">
      有两件商品已降价，点击查看
    </mx-notice-bar>
  </demo-block>
</template>
<script lang="ts" setup>
import MxNoticeBar from '../index';
</script>
<style lang="less">
.demo-notice-bar {
  background: var(--mx-background-color-light);
  .van-doc-demo-block {
    padding: 0 16px;
  }
  .van-doc-demo-block__title {
    padding: 10px 0;
  }
  .mx-notice-bar {
    margin-bottom: 10px;
  }
  .link {
    color: #1989fa;
  }
}
</style>
