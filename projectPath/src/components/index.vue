<template>
  <div>
    <headerBar></headerBar>
    <!--todo-->
    <div class="marginContent">
      <!-- 老板们的全功能板块 -->
      <router-view></router-view>
    </div>
    <!--底部菜单-->
    <buttomBar></buttomBar>
  </div>
</template>

<script>
  /* eslint-disable */
  import {GroupTitle} from 'vux'
  import college from './boss/index'
  import footerApp from './common/appList'

  import buttomBar from './frame/buttomBar'
  import headerBar from './frame/headerBar'

  export default {
    components: {
      GroupTitle,
      footerApp,
      college,
      buttomBar,
      headerBar
    }
  }
</script>
<style>
  @import "../scss/main.css";
  @import "http://at.alicdn.com/t/font_675461_awg8b6d5y6dvaemi.css";

  .flexTop {
    position: fixed !important;
    width: 100%;
    margin-bottom: 20px;
    top: 0;
    z-index: 999;
  }

  .marginContent {
    margin-bottom: 80px;
  }

  .card {
    padding: 0 15px
  }
</style>


