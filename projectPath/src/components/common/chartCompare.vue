<template>
    <div class="chart-wrapper chart" >
      <canvas id="mountNode"></canvas>
    </div>
</template>

<script>
  import F2 from '@antv/f2';

  export default {
    mounted() {
      var data = [
        {content: "甘小武", y: 65, x: 1940},
        {content: "甘小武", y: 67, x: 1941},
        {content: "甘小武", y: 68, x: 1942},
        {content: "甘小武", y: 78, x: 1943},
        {content: "甘小武", y: 85, x: 1944},
        {content: "甘小武", y: 75, x: 1945},
        {content: "甘小武", y: 83, x: 1946},
        {content: "甘小武", y: 85, x: 1947},
        {content: "甘小武", y: 88, x: 1948},
        {content: "甘小六", y: 98, x: 1940},
        {content: "甘小六", y: 78, x: 1941},
        {content: "甘小六", y: 85, x: 1942},
        {content: "甘小六", y: 87, x: 1943},
        {content: "甘小六", y: 86, x: 1944},
        {content: "甘小六", y: 85, x: 1945},
        {content: "甘小六", y: 63, x: 1946},
        {content: "甘小六", y: 78, x: 1947},
        {content: "甘小六", y: 89, x: 1948},
        {content: "刘小六", y: 98-5, x: 1940},
        {content: "刘小六", y: 78-5, x: 1941},
        {content: "刘小六", y: 85-5, x: 1942},
        {content: "刘小六", y: 87-5, x: 1943},
        {content: "刘小六", y: 86-5, x: 1944},
        {content: "刘小六", y: 85-5, x: 1945},
        {content: "刘小六", y: 63-5, x: 1946},
        {content: "刘小六", y: 78-5, x: 1947},
        {content: "刘小六", y: 89-5, x: 1948},
      ]


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
