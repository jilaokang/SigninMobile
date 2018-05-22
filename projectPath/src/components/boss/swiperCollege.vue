<template>
  <div>
    <Swiper height="300px" style="margin: 16px 0" dots-position="center">
      <SwiperItem>
        <v-chart :data="swiperlist[0].data">
          <v-scale x :tick-count="7"/>
          <v-scale y :min="70" :max="90" :tick-count="10"/>
          <v-point series-field="name" :style="{stroke: '#fff',lineWidth: 1}" shape="smooth"/>
          <v-line shape="smooth"/>
        </v-chart>
      </SwiperItem>
      <SwiperItem>
        <v-chart :data="swiperlist[1].data">
          <v-scale x :tick-count="7"/>
          <v-scale y :min="70" :max="90" :tick-count="10"/>
          <v-point series-field="name" :style="{stroke: '#fff',lineWidth: 1}" shape="smooth"/>
          <v-line shape="smooth"/>
        </v-chart>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
  /* eslint-disable */
  import {VChart, VLine, VPoint, VScale, VTooltip, Swiper, SwiperItem, VBar,} from 'vux'

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
            {time: '周一', 上周全校上课情况: 75, name: "上周全校上课情况"},
            {time: '周二', 上周全校上课情况: 78, name: "上周全校上课情况"},
            {time: '周三', 上周全校上课情况: 85, name: "上周全校上课情况"},
            {time: '周四', 上周全校上课情况: 89, name: "上周全校上课情况"},
            {time: '周五', 上周全校上课情况: 90, name: "上周全校上课情况"},
            {time: '周六', 上周全校上课情况: 85, name: "上周全校上课情况"},
            {time: '周末', 上周全校上课情况: 83, name: "上周全校上课情况"}
          ]
        }, {
          data: [
            {time: '第一周', 近七周上课情况: 93, name: "近七周上课情况"},
            {time: '第二周', 近七周上课情况: 95, name: "近七周上课情况"},
            {time: '第三周', 近七周上课情况: 86, name: "近七周上课情况"},
            {time: '第四周', 近七周上课情况: 88, name: "近七周上课情况"},
            {time: '第五周', 近七周上课情况: 90, name: "近七周上课情况"},
            {time: '第六周', 近七周上课情况: 85, name: "近七周上课情况"},
            {time: '第七周', 近七周上课情况: 83, name: "近七周上课情况"}
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

