<template>
  <div>
    <search :searchArry="searchArry"></search>
    <percent :data="data.percent"></percent>
    <chartLine :data="data.chart"></chartLine>
    <Table :data="data.table"></Table>
  </div>
</template>

<script>

  import chartLine from "../../common/swiper/line.vue";
  import percent from "../../common/chart/percent";
  import search from "../../common/card/search";
  import Table from "../../common/swiper/table.vue";

  export default {
    components: {chartLine, percent, search, Table},
    data() {
      return {
        data: {
          percent: {},
          chart: [],
          table: [
            {
              config: {nav: "", title: []},
              content: []
            }
          ]
        }
      }
    },
    mounted() {
      axios('https://www.easy-mock.com/mock/5b47fcbebad3321130bf0ab0/sigin_copy/department/counselor#!method=get')
        .then(res => {
          this.data.percent = res.data.data.percent
          this.data.chart.push(...res.data.data.chart)
          this.data.table = res.data.data.table
        })
    },
    computed: {
      searchArry() {
        let data = this.data.table[0].content, arr = [];
        for (let item of data) {
          arr.push(item[0]);
        }
        return arr;
      }
    }
  }
</script>
