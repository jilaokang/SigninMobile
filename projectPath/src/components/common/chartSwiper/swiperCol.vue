<template>
  <div>
    <Swiper>
      <SwiperItem v-for="a in chart">
        <chartCol :chart="a"></chartCol>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'vux'
  import chartCol from '../chart/chartCol'

  export default {
    components: {
      chartCol,
      Swiper,
      SwiperItem
    },
    data() {
      return {
        chart: [{
          config: {
            title: '上周信息系签到率报表',
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
            title: '本月信息系签到率报表',
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
            title: '本年度信息系签到率报表',
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
        }]
      }
    }
  }
</script>

<style scoped>

</style>
