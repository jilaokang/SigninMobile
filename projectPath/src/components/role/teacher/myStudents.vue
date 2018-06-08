<template>
  <div class="container">
    <classDetail></classDetail>
  </div>
</template>

<script>
  import classDetail from '../../common/card/classDetail'
  import chartColumn from '../../common/chart/chartCol'

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
