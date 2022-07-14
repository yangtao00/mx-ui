<template>
  <demo-block card title="基础用法">
    <mx-cell-group>
      <mx-cell title="提示弹窗" @click="onClickAlert" />
      <mx-cell title="提示弹窗（无标题）" @click="onClickAlert2" />
      <mx-cell title="确认弹窗" @click="onClickConfirm" />
    </mx-cell-group>
  </demo-block>
  <demo-block card title="异步关闭">
    <mx-cell title="异步关闭" @click="onClickBeforeClose" />
  </demo-block>
  <demo-block card title="组件调用">
    <mx-cell title="组件调用" @click="show = true" />
    <mx-dialog
      v-model:show="show"
      title="组件调用"
      show-cancel-button
      :lazy-render="false"
    >
      <div class="dialog-img">图片占位</div>
      <div>这里是一段描述，居中对齐。这里是折行的情</div>
    </mx-dialog>
  </demo-block>
</template>
<script setup lang="ts">
import MxCell from '../../cell';
import MxCellGroup from '../../cell-group';
import { Dialog } from '..';
import { DialogAction } from '../types';
import { ref } from 'vue';

const MxDialog = Dialog.Component;
const onClickAlert = () => {
  Dialog.alert({
    title: '标题',
    message: '9.22年中大促',
  });
};

const onClickAlert2 = () => {
  Dialog.alert({
    message: '9.22年中大促',
  });
};
const onClickConfirm = () => {
  Dialog.confirm({
    title: '标题',
    message: '9.22年中大促',
  });
};
const onClickBeforeClose = () => {
  const beforeClose = (action: DialogAction) =>
    new Promise<boolean>(resolve => {
      setTimeout(() => resolve(action === 'confirm'), 1000);
    });

  Dialog.confirm({
    title: '提示',
    message: '9.22年中大促',
    beforeClose,
  });
};
const show = ref(false);
</script>
<style lang="less">
.demo-dialog .mx-doc-demo-block {
  padding: 0 10px;
}
.dialog-img {
  width: 240px;
  height: 5340px;
  background: var(--mx-pink-1);
}
</style>
