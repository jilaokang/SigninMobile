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
        <swiperLine></swiperLine>
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
        }
      }
    }
  }
</script>
