<template>
  <div>
    <Swiper :height="this.height">
      <SwiperItem v-for="(a,index) in data" :key="index">
        <chartLine :chart="a"></chartLine>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "vux";
import chartLine from "../chart/Line";

export default {
  props: {
    data: {
      type: Array,
      require: true
    }
  },
  components: {
    chartLine,
    Swiper,
    SwiperItem
  },
  computed: {
    height() {
      return (
        (window.innerWidth > window.innerHeight
          ? window.innerHeight - 54
          : window.innerWidth * 0.707) +
        40 +
        "px"
      );
    }
  }
};
</script>

<style scoped>
</style>
