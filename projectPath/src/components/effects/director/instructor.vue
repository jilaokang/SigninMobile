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
          data: [{
            x: '2016-08-08 00:00:00',
            y: 80
          }, {
            x: '2016-08-08 00:10:00',
            y: 85
          }, {
            x: '2016-08-08 00:30:00',
            y: 93
          }, {
            x: '2016-08-09 00:35:00',
            y: 78
          }, {
            x: '2016-08-09 01:00:00',
            y: 87
          }, {
            x: '2016-08-09 01:20:00',
            y: 90
          }, {
            x: '2016-08-10 01:40:00',
            y: 75
          }, {
            x: '2016-08-10 02:00:00',
            y: 96
          }, {
            x: '2016-08-10 02:20:00',
            y: 98
          }]
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
