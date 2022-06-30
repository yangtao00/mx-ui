<template>
  <demo-block card title="基础用法">
    <div @click="showBasic = true">基础用法</div>
    <div @click="showCancel = true">展示取消按钮</div>
    <div title="展示描述信息" @click="showDescription = true" />
  </demo-block>

  <mx-action-sheet
    v-model:show="showBasic"
    :actions="simpleActions"
    cancel-text="取消"
    @select="onSelect"
  />
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import MxActionSheet, { ActionSheetAction } from '..';

const showBasic = ref(false);
const showCancel = ref(false);
const showTitle = ref(false);
const showStatus = ref(false);
const showDescription = ref(false);

const simpleActions = computed<ActionSheetAction[]>(() => [
  { name: '选项一' },
  { name: '选项二', disabled: true },
  { name: '选项三' },
]);

const onSelect = (item: ActionSheetAction) => {
  showBasic.value = false;
  console.log(item.name);
};
</script>
