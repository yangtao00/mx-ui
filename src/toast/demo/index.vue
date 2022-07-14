<template>
  <demo-block card title="基础用法">
    <mx-cell-group>
      <mx-cell is-link title="文字提示" @click="Toast('文字提示')" />
      <mx-cell is-link title="加载提示" @click="showLoadingToast()" />
      <mx-cell is-link title="成功提示" @click="showSuccessToast" />
      <mx-cell is-link title="失败提示" @click="showFailToast" />
      <mx-cell is-link title="自定义内容" @click="showCustom" />
    </mx-cell-group>
  </demo-block>
  <demo-block card title="自定义图标">
    <mx-cell is-link title="自定义图标" @click="showIconToast" />
  </demo-block>
  <demo-block card title="自定义位置">
    <mx-cell-group>
      <mx-cell is-link title="顶部展示" @click="showTopToast" />
      <mx-cell is-link title="中间展示" @click="showMiddleToast" />
    </mx-cell-group>
  </demo-block>
  <demo-block card title="组件调用">
    <mx-cell is-link title="组件调用" @click="show = true" />
    <mx-toast
      v-model:show="show"
      icon="https://bohuo.obs.cn-east-3.myhuaweicloud.com/onlineimg/robot-square.png"
    >
      <div class="wrap">
        <div class="toast-desc">这里是一段描述，居中对齐</div>
        <div class="toast-btn">去查看</div>
      </div>
    </mx-toast>
  </demo-block>
</template>
<script lang="ts" setup>
import MxCell from '../../cell';
import MxCellGroup from '../../cell-group';
import { Toast } from '..';
import { ref } from 'vue';

Toast.setDefaultOptions({
  duration: 0,
});

const icon =
  'https://bohuo.obs.cn-east-3.myhuaweicloud.com/onlineimg/robot-square.png';
const showLoadingToast = () => {
  Toast.loading({
    forbidClick: true,
    message: '加载中...',
  });
};
const showSuccessToast = () => {
  Toast.success('视频已下载保存到相册可查看并分享到朋友');
};

const showFailToast = () => {
  Toast.fail('失败提示');
};
const showCustom = () => {
  Toast({
    type: 'html',
    message: `<div class="wrap">
        <div class="toast-desc">自定义内容</div>
        <div class="toast-btn">去查看</div>
      </div>`,
    icon: 'https://bohuo.obs.cn-east-3.myhuaweicloud.com/onlineimg/robot-square.png',
  });
};
const showIconToast = () => {
  Toast({
    message: '自定义图标',
    icon,
  });
};

const showTopToast = () => {
  Toast({
    message: '顶部展示',
    position: 'top',
  });
};

const showMiddleToast = () => {
  Toast({
    message: '中间展示',
    position: 'middle',
  });
};

const MxToast = Toast.Component;
const show = ref(false);
</script>
<style lang="less">
.demo-toast {
  .van-doc-demo-block__title {
    padding: 10px 15px;
  }
}
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  .toast-desc {
    text-align: left;
    width: 100px;
  }
  .toast-btn {
    flex-shrink: 0;
    width: 72px;
    height: 27px;
    margin-left: 15px;
    background: linear-gradient(270deg, #ff7346 0%, #ff2b2b 100%);
    border-radius: 10px;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    line-height: 27px;
    text-align: center;
  }
}
</style>
