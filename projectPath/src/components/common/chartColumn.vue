<template>
  <div>
    <canvas id="chartCol" class="chart"></canvas>
  </div>
</template>

<script>
  import F2 from '@antv/f2';

  export default {
    props: {
      chart: {
        require: true,
        type: Object
      }
    },
    mounted() {
      let chartProps = this.chart;
      let chartConfig = chartProps.config;
      let data = chartProps.data;

      const chart = new F2.Chart({
        id: 'chartCol',
        width: window.innerWidth,
        height: window.innerWidth > window.innerHeight ? window.innerHeight - 54 : window.innerWidth * 0.707,
        pixelRatio: window.devicePixelRatio
      })

      chart.scale('y', {
        min: 60,
        max: 100,
        alias: '签到率',
        formatter: function formatter(val) {
          return val + '%';
        }
      });

      chart.source(data);

      chart.legend({
        custom: true,
        position: 'top',
        items: [
          {name: chartConfig.title, marker: 'square', fill: 'blue'},
        ]
      })

      chart.interval().position('x*y');
      chart.render();
    }
  }
</script>
