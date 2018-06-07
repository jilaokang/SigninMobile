<template>
  <div>
    <div class="container" @click="display()">
      <XButton>这是个按钮</XButton>
    </div>
    <checklist :style="button?'display:block':'display:none'" title="显示范围" :options="checklist.commonList"
               v-model="checklist.checklist"></checklist>
    <chartCol :chart="chart"></chartCol>
    <chartLine :chart="chart2"></chartLine>
    <chartCompare :chart="chart3"></chartCompare>
  </div>
</template>

<script>
  import {Checklist, XButton} from 'vux'

  import chartCol from '../../common/chartColumn';
  import chartLine from '../../common/chartLine'
  import chartCompare from '../../common/chartCompare'

  export default {
    components: {
      Checklist,
      XButton,
      chartCol,
      chartLine,
      chartCompare
    },
    data() {

      return {
        chart2: {
          config: {
            title: '本周的测试标题',
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
            title: "本周信息系签到率"
          },
          data: [
            {content: "甘小武", y: 65, x: 1940},
            {content: "甘小武", y: 67, x: 1941},
            {content: "甘小武", y: 68, x: 1942},
            {content: "甘小武", y: 78, x: 1943},
            {content: "甘小武", y: 85, x: 1944},
            {content: "甘小武", y: 75, x: 1945},
            {content: "甘小武", y: 83, x: 1946},
            {content: "甘小武", y: 85, x: 1947},
            {content: "甘小武", y: 88, x: 1948},
            {content: "甘小六", y: 98, x: 1940},
            {content: "甘小六", y: 78, x: 1941},
            {content: "甘小六", y: 85, x: 1942},
            {content: "甘小六", y: 87, x: 1943},
            {content: "甘小六", y: 86, x: 1944},
            {content: "甘小六", y: 85, x: 1945},
            {content: "甘小六", y: 63, x: 1946},
            {content: "甘小六", y: 78, x: 1947},
            {content: "甘小六", y: 89, x: 1948},
            {content: "刘小六", y: 98-5, x: 1940},
            {content: "刘小六", y: 78-5, x: 1941},
            {content: "刘小六", y: 85-5, x: 1942},
            {content: "刘小六", y: 87-5, x: 1943},
            {content: "刘小六", y: 86-5, x: 1944},
            {content: "刘小六", y: 85-5, x: 1945},
            {content: "刘小六", y: 63-5, x: 1946},
            {content: "刘小六", y: 78-5, x: 1947},
            {content: "刘小六", y: 89-5, x: 1948},
          ]
        },
        chart: {
          config: {
            title: '辅导员管理班级签到率'
          },
          data: [
            {x: '信息系', y: 75},
            {x: '法律系', y: 85},
            {x: '外语系', y: 90},
            {x: '会计系', y: 78},
            {x: '金融系', y: 93},
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
