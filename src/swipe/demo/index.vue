<template>
  <demo-block title="基础使用">
    <mx-swipe :autoplay="3000">
      <mx-swipe-item>1</mx-swipe-item>
      <mx-swipe-item>2</mx-swipe-item>
      <mx-swipe-item>3</mx-swipe-item>
      <mx-swipe-item>4</mx-swipe-item>
    </mx-swipe>
  </demo-block>
  <demo-block title="懒加载">
    <mx-swipe :autoplay="3000" lazy-render>
      <mx-swipe-item v-for="image in images" :key="image">
        <img :src="image" />
      </mx-swipe-item>
    </mx-swipe>
  </demo-block>
  <demo-block title="监听change事件">
    <mx-swipe @change="onChange">
      <mx-swipe-item>1</mx-swipe-item>
      <mx-swipe-item>2</mx-swipe-item>
      <mx-swipe-item>3</mx-swipe-item>
      <mx-swipe-item>4</mx-swipe-item>
    </mx-swipe>
  </demo-block>
  <demo-block title="纵向滚动">
    <mx-swipe
      vertical
      :autoplay="3000"
      style="height: 200px"
      class="demo-swipe--vertical"
    >
      <mx-swipe-item>1</mx-swipe-item>
      <mx-swipe-item>2</mx-swipe-item>
      <mx-swipe-item>3</mx-swipe-item>
      <mx-swipe-item>4</mx-swipe-item>
    </mx-swipe>
  </demo-block>
  <demo-block title="自定义滑块大小">
    <mx-swipe :width="300" :loop="false">
      <mx-swipe-item>1</mx-swipe-item>
      <mx-swipe-item>2</mx-swipe-item>
      <mx-swipe-item>3</mx-swipe-item>
      <mx-swipe-item>4</mx-swipe-item>
    </mx-swipe>
  </demo-block>
  <demo-block title="自定义指示器">
    <mx-swipe>
      <mx-swipe-item>1</mx-swipe-item>
      <mx-swipe-item>2</mx-swipe-item>
      <mx-swipe-item>3</mx-swipe-item>
      <mx-swipe-item>4</mx-swipe-item>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
      </template>
    </mx-swipe>
  </demo-block>
</template>
<script lang="ts" setup>
import MxSwipe from '..';
import MxSwipeItem from '../../swipe-item';
import Toast from '../../toast';

const cdnURL = (imgExt: string) =>
  `https://fastly.jsdelivr.net/npm/@vant/assets/${imgExt}`;

const images = [
  cdnURL('apple-1.jpeg'),
  cdnURL('apple-2.jpeg'),
  cdnURL('apple-3.jpeg'),
  cdnURL('apple-4.jpeg'),
];
const onChange = (index: number) => Toast('当前索引：' + index);
</script>
<style lang="less">
.demo-swipe {
  padding-bottom: 30px;

  .mx-swipe {
    &-item {
      color: var(--mx-white-1);
      font-size: 20px;
      line-height: 150px;
      text-align: center;

      &:nth-child(even) {
        background-color: #39a9ed;
      }

      &:nth-child(odd) {
        background-color: #66c6f2;
      }
    }

    img {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 240px;
      padding: 30px 60px;
      background-color: var(--mx-white-1);
      pointer-events: none;
    }
  }

  &--vertical {
    .mx-swipe-item {
      line-height: 200px;
    }
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    color: var(--mx-white-1);
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
