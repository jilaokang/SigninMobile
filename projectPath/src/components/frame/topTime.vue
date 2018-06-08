<template>
  <div>
    <topTime></topTime>
    <router-view></router-view>
  </div>
</template>

<script>
  import topTime from '../common/frame/headerTime'

  export default {
    components: {
      topTime
    }
  }
</script>

<style scoped>

</style>
