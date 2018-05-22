<template>
  <Flexbox id="college">
    <FlexboxItem>
      <div class="vux-circle-demo">
        <div style='width:100px;height:100px;'>
          <x-circle
            :percent="percent"
            :stroke-width="6"
            :trail-width="6"
            :stroke-color="['#36D1DC', '#5B86E5']"
            trail-color="#ececec">
            <span style="color:#36D1DC">{{ percent }}%</span>
            <p style="color: #36D1DC">今日签到</p>
          </x-circle>
        </div>
      </div>
    </FlexboxItem>
    <FlexboxItem>
      <h4 :style="this.time.today>0?'color:#217B7B':'color:#9C2E3D'">
        今日同比：<span>{{time.today>0?'+':''}}{{time.today}}%</span></h4>
      <h4 :style="this.time.theMonth>0?'color:#217B7B':'color:#9C2E3D'">本月同比：<span>{{time.theMonth>0?'+':''}}{{time.theMonth}}%</span>
      </h4>
    </FlexboxItem>
  </Flexbox>
</template>

<script>
  /* eslint-disable */
  import {XCircle, Flexbox, FlexboxItem} from 'vux'

  export default {
    components: {
      XCircle,
      Flexbox,
      FlexboxItem
    },
    data() {
      return {
        percent: 83,
        time: {
          today: -3,
          theMonth: 5
        }
      }
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

  #college {
    padding: 16px;
  }
</style>
