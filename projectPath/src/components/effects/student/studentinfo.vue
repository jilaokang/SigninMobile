<template>
  <div style="margin-bottom: 15px">
    <topTime></topTime>
   <router-view></router-view>
  </div>
</template>

<script>
  import topTime from '../../common/topTime'

  export default {
    components:{
      topTime
    }
  }
</script>

<style scoped>

</style>
