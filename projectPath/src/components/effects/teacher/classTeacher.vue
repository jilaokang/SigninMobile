<template>
  <div class="container">
    <classDetail></classDetail>
  </div>
</template>

<script>
  import classDetail from '../../common/classDetail'
  import chartColumn from '../../common/chartColumn'

  export default {
    components: {
      classDetail
    }
  }
</script>

<style scoped>
  canvas {
    width: 60% !important;
  }
</style>
