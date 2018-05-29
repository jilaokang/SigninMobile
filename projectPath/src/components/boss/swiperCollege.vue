<template>
  <div>
    <Swiper height="300px" style="margin: 16px 0" dots-position="center">
      <SwiperItem>
        <v-chart :data="swiperlist[0].data">
          <v-scale x :tick-count="7"/>
          <v-scale y :min="70" :max="90" :tick-count="10"/>
          <v-point :style="{stroke: '#fff',lineWidth: 1}" shape="smooth"/>
          <v-line shape="smooth"/>
        </v-chart>
      </SwiperItem>
      <SwiperItem>
        <v-chart :data="swiperlist[1].data">
          <v-scale x :tick-count="7"/>
          <v-scale y :min="70" :max="90" :tick-count="10"/>
          <v-point :style="{stroke: '#fff',lineWidth: 1}" shape="smooth"/>
          <v-line shape="smooth"/>
        </v-chart>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
  /* eslint-disable */
  import {VChart, VLine, VPoint, VScale, VTooltip, Swiper, SwiperItem, VBar} from 'vux'

  export default {
    components: {
      VChart,
      VPoint,
      VLine,
      VScale,
      VTooltip, Swiper, SwiperItem, VBar
    },
    data() {
      return {
        swiperlist: [{
          data: [
            {time: '周一', 近七天全校到课率: 75},
            {time: '周二', 近七天全校到课率: 78},
            {time: '周三', 近七天全校到课率: 85},
            {time: '周四', 近七天全校到课率: 89},
            {time: '周五', 近七天全校到课率: 90},
            {time: '周六', 近七天全校到课率: 85},
            {time: '周末', 近七天全校到课率: 83}
          ]
        }, {
          data: [
            {time: '第一周', type: 93},
            {time: '第二周', type: 95},
            {time: '第三周', type: 86},
            {time: '第四周', type: 88},
            {time: '第五周', type: 90},
            {time: '第六周', type: 85},
            {time: '第七周', type: 83}
          ]
        }]
      }
    }
  }
</script>

<style lang='css'>
  .v-chart {
    height: 100%;
  }

  canvas {
    width: 100% !important;
    height: 260px !important;
  }
</style>

