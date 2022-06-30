<template>
  <demo-block title="按钮类型">
    <div class="demo-button-row">
      <mx-button type="primary">主按钮</mx-button>
      <mx-button type="plain">朴素按钮</mx-button>
      <mx-button type="danger">警告按钮</mx-button>
      <mx-button>默认按钮</mx-button>
    </div>
  </demo-block>
  <demo-block title="按钮尺寸">
    <div class="demo-button-row">
      <mx-button size="xlarge">超大按钮</mx-button>
      <mx-button size="large">大按钮</mx-button>
      <mx-button size="medium">正常按钮</mx-button>
      <mx-button size="small">小按钮</mx-button>
      <mx-button size="mini">mini按钮</mx-button>
    </div>
  </demo-block>
  <demo-block title="块级按钮">
    <div class="demo-button-row">
      <mx-button block size="medium">正常按钮</mx-button>
    </div>
  </demo-block>
  <demo-block title="按钮形状">
    <div class="demo-button-row">
      <mx-button size="medium" round>圆角</mx-button>
      <mx-button size="medium" square>方形按钮</mx-button>
    </div>
  </demo-block>
  <demo-block title="禁用状态">
    <div class="demo-button-row">
      <mx-button type="primary" disabled>主按钮</mx-button>
      <mx-button type="plain" disabled>朴素按钮</mx-button>
      <mx-button type="danger" disabled>警告按钮</mx-button>
      <mx-button disabled>默认按钮</mx-button>
    </div>
  </demo-block>
  <demo-block title="细边框按钮">
    <div class="demo-button-row">
      <mx-button type="plain" hairline>主按钮</mx-button>
    </div>
  </demo-block>
</template>
<script setup lang="ts">
import MxButton from '../index';
</script>
<style lang="less">
.demo-button {
  background-color: #fff;
  .van-doc-demo-block {
    padding: 0 10px;
  }
  .van-doc-demo-block__title {
    padding: 10px 0;
  }
  .mx-button {
    margin: 0 10px 10px 0;
  }
}
</style>
