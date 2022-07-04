<template>
  <demo-block card title="基础用法">
    <mx-cell @click="showBasic = true">基础用法</mx-cell>
    <mx-cell @click="showCancel = true">展示取消按钮</mx-cell>
    <mx-cell title="展示标题和描述信息" @click="showDescription = true" />
  </demo-block>

  <mx-action-sheet
    v-model:show="showBasic"
    :actions="simpleActions"
    @select="onSelect"
  />
  <mx-action-sheet
    v-model:show="showCancel"
    :actions="simpleActions"
    cancel-text="取消"
    @select="onSelect"
  />
  <mx-action-sheet
    v-model:show="showDescription"
    title="动作面板"
    description="这是一段描述信息，最多显示3行"
    :actions="simpleActions"
    cancel-text="取消"
    @select="onSelect"
  />
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import MxActionSheet, { ActionSheetAction } from '..';
import MxCell from '../../cell';

const showBasic = ref(false);
const showCancel = ref(false);
const showDescription = ref(false);

const simpleActions = computed<ActionSheetAction[]>(() => [
  { name: '选项一' },
  { name: '选项二（禁用）', disabled: true },
  { name: '选项三' },
]);

const onSelect = (item: ActionSheetAction) => {
  showBasic.value = false;
  console.log(item.name);
};
</script>
<style lang="less">
.van-doc-demo-block {
  .mx-cell {
    margin-bottom: 10px;
  }
}
</style>
