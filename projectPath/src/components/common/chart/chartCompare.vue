<template>

  <canvas id="mountNode" class="chart"></canvas>

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
      let data = this.chart.data


      function o_O(data) {
        let chart = new F2.Chart({
          id: 'mountNode',
          width: window.innerWidth,
          height: window.innerWidth > window.innerHeight ? window.innerHeight - 54 : window.innerWidth * 0.707,
          pixelRatio: window.devicePixelRatio
        });
        chart.source(data);
        chart.scale('x', {
          tickCount: 5
        });
        chart.scale('y', {
          min: 60,
          max: 100
        });
        chart.axis('x', {
          label: function label(text, index, total) {
            let textCfg = {};
            if (index === 0) {
              textCfg.textAlign = 'left';
            } else if (index === total - 1) {
              textCfg.textAlign = 'right';
            }
            return textCfg;
          }
        });
        chart.axis('y', {
          label: function label(text) {
            return {
              text: text + '%'
            };
          }
        });
        // tooltip 与图例结合
        chart.tooltip({
          showCrosshairs: true,
          custom: true, // 自定义 tooltip 内容框
          onChange: function onChange(obj) {
            let legend = chart.get('legendController').legends.top[0];
            let tooltipItems = obj.items;
            let legendItems = legend.items;
            let map = {};
            legendItems.map(function (item) {
              map[item.name] = _.clone(item);
            });
            tooltipItems.map(function (item) {
              let name = item.name;
              let y = item.y;
              if (map[name]) {
                map[name].y = y;
              }
            });
            legend.setItems(_.values(map));
          },
          onHide: function onHide() {
            let legend = chart.get('legendController').legends.top[0];
            legend.setItems(chart.getLegendItems().content);
          }
        });
        chart.area().position('x*y').color('content').shape('smooth');
        chart.line().position('x*y').color('content').shape('smooth');
        chart.render();
      }

      o_O(data)
    }
  }
</script>

<style scoped>

</style>
