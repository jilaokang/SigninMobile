<template>
  <div>
    <GroupTitle>今日情况</GroupTitle>

    <Flexbox :gutter="16" class="bgWhite">
      <FlexboxItem>
        <percent :siginValue="siginValue"></percent>
      </FlexboxItem>
    </Flexbox>

    <GroupTitle>校园概况</GroupTitle>
    <Flexbox :gutter="16">
      <FlexboxItem>
        <chartLine :chart="chart2"></chartLine>
      </FlexboxItem>
    </Flexbox>
    <GroupTitle>系部概况</GroupTitle>
    <Flexbox>
      <FlexboxItem>
        <chartCol :chart="chart"></chartCol>
        <chartSwiper></chartSwiper>
        <swiperLine></swiperLine>
      </FlexboxItem>
    </Flexbox>
  </div>
</template>

<script>
  import {GroupTitle, Flexbox, FlexboxItem} from 'vux'

  import swiperLine from '../common/chartSwiper/swiperLine'

  import chartLine from '../common/chart/chartLine'
  import chartCol from '../common/chart/chartCol'
  import percent from '../common/chart/chartPercent'

  import chartSwiper from '../common/chartSwiper/swiperCol'

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
          title: '我校今日签到',
          today: 83,
          yeasterday: 86,
          lastmonth: 79
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

        }
      }
    }
  }
</script>
