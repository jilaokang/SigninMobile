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
    components: {
      footerBar
    }
  }
</script>
<style>
  @import "../scss/main.css";
  @import "http://at.alicdn.com/t/font_675461_2x7sbu9j2zw7b9.css";

  .marginContent {
    margin-bottom: 80px;
  }

  .card {
    padding: 0 15px
  }
</style>


