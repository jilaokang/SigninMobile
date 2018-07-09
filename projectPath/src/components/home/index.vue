<template>
  <div>
    <GroupTitle>今日情况</GroupTitle>
    <Flexbox :gutter="16" class="bgWhite">
      <FlexboxItem>
        <percent :data="siginValue"></percent>
      </FlexboxItem>
    </Flexbox>
    <GroupTitle>校园概况</GroupTitle>
    <Flexbox :gutter="16">
      <FlexboxItem>
        <swiperLine :data="chart"></swiperLine>
      </FlexboxItem>
    </Flexbox>
    <GroupTitle>系部概况</GroupTitle>
    <Flexbox>
      <FlexboxItem>
        <chartSwiper></chartSwiper>
      </FlexboxItem>
    </Flexbox>
  </div>
</template>

<script>
import { GroupTitle, Flexbox, FlexboxItem } from "vux";

import swiperLine from "../common/Swiper/Line";

import chartLine from "../common/chart/Line";
import chartCol from "../common/chart/Col";
import percent from "../common/chart/Percent";

import chartSwiper from "../common/Swiper/Col";

export default {
  components: {
    GroupTitle,
    percent,
    Flexbox,
    FlexboxItem,
    chartLine,
    chartCol,
    chartSwiper,
    swiperLine
  },
  data() {
    return {
      siginValue: {
        title: "我校今日签到",
        today: 83,
        yeasterday: 86,
        lastmonth: 79
      },
      chart: [
        {
          config: {
            title: "上周本系签到率走势",
            max: 100,
            min: 60
          },
          data: [
            { x: "周一", y: 80 },
            { x: "周二", y: 90 },
            { x: "周三", y: 70 },
            { x: "周四", y: 80 },
            { x: "周五", y: 85 },
            { x: "周六", y: 69 },
            { x: "周日", y: 75 }
          ]
        },
        {
          config: {
            title: "本月本系签到率走势",
            max: 100,
            min: 60
          },
          data: [
            { x: "3/4", y: 88 },
            { x: "3/8", y: 90 },
            { x: "3/12", y: 93 },
            { x: "3/16", y: 85 },
            { x: "3/20", y: 89 },
            { x: "3/24", y: 86 },
            { x: "3/28", y: 80 }
          ]
        },
        {
          config: {
            title: "本学期本系签到率报表走势",
            max: 100,
            min: 60
          },
          data: [
            { x: "3/8", y: 95 },
            { x: "3/28", y: 93 },
            { x: "4/8", y: 85 },
            { x: "4/28", y: 86 },
            { x: "5/8", y: 90 },
            { x: "5/28", y: 83 },
            { x: "6/8", y: 85 }
          ]
        }
      ]
    };
  }
};
</script>
