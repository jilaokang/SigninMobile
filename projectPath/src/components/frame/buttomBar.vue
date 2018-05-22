<template>
  <div class="flexBottom">
    <tabbar>
      <tabbar-item link="/home">
        <font class="icon-custom-teacher iconfont"></font>
        <span slot="label">
            首页
        </span>
      </tabbar-item>
      <tabbar-item link="/effect">
        <font class="icon-custom-teacher iconfont"></font>
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
      Tabbar, TabbarItem
    }
  }
</script>

<style scoped>
  .flexBottom {
    width: 100%;
    position: fixed;
    bottom: 0;
  }
</style>
