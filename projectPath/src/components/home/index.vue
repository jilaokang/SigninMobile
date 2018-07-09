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

  import swiperLine from '../common/Swiper/Line'

  import chartLine from '../common/chart/Line'
  import chartCol from '../common/chart/Col'
  import percent from '../common/chart/Percent'

  import chartSwiper from '../common/Swiper/Col'

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
