<template>
    <div class="chart-wrapper chart" >
      <canvas id="mountNode"></canvas>
    </div>
</template>

<script>
  import F2 from '@antv/f2';

  export default {
    props:{
      chart:{
        type:Object,
        require:true
      }
    },
    mounted() {
      var data = this.chart.data


      function aa(data) {
        var chart = new F2.Chart({
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
          max:100
        });
        chart.axis('x', {
          label: function label(text, index, total) {
            var textCfg = {};
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
            var legend = chart.get('legendController').legends.top[0];
            var tooltipItems = obj.items;
            var legendItems = legend.items;
            var map = {};
            legendItems.map(function (item) {
              map[item.name] = _.clone(item);
            });
            tooltipItems.map(function (item) {
              var name = item.name;
              var y = item.y;
              if (map[name]) {
                map[name].y = y;
              }
            });
            legend.setItems(_.values(map));
          },
          onHide: function onHide() {
            var legend = chart.get('legendController').legends.top[0];
            legend.setItems(chart.getLegendItems().content);
          }
        });
        chart.area().position('x*y').color('content').shape('smooth');
        chart.line().position('x*y').color('content').shape('smooth');
        chart.render();
      }
      aa(data)
    }
  }
</script>

<style scoped>

</style>
