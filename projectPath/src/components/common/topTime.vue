<template>
  <div style="margin-bottom: 15px">
    <Flexbox>
      <FlexboxItem id="topTime">
        <datetime format="MM月DD日" v-model="time" @on-confirm="changeTime">
          <h4>{{time}}</h4>
        </datetime>
      </FlexboxItem>
    </Flexbox>
    <div style="padding: 10px;background: white">
      <Flexbox>
        <FlexboxItem v-for="n of list.week" :key="n">
          <div class="week">{{n}}</div>
        </FlexboxItem>
      </Flexbox>
      <Flexbox>
        <FlexboxItem v-for="y of list.day" :key="y">
          <div>
            <div class="weekBlock">
              {{y}}
            </div>
          </div>
        </FlexboxItem>
      </Flexbox>
    </div>
  </div>
</template>

<script>
  import {Datetime, Group, Flexbox, FlexboxItem, XButton} from 'vux'

  export default {
    components: {
      Datetime, Group, Flexbox, FlexboxItem, XButton
    },
    data() {
      return {
        list: {
          week: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
          day: [15, 16, 17, 18, 19, 20, 21]
        },
        time: ''
      }
    },
    created() {
      let now = new Date()
      this.time = `${now.getMonth() + 1}月${now.getDate()}日`
    },
    methods: {
      changeTime(value) {
        this.time = value
      }
    }
  }
</script>

<style scoped>
  #topTime {
    background: dodgerblue;
    color: white !important;
    text-align: center;
    padding: 10px 6px;
  }

  .vux-datetime {
    color: white;
  }

  .vux-datetime-value {
    text-align: center !important;
  }

  .weui-cell_access .weui-cell__ft::after {
    content: none !important;
  }

  .weekBlock {
    padding: 6px 10px;
  }

  .week {
    font-size: 0.8em;
    font-weight: 800;
    text-align: center;
    margin: 0 auto;
    line-height: 2;
  }

  .day {
    font-size: 1em;
    font-weight: 300;
    border-radius: 50%;
  }

  .dayactive {
    background: dodgerblue;
    color: white;
  }
</style>
