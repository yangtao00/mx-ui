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
    <mx-badge content="Hot">
      <div class="child" />
    </mx-badge>
  </demo-block>
  <demo-block title="最大值">
    <mx-badge :max="9" content="11">
      <div class="child" />
    </mx-badge>
    <mx-badge :max="99" content="101">
      <div class="child" />
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
      <div class="child" />
      <template #content>
        <div>x</div>
      </template>
    </mx-badge>
    <mx-badge>
      <div class="child" />
      <template #content>
        <div>✔️</div>
      </template>
    </mx-badge>
  </demo-block>
  <demo-block title="自定义徽标位置">
    <mx-badge :content="10" position="top-left">
      <div class="child" />
    </mx-badge>
    <mx-badge :content="10" position="bottom-left">
      <div class="child" />
    </mx-badge>
    <mx-badge :content="10" position="bottom-right">
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

  .mx-badge__wrapper {
    margin-left: 20px;
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
