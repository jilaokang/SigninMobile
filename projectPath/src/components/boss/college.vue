<template>
  <div>
    <Swiper height="300px" style="width:85%;margin:0 auto;" dots-position="center">
      <SwiperItem>
        <v-chart :data="data">
          <v-scale x  :tick-count="7"/>
          <v-scale y :min="70" :max="90" alias="签到情况" :tick-count="10"/>
          <v-point
            :style="{
          stroke: '#fff',
          lineWidth: 1
        }"
            shape="smooth"/>
          <v-line shape="smooth"/>
        </v-chart>
      </SwiperItem>
      <SwiperItem>
        <v-chart :data="data">
          <v-scale x :tick-count="7"/>
          <v-scale y :min="70" :max="90" alias="签到情况" :tick-count="10"/>
          <v-point
            :style="{
          stroke: '#fff',
          lineWidth: 1
        }"
            shape="smooth"/>
          <v-line shape="smooth"/>
        </v-chart>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
  /* eslint-disable */
  import {VChart, VLine, VPoint, VScale, VTooltip, Swiper, SwiperItem} from 'vux'

  export default {
    components: {
      VChart,
      VPoint,
      VLine,
      VScale,
      VTooltip, Swiper, SwiperItem
    },
    data() {
      return {
        data: [
          {time: '周一', tem: 75},
          {time: '周二', tem: 78},
          {time: '周三', tem: 85},
          {time: '周四', tem: 89},
          {time: '周五', tem: 90},
          {time: '周六', tem: 85},
          {time: '周末', tem: 83}
        ]
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

