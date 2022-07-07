<template>
  <demo-block title="基础用法">
    <mx-badge dot>
      <div class="child" />
    </mx-badge>
    <mx-badge content="5">
      <div class="child" />
    </mx-badge>
    <mx-badge content="99">
      <div class="child" />
    </mx-badge>
    <mx-badge content="22">
      <div class="child" />
    </mx-badge>
    <mx-badge content="Hot">
      <div class="child" />
    </mx-badge>
  </demo-block>
  <demo-block title="最大值">
    <mx-badge :max="9" content="12">
      <div class="child" />
    </mx-badge>
    <mx-badge :max="99" content="101">
      <div class="child" />
    </mx-badge>
    <mx-badge :max="999" content="1001">
      <div class="child" />
    </mx-badge>
  </demo-block>
  <demo-block title="带边框">
    <mx-badge content="11" border>
      <div class="child" style="background-color: #ff4b00" />
    </mx-badge>
    <mx-badge color="#1989fa" content="11" border>
      <div class="child" style="background-color: #1989fa" />
    </mx-badge>
  </demo-block>
  <demo-block title="自定义颜色">
    <mx-badge color="#1989fa" content="11">
      <div class="child" />
    </mx-badge>
    <mx-badge dot color="#1989fa">
      <div class="child" />
    </mx-badge>
  </demo-block>
  <demo-block title="自定义徽标内容">
    <mx-badge>
      <template #content>
        <div>x</div>
      </template>
      <div class="child" />
    </mx-badge>
    <mx-badge>
      <template #content>
        <div>✔️</div>
      </template>
      <div class="child" />
    </mx-badge>
  </demo-block>
  <demo-block title="独立展示">
    <mx-badge content="20" style="margin-left: 16px" />
    <mx-badge content="200" max="99" style="margin-left: 16px" />
  </demo-block>
</template>
<script lang="ts" setup>
import MxBadge from '../index';
</script>
<style lang="less">
.demo-badge {
  background-color: var(--mx-background-color-light);
  .van-doc-demo-block {
    padding: 0 10px;
    .van-doc-demo-block__title {
      padding: 10px 0;
    }
    .van-doc-demo-block__card {
      margin: 0;
      background-color: var(--mx-background-color-light);
    }
  }
  .mx-badge__wrapper {
    margin-right: 20px;
  }

  .child {
    width: 40px;
    height: 40px;
    background: var(--mx-gray-3);
    border-radius: 4px;
  }

  .badge-icon {
    display: block;
    margin-left: 0;
    font-size: 10px;
    line-height: 16px;
  }
}
</style>
