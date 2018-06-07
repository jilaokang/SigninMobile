<template>
  <div class="chart-wrapper">
    <canvas id="chartLine" class="chart"></canvas>
  </div>
</template>

<script>
  import F2 from '@antv/f2';

  export default {
    props: {
      chart: {
        type: Object,
        require: true
      }
    },
    mounted() {
      const chartProps = this.chart
      const chartConfig = chartProps.config
      var data = chartProps.data


      var chart = new F2.Chart({
        id: 'chartLine',
        width: window.innerWidth,
        height: window.innerWidth > window.innerHeight ? window.innerHeight - 54 : window.innerWidth * 0.707,
        pixelRatio: window.devicePixelRatio
      });

      var defs = {
        y: {
          max: chartConfig.max || 100,
          min:60,
          alias: '签到率',
          formatter: function formatter(val) {
            return val + '%';
          }
        }
      };
      chart.source(data, defs);

      chart.legend({
        custom: true,
        position: 'top',
        items: [
          {name: chartConfig.title, marker: 'square', fill: 'blue'},
        ]
      })

      chart.line().position('x*y').shape('smooth');

      chart.point().position('x*y').shape('smooth').style({
        stroke: '#fff',
        lineWidth: 1
      });
      chart.render();
    }
  }
</script>
