<template>
  <div>
    <Swiper>
      <SwiperItem v-for="a in chart" :key="a">
        <chartLine :chart="a"></chartLine>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'vux'
  import chartLine from '../chart/chartLine'

  export default {
    components: {
      chartLine,
      Swiper,
      SwiperItem
    },
    data() {
      return {
        chart: [{
          config: {
            title: '上周全校签到率报表',
            max: 100,
            min: 60
          },
          data: [
            {x: '周一', y: 80},
            {x: '周二', y: 90},
            {x: '周三', y: 70},
            {x: '周四', y: 80},
            {x: '周五', y: 85},
            {x: '周六', y: 69},
            {x: '周日', y: 75}
          ]
        }, {
          config: {
            title: '本月全校签到率报表',
            max: 100,
            min: 60
          },
          data: [
            {x: '3/4', y: 88},
            {x: '3/8', y: 90},
            {x: '3/12', y: 93},
            {x: '3/16', y: 85},
            {x: '3/20', y: 89},
            {x: '3/24', y: 86},
            {x: '3/28', y: 80}
          ]
        }, {
          config: {
            title: '本学期全校签到率报表',
            max: 100,
            min: 60
          },
          data: [
            {x: '3/8', y: 95},
            {x: '3/28', y: 93},
            {x: '4/8', y: 85},
            {x: '4/28', y: 86},
            {x: '5/8', y: 90},
            {x: '5/28', y: 83},
            {x: '6/8', y: 85}
          ]
        }]
      }
    }
  }
</script>

<style scoped>

</style>
