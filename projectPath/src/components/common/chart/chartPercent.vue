<template>
  <Flexbox class="chart">
    <FlexboxItem>
      <div class="vux-circle-demo">
        <div style='width:100px;height:100px;'>
          <x-circle
            :percent="siginValue.today"
            :stroke-width="6"
            :trail-width="6"
            :stroke-color="['#36D1DC', '#5B86E5']"
            trail-color="#fff">
            <span style="color:#36D1DC;font-weight: 800">{{ siginValue.today }}%</span>
            <p style="color: #36D1DC;font-size: 0.8em;font-weight: 800;">{{siginValue.title}}</p>
          </x-circle>
        </div>
      </div>
    </FlexboxItem>
    <FlexboxItem>
      <h4 :style="siginValue.today-siginValue.lastmonth>0?'color:#9C2E3D':'color:#217B7B'">
        今日同比：<span>{{siginValue.today-siginValue.yeasterday>0?'+':''}}{{siginValue.today-siginValue.yeasterday}}%</span>
      </h4>
      <h4 :style="siginValue.today-siginValue.lastmonth>0?'color:#217B7B':'color:#9C2E3D'">本月同比：<span>{{siginValue.today-siginValue.lastmonth>0?'+':''}}{{siginValue.today-siginValue.lastmonth}}%</span>
      </h4>
    </FlexboxItem>
  </Flexbox>
</template>

<script>
  import {XCircle, Flexbox, FlexboxItem} from 'vux'

  export default {
    props: {
      siginValue: {
        type: Object,
        require: true
      }
    },
    components: {
      XCircle,
      Flexbox,
      FlexboxItem
    }
  }
</script>

<style scoped>
  .vux-circle-demo {
    text-align: center;
  }

  .vux-circle-demo > div {
    margin: 0 auto;
  }

</style>
