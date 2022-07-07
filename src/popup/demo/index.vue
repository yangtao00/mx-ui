<template>
  <demo-block title="基础用法">
    <mx-cell @click="showBasic = true">展示弹窗层</mx-cell>
    <mx-popup v-model:show="showBasic" :style="{ padding: '30px 50px' }">
      内容
    </mx-popup>
  </demo-block>

  <demo-block card title="弹出位置">
    <mx-cell @click="showTop = true">顶部弹出</mx-cell>
    <mx-cell @click="showBottom = true">底部弹出</mx-cell>
    <mx-cell @click="showLeft = true">左侧弹出</mx-cell>
    <mx-cell @click="showRight = true">右侧弹出</mx-cell>
    <mx-popup
      v-model:show="showTop"
      position="top"
      :style="{ height: '30%' }"
    />
    <mx-popup
      v-model:show="showBottom"
      position="bottom"
      :style="{ height: '30%' }"
    />
    <mx-popup
      v-model:show="showLeft"
      position="left"
      :style="{ width: '30%', height: '100%' }"
    />
    <mx-popup
      v-model:show="showRight"
      position="right"
      :style="{ width: '30%', height: '100%' }"
    />
  </demo-block>

  <demo-block card title="关闭图标">
    <mx-cell @click="showCloseIcon = true">关闭图标</mx-cell>
    <mx-cell @click="showCustomCloseIcon = true">自定义图标</mx-cell>
    <mx-cell @click="showCustomIconPosition = true">图标位置</mx-cell>
    <mx-popup
      v-model:show="showCloseIcon"
      closeable
      position="bottom"
      :style="{ height: '30%' }"
    />
    <mx-popup
      v-model:show="showCustomCloseIcon"
      closeable
      close-icon="close"
      position="bottom"
      :style="{ height: '30%' }"
    />
    <mx-popup
      v-model:show="showCustomIconPosition"
      closeable
      close-icon-position="top-left"
      position="bottom"
      :style="{ height: '30%' }"
    />
  </demo-block>

  <demo-block title="圆角弹窗">
    <mx-cell @click="showRoundCorner = true">圆角弹窗</mx-cell>
    <mx-popup
      v-model:show="showRoundCorner"
      round
      position="bottom"
      :style="{ height: '30%' }"
    />
  </demo-block>

  <demo-block title="指定挂载节点">
    <mx-cell @click="showGetContainer = true">指定挂载节点</mx-cell>
    <mx-popup
      v-model:show="showGetContainer"
      teleport="body"
      :style="{ padding: '30px 50px' }"
    />
  </demo-block>
</template>

<script setup lang="ts">
import MxPopup from '..';
import MxCell from '../../cell';
import { ref } from 'vue';

const showBasic = ref(false);
const showTop = ref(false);
const showBottom = ref(false);
const showLeft = ref(false);
const showRight = ref(false);
const showCloseIcon = ref(false);
const showRoundCorner = ref(false);
const showGetContainer = ref(false);
const showCustomCloseIcon = ref(false);
const showCustomIconPosition = ref(false);
</script>
<style lang="less">
.demo-popup {
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
  .line {
    padding: 10px 0;
    position: relative;
    &:not(:last-child) {
      border-bottom: 0.5px solid var(--mx-white-3);
    }
  }
}
</style>
