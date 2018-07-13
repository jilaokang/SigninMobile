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
  import {GroupTitle, Flexbox, FlexboxItem} from "vux";
  import swiperLine from "../common/swiper/line";
  import chartLine from "../common/chart/line";
  import chartCol from "../common/chart/col";
  import percent from "../common/chart/percent";
  import chartSwiper from "../common/swiper/col";

  export default {
    components: {GroupTitle, percent, Flexbox, FlexboxItem, chartLine, chartCol, chartSwiper, swiperLine},
    data() {
      return {
        siginValue: {},
        chart: []
      }
    },
    mounted() {
      axios('https://www.easy-mock.com/mock/5b47fcbebad3321130bf0ab0/sigin_copy/department/counselor#!method=get')
        .then(res => {
          this.siginValue = res.data.data.percent
          this.chart = res.data.data.chart
        })
    }
  };
</script>
