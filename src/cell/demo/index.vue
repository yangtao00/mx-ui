<template>
  <demo-block title="基础用法">
    <mx-cell title="单元格" value="内容" label="描述信息" />
  </demo-block>
  <demo-block title="单元组">
    <mx-cell-group>
      <mx-cell title="单元格" value="内容" />
      <mx-cell title="单元格" value="内容" label="描述信息" />
    </mx-cell-group>
  </demo-block>
</template>
<script setup lang="ts">
import MxCellGroup from '../../cell-group';
import MxCell from '..';
</script>
<style lang="less">
.van-doc-demo-block {
  padding: 0 10px;
  .van-doc-demo-block__title {
    padding-left: 0;
  }
}
</style>
