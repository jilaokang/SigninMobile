<template>
  <div>
    <topTime></topTime>
    <router-view></router-view>
  </div>
</template>

<script>
  import topTime from './Time'

  export default {
    components: {
      topTime
    }
  }
</script>

