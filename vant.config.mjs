export default {
  name: 'akc-ui',
  build: {
    css: {
      preprocessor: 'sass',
    },
    site: {
      publicPath: '/akc-ui/',
    },
    packageManager: 'pnpm',
    extensions: {
      esm: '.mjs',
    },
  },
  site: {
    title: 'akc-ui',
    logo: 'https://img.yzcdn.cn/vant/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'cell',
            title: 'Cell 单元格',
          },
          {
            path: 'button',
            title: 'Button 按钮',
          },
          {
            path: 'popup',
            title: 'Popup 弹出层',
          },
          {
            path: 'toast',
            title: 'Toast 轻提示',
          },
        ],
      },
      {
        title: '反馈组件',
        items: [
          {
            path: 'overlay',
            title: 'Overlay 遮罩层',
          },
          {
            path: 'action-sheet',
            title: 'ActionSheet 动作面板',
          },
          {
            path: 'dialog',
            title: 'Dialog 弹出框',
          },
        ],
      },
      {
        title: '展示组件',
        items: [
          {
            path: 'badge',
            title: 'Badge 徽标',
          },
          {
            path: 'tag',
            title: 'tag 标签',
          },
          {
            path: 'notice-bar',
            title: 'NoticeBar 通知栏',
          },
          {
            path: 'swipe',
            title: 'Swipe 轮播',
          },
          {
            path: 'steps',
            title: 'Steps 步骤条',
          },
        ],
      },
    ],
  },
};
