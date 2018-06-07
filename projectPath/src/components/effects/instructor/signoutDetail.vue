<template>
  <div>
    <percent :siginValue="siginValue"></percent>
  </div>
</template>

<script>
  import percent from '../../common/percent'

  export default {
    components: {
      percent
    },
    data() {
      return {
        siginValue:{
          today:85,
          yeasterday:72,
          lastmonth:75
        }
      }
    }
  }
</script>

<style scoped>

</style>
