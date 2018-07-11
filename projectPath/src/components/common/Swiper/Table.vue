<template>
  <mt-swipe :auto="0" class="tableswiper">
    <mt-swipe-item v-for="(item, index) in data" :key="index">
      <Table class="Table" :table="item"></Table>
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
  import Table from "../chart/Table";

  export default {
    components: {Table},
    props: ['data', 'height'],
    mounted() {
      setTimeout(() => {
        document.getElementsByClassName('tableswiper')[0].style.height = this.height()
      }, 2000)
    }
  }
</script>

<style scoped>
  .tableswiper{
    background: white;
  }
</style>

