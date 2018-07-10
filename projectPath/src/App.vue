<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "app"
  };
</script>

<style lang="less">
  @import "~vux/src/styles/reset.less";

  body {
    background-color: #fbf9fe;
  }

  html,
  body {
    width: 100% !important;
    overflow-x: hidden !important;
  }

  .weui-bar__item_on .weui-tabbar__icon,
  .weui-bar__item_on .weui-tabbar__label {
    color: dodgerblue !important;
  }

  .vux-search_show {
    z-index: 999 !important;
    background: wheat;
  }
</style>
