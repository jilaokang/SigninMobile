<template>
  <div>
    <v-chart
      ref="demo"
      :data="data">
      <v-bar/>
      <v-tooltip :show-item-marker="true"/>
    </v-chart>
  </div>
</template>

<script>
  /* eslint-disable */
  import {VChart, VLine, VArea, VTooltip, VLegend, VBar, XButton, VScale} from 'vux'

  export default {
    components: {
      VChart,
      VLine,
      VArea,
      VTooltip,
      VLegend,
      VBar,
      VScale
    },
    data() {
      return {
        data: [
          {year: '信息系', sales: 85},
          {year: '传播系', sales: 83},
          {year: '艺术系', sales: 60},
          {year: '会计系', sales: 89},
          {year: '金融系', sales: 90},
          {year: '工管系', sales: 85},
          {year: '法律系', sales: 83}
        ]
      }
    }
  }
</script>

