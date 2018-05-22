<template>
  <div class="vux-circle-demo">
    <div style='width:100px;height:100px;'>
      <x-circle
        :percent="percent"
        :stroke-width="6"
        :trail-width="6"
        :stroke-color="['#36D1DC', '#5B86E5']"
        trail-color="#ececec">
        <span style="color:#36D1DC">{{ percent }}%</span>
        <p style="color: #36D1DC">今日签到</p>
      </x-circle>
    </div>
  </div>
</template>

<script>
  import { XCircle } from 'vux'

  export default {
    components: {
      XCircle
    },
    data () {
      return {
        percent: 80
      }
    }
  }
</script>

<style scoped>
  .vux-circle-demo {
    padding-top: 20px;
    text-align: center;
  }
  .vux-circle-demo > div {
    margin: 0 auto;
  }
</style>
