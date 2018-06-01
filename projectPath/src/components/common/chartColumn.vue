<template>
  <div style="background: #fff;text-align: center;font-weight: 800;color: #999999;font-size: 0.8em">
    <p>辅导员横向比较图</p>
    <v-chart
      :data="data">
      <v-bar/>
      <v-tooltip :show-item-marker="false"/>
    </v-chart>
  </div>
</template>

<script>
  import {VChart, VLine, VArea, VTooltip, VLegend, VBar} from 'vux'

  export default {
    components: {
      VChart,
      VLine,
      VArea,
      VTooltip,
      VLegend,
      VBar
    },
    data() {
      return {
        data: [
          {year: '1951 年', sales: 38},
          {year: '1952 年', sales: 52},
          {year: '1956 年', sales: 61},
          {year: '1957 年', sales: 45},
          {year: '1958 年', sales: 48},
          {year: '1959 年', sales: 38},
          {year: '1960 年', sales: 38},
          {year: '1962 年', sales: 38}
        ]
      }
    }
  }
</script>
