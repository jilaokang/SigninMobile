<template>
  <div>
    <Swiper :height="this.height">
      <SwiperItem v-for="(item, index) in data" :key="index" >
        <Table class="Table" :table="item"></Table>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "vux";
import Table from "../chart/Table";

export default {
  components: {
    Table,
    Swiper,
    SwiperItem
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      height: ""
    };
  },
  mounted() {
    this.height =
      document.getElementsByClassName("Table")[0].offsetHeight + "px";
  }
};
</script>

