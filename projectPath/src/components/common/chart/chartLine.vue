<template>
    <canvas :id="o_O" class="chart"></canvas>
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
    computed: {
      // 超级无敌大随机
      o_O() {
        return `chart` + Math.floor(Math.random() * 10000)
      }
    },
    mounted() {
      const chartProps = this.chart
      const chartConfig = chartProps.config
      var data = chartProps.data


      var chart = new F2.Chart({
        id: this.o_O,
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
