<template>
  <div>
    <x-header class="flexTop" title="签到系统" :left-options="{showBack: false}"></x-header>
    <div class="marginContent">
      <!-- 老板们的全功能板块 -->
      <router-view></router-view>
    </div>
    <!-- 全英雄选择 -->
    <buttomBar></buttomBar>
  </div>
</template>

<script>
  /* eslint-disable */
  import {GroupTitle, XHeader} from 'vux'
  import college from './boss/index'
  import buttomBar from './frame/buttomBar'

  import footerApp from './common/App'


  export default {
    components: {
      GroupTitle,
      footerApp,
      college,
      XHeader,
      buttomBar
    }
  }
</script>
<style>
  @import "http://at.alicdn.com/t/font_675461_g11k10ytjaq93sor.css";

  .weui-grid__label {
    line-height: 3;
  }

  .bgWhite, .vux-flexbox-item {
    background: white !important;
  }

  .weui-grids:before, .weui-grid:after {
    border: none !important;
  }

  .flexTop {
    position: fixed !important;
    width: 100%;
    margin-bottom: 20px;
    top: 0;
    z-index: 999;
  }


  .marginContent {
    margin-top: 56px;
    margin-bottom: 80px;
  }
</style>


