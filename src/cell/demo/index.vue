<template>
  <demo-block title="基础用法">
    <mx-cell title="单元格" value="内容" label="描述信息" />
  </demo-block>
  <demo-block title="只设置value">
    <mx-cell value="只设置value" />
  </demo-block>
  <demo-block title="使用插槽">
    <mx-cell>
      <template #title>
        <span>插槽title</span>
      </template>
      <template #value>
        <span>插槽value</span>
      </template>
    </mx-cell>
  </demo-block>
  <demo-block title="页面导航">
    <mx-cell-group>
      <mx-cell title="url跳转" url="###" />
      <mx-cell title="路由跳转" to="index" />
    </mx-cell-group>
  </demo-block>
  <demo-block title="单元组">
    <mx-cell-group>
      <mx-cell title="单元格" value="内容" url="http://www.baidu.com" />
      <mx-cell title="单元格" value="内容" label="描述信息" />
      <mx-cell title="设置必填" value="必填内容" required />
    </mx-cell-group>
  </demo-block>
</template>
<script setup lang="ts">
import MxCellGroup from '../../cell-group';
import MxCell from '..';
</script>
<style lang="less">
.demo-cell {
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
}
</style>
