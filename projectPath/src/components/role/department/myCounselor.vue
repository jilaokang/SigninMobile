<template>
  <div>
    <div class="container" @click="display()">
      <XButton>这是个按钮</XButton>
    </div>
    <checklist :style="button?'display:block':'display:none'" title="显示范围" :options="checklist.commonList"
               v-model="checklist.checklist"></checklist>
    <percent :siginValue="siginValue"></percent>
    <Swiper>
      <SwiperItem>
        <chartLine :chart="chart2"></chartLine>
      </SwiperItem>
      <SwiperItem>
        <chartLine :chart="chart2"></chartLine>
      </SwiperItem>
      <SwiperItem>
        <chartLine :chart="chart2"></chartLine>
      </SwiperItem>
    </Swiper>
    <chartCol :chart="chart"></chartCol>
    <chartCompare :chart="chart3"></chartCompare>
  </div>
</template>

<script>
  import {Checklist, XButton, Swiper, SwiperItem} from 'vux'

  import chartCol from '../../common/chart/chartCol';
  import chartLine from '../../common/chart/chartLine'
  import chartCompare from '../../common/chart/chartCompare'
  import percent from '../../common/chart/chartPercent'

  export default {
    components: {
      Checklist,
      XButton,
      chartCol,
      chartLine,
      chartCompare,
      percent,
      Swiper,
      SwiperItem
    },
    data() {
      return {
        siginValue: {
          title: '本系今日签到',
          today: 85,
          yeasterday: 72,
          lastmonth: 75
        },
        chart2: {
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
        },
        chart3: {
          config: {
            title: "上周辅导员管辖班级签到率对比"
          },
          data: [
            {content: "甘小武", y: 65, x: "5/1"},
            {content: "甘小武", y: 67, x: "5/2"},
            {content: "甘小武", y: 68, x: "5/3"},
            {content: "甘小武", y: 78, x: "5/4"},
            {content: "甘小武", y: 85, x: "5/5"},
            {content: "甘小武", y: 75, x: "5/6"},
            {content: "甘小武", y: 83, x: "5/7"},
            {content: "甘小武", y: 85, x: "5/8"},
            {content: "甘小武", y: 88, x: "5/9"},
            {content: "赵老师", y: 95, x: "5/1"},
            {content: "赵老师", y: 78, x: "5/2"},
            {content: "赵老师", y: 85, x: "5/3"},
            {content: "赵老师", y: 87, x: "5/4"},
            {content: "赵老师", y: 86, x: "5/5"},
            {content: "赵老师", y: 85, x: "5/6"},
            {content: "赵老师", y: 63, x: "5/7"},
            {content: "赵老师", y: 78, x: "5/8"},
            {content: "赵老师", y: 89, x: "5/9"},
            {content: "刘老师", y: 95 - 5, x: "5/1"},
            {content: "刘老师", y: 78 - 5, x: "5/2"},
            {content: "刘老师", y: 85 - 5, x: "5/3"},
            {content: "刘老师", y: 87 - 5, x: "5/4"},
            {content: "刘老师", y: 86 - 5, x: "5/5"},
            {content: "刘老师", y: 85 - 5, x: "5/6"},
            {content: "刘老师", y: 63 + 5, x: "5/7"},
            {content: "刘老师", y: 78 - 5, x: "5/8"},
            {content: "刘老师", y: 89 - 5, x: "5/9"},
          ]
        },
        chart: {
          config: {
            title: '上周辅导员平均签到率'
          },
          data: [
            {x: '甘老师', y: 75},
            {x: '张老师', y: 85},
            {x: '刘老师', y: 90},
            {x: '李老师', y: 78},
            {x: '米老师', y: 93},
          ]

        },
        button: false,
        checklist: {
          commonList: ['张三', '李四', '王五', '赵六', '刘七'],
          checklist: [],
        }
      }
    },
    methods: {
      display() {
        this.button = !(Boolean(this.button))
      }
    }
  }
</script>
