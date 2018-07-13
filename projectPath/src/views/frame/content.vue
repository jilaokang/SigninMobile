<template>
  <div>
    <topTime></topTime>
    <router-view></router-view>
  </div>
</template>

<script>
  import topTime from './time'

  export default {
    components: {
      topTime
    }
  }
</script>

