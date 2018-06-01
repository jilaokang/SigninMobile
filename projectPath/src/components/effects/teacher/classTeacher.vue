<template>
  <div>
    <div class="container">
      <classDetail></classDetail>
    </div>
    <chartColumn></chartColumn>
  </div>
</template>

<script>
  import classDetail from '../../common/classDetail'
  import chartColumn from '../../common/chartColumn'

  export default {
    components: {
      classDetail, chartColumn
    }
  }
</script>

<style scoped>
  canvas {
    width: 60% !important;
  }
</style>
