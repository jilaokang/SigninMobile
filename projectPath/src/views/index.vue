<template>
  <div>
    <div class="marginContent">
      <!-- 老板们的全功能板块 -->
      <router-view></router-view>
    </div>
    <!--底部菜单-->
    <footerBar></footerBar>
  </div>
</template>

<script>
  import footerBar from './frame/footerBar'

  export default {
    components: {footerBar}
  }
</script>

<style>
  @import "scss/main.css";
</style>


