<template>
  <div>
    <search :searchArry="searchArry"></search>
    <percent :data="data.percent"></percent>
    <chartLine :data="data.chart"></chartLine>
    <Table :data="data.table" :height="tableHeight"></Table>
  </div>
</template>

<script>

  import chartLine from "../../common/Swiper/Line.vue";
  import percent from "../../common/chart/Percent";
  import search from "../../common/search";
  import Table from "../../common/Swiper/Table.vue";

  export default {
    components: {chartLine, percent, search, Table},
    data() {
      return {
        data: {
          percent: {},
          chart: [],
          table: [
            {
              config: {
                nav: "",
                title: []
              },
              content: [

              ]
            }
          ]
        }
      }
    },
    mounted() {
      axios('https://www.easy-mock.com/mock/5b44642c990dfa4736f4d279/sigin/department/counselor#!method=get')
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
      },
    },
    methods: {
      tableHeight() {
        return document.querySelector('.Table').offsetHeight + 40 + 'px'
      }
    }
  }
</script>
