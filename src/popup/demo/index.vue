<template>
  <demo-block card title="基础用法">
    <div class="line" @click="showBasic = true">展示弹窗层</div>
    <mx-popup v-model:show="showBasic" :style="{ padding: '30px 50px' }">
      内容
    </mx-popup>
  </demo-block>

  <demo-block card title="弹出位置">
    <div class="line" @click="showTop = true">顶部弹出</div>
    <div class="line" @click="showBottom = true">底部弹出</div>
    <div class="line" @click="showLeft = true">左侧弹出</div>
    <div class="line" @click="showRight = true">右侧弹出</div>
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
    <div class="line" @click="showCloseIcon = true">关闭图标</div>
    <div class="line" @click="showCustomCloseIcon = true">自定义图标</div>
    <div class="line" @click="showCustomIconPosition = true">图标位置</div>
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

  <demo-block card title="圆角弹窗">
    <div class="line" @click="showRoundCorner = true">圆角弹窗</div>
    <mx-popup
      v-model:show="showRoundCorner"
      round
      position="bottom"
      :style="{ height: '30%' }"
    />
  </demo-block>

  <demo-block card title="指定挂载节点">
    <div class="line" @click="showGetContainer = true">指定挂载节点</div>
    <mx-popup
      v-model:show="showGetContainer"
      teleport="body"
      :style="{ padding: '30px 50px' }"
    />
  </demo-block>
</template>

<script setup lang="ts">
import MxPopup from '..';
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
  .van-doc-demo-block__card {
    background-color: var(--mx-background-color-light);
    padding: 0 15px;
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
