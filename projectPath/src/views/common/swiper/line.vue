<template>
  <div>
    <mt-swipe :style="{height:this.height}" :auto="0">
      <mt-swipe-item v-for="(item,index) in data" :key="index">
        <chartLine :chart="item"></chartLine>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from "vux";
  import chartLine from "../chart/line";

  export default {
    props: ['data'],
    components: {chartLine, Swiper, SwiperItem},
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
