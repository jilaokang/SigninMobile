<template>
  <div>
    <Swiper :height="this.height">
      <SwiperItem v-for="a in chart" :key="a">
        <chartCol :chart="a"></chartCol>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'vux'
  import chartCol from '../chart/Col'

  export default {
    components: {
      chartCol,
      Swiper,
      SwiperItem
    },
  computed: {
    height() {
      return (window.innerWidth > window.innerHeight
        ? window.innerHeight - 54
        : window.innerWidth * 0.707) +40+'px';
    }
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
            {x: '金融系', y: 80},
            {x: '会计系', y: 90},
            {x: '信息系', y: 83},
            {x: '法律系', y: 80},
            {x: '艺术系', y: 68},
            {x: '传播系', y: 69},
            {x: '工管系', y: 85}
          ]
        }, {
          config: {
            title: '本月全校签到率报表',
            max: 100,
            min: 60
          },
          data: [
            {x: '金融系', y: 85},
            {x: '会计系', y: 93},
            {x: '信息系', y: 79},
            {x: '法律系', y: 85},
            {x: '艺术系', y: 70},
            {x: '传播系', y: 89},
            {x: '工管系', y: 83}
          ]
        }, {
          config: {
            title: '本学期全校签到率报表',
            max: 100,
            min: 60
          },
          data: [
            {x: '金融系', y: 86},
            {x: '会计系', y: 93},
            {x: '信息系', y: 89},
            {x: '法律系', y: 89},
            {x: '艺术系', y: 75},
            {x: '传播系', y: 90},
            {x: '工管系', y: 85}
          ]
        }]
      }
    }
  }
</script>

<style scoped>

</style>
