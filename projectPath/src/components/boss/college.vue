<template>
  <div>
    <Swiper>
      <SwiperItem>
        <v-chart :data="data">
          <v-scale x type="timeCat" mask="MM/DD" :tick-count="3"/>
          <v-scale y :min="0" alias="日均温度" :tick-count="5"/>
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
          <v-scale x type="timeCat" mask="MM/DD" :tick-count="3"/>
          <v-scale y :min="0" alias="日均温度" :tick-count="5"/>
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
          {time: '2016-08-08 00:00:00', tem: 10},
          {time: '2016-08-08 00:10:00', tem: 22},
          {time: '2016-08-08 00:30:00', tem: 20},
          {time: '2016-08-09 00:35:00', tem: 26},
          {time: '2016-08-09 01:00:00', tem: 20},
          {time: '2016-08-09 01:20:00', tem: 26},
          {time: '2016-08-10 01:40:00', tem: 28},
          {time: '2016-08-10 02:00:00', tem: 20},
          {time: '2016-08-10 02:20:00', tem: 18}
        ]
      }
    }
  }
</script>

<style lang='css'>
  .v-chart{
    height: 100%;
  }
</style>

