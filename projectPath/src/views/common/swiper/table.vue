<template>
  <mt-swipe :auto="0" class="tableswiper">
    <mt-swipe-item v-for="(item, index) in data" :key="index">
      <Table class="Table" :table="item"></Table>
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
  import Table from "../chart/table";

  export default {
    components: {Table},
    props: ['data'],
    mounted() {
      try {
        setTimeout(() => {
          document.getElementsByClassName('tableswiper')[0].style.height = document.querySelector('.Table').offsetHeight + 40 + 'px'
        }, 1800)
      } catch (error) {
        console.log('err in table')
      }
    }
  }
</script>

<style scoped>
  .tableswiper {
    background: white;
  }
</style>

