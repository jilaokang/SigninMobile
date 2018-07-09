<template>
  <div>
    <search :searchArry="searchArry"></search>
    <percent :data="data.percent"></percent>
    <chartLine :data="data.chart"></chartLine>
    <Table :data="data.table"></Table>
  </div>
</template>

<script>
import { XButton, Swiper, SwiperItem } from "vux";

import chartCol from "../../common/chart/Col";
import chartLine from "../../common/Swiper/Line.vue";
import chartCompare from "../../common/chart/Compare";
import percent from "../../common/chart/Percent";
import search from "../../common/search";
import Table from "../../common/Swiper/Table.vue";

export default {
  components: {
    XButton,
    chartCol,
    chartLine,
    chartCompare,
    percent,
    Swiper,
    SwiperItem,
    search,
    Table
  },
  data() {
    return {
      data: {
        percent: {
          title: "本系今日签到",
          today: 85,
          yeasterday: 72,
          lastmonth: 75
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
        ],
        table: [
          {
            config: {
              nav: "近七日签到率",
              title: ["姓名", "腾讯通", "签到率"]
            },
            content: [
              ["信息系"],
              ["赵老师", "15031017", "98%"],
              ["李老师", "15031017", "98%"],
              ["法律系"],
              ["刘老师", "15031017", "98%"]
            ]
          },
          {
            config: {
              nav: "近一个月签到率",
              title: ["姓名", "腾讯通", "签到率"]
            },
            content: [
              ["信息系"],
              ["赵老师", "15031017", "98%"],
              ["李老师", "15031017", "98%"],
              ["法律系"],
              ["赵老师", "15031017", "98%"]
            ]
          },
          {
            config: {
              nav: "近一个学期签到率",
              title: ["姓名", "腾讯通", "签到率"]
            },
            content: [
              ["信息系"],
              ["赵老师", "15031017", "98%"],
              ["李老师", "15031017", "98%"],
              ["法律系"],
              ["赵老师", "15031017", "98%"]
            ]
          }
        ]
      }
    };
  },
  computed: {
    searchArry() {
      let data = this.data.table[0].content;
      let arr = [];

      for (let i of data) {
        arr.push(i[0]);
      }

      return arr;
    }
  }
};
</script>
