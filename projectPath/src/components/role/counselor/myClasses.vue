<template>
  <div>
    <percent :siginValue="siginValue"></percent>
  </div>
</template>

<script>
  import percent from '../../common/chart/Percent'

  export default {
    components: {
      percent
    },
    data() {
      return {
        siginValue: {
          title: '我班今日签到',
          today: 85,
          yeasterday: 72,
          lastmonth: 75
        }
      }
    }
  }
</script>

<style scoped>

</style>
