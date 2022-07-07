<template>
  <demo-block title="基础用法">
    <mx-button
      type="primary"
      text="显示遮罩层"
      style="margin-right: 16px"
      @click="show = true"
    />
    <mx-overlay :show="show" @click="show = false" />
  </demo-block>
  <demo-block title="嵌入内容">
    <mx-button
      type="primary"
      text="嵌入内容"
      style="margin-right: 16px"
      @click="showEmbedded = true"
    />
    <mx-overlay :show="showEmbedded" @click="showEmbedded = false">
      <div class="wrapper">
        <div class="block">嵌入内容</div>
      </div>
    </mx-overlay>
  </demo-block>
</template>
<script setup lang="ts">
import MxButton from '../../button';
import MxOverlay from '..';
import { ref } from 'vue';

const show = ref(false);
const showEmbedded = ref(false);
</script>
<style lang="less">
.demo-overlay {
  background: var(--mx-background-color-light);
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

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: var(--mx-background-color-light);
    border-radius: 4px;
  }
}
</style>
