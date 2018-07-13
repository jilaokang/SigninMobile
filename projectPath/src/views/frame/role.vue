<template>
  <div>
    <headerNav class="flexTop"></headerNav>
    <router-view class="margintop20"></router-view>
  </div>
</template>

<script>
  import headerNav from './nav'

  export default {
    components: {
      headerNav
    }
  }
</script>

<style scoped lang="scss">
  @import "../scss/var";

  .flexTop {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    background-color: #393a3f;
  }

  .margintop20 {
    margin-top: 45px;
  }
</style>
