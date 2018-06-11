<template>
  <div class="flexBottom">
    <tabbar>
      <tabbar-item link="/home">
        <font slot="icon" class="icon-home iconfont"></font>
        <span slot="label">
            首页
        </span>
      </tabbar-item>
      <tabbar-item link="/app">
        <font slot="icon" class="icon-more-function iconfont"></font>
        <span slot="label">
            功能
        </span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem} from 'vux'

  export default {
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style scoped>
  .flexBottom {
    width: 100%;
    z-index: 999;
    position: fixed;
    bottom: 0;
  }

  .iconfont {
    font-size: 22px !important;
  }
</style>
