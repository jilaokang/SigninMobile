<template>
  <div>
    <Flexbox>
      <FlexboxItem id="topTime">
        <datetime format="MM月DD日" v-model="time" @on-confirm="changeTime">{{time}}</datetime>
      </FlexboxItem>
    </Flexbox>
    <Flexbox>
      <FlexboxItem v-for="n in list.week">
        <div class="week">{{n}}</div>
      </FlexboxItem>
    </Flexbox>
    <Flexbox>
      <FlexboxItem v-for="y in list.day">
        <div class="week day">{{y}}</div>
      </FlexboxItem>
    </Flexbox>
    <classCard></classCard>
  </div>
</template>

<script>
  import {Datetime, Group, Flexbox, FlexboxItem, XButton} from 'vux'
  import classCard from './classCard'

  export default {
    components: {
      Datetime, Group, Flexbox, FlexboxItem, classCard, XButton
    },
    data() {
      return {
        list: {
          week: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
          day: [15, 16, 17, 18, 19, 20, 21]
        },

      }
    },
    computed: {
      time(){
        let now = new Date()
        return `${now.getMonth()+1}月${now.getDate()}日`
      }
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
    line-height: 2.5;
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

  .week {
    text-align: center;
    margin: 0 auto;
    line-height: 2;
    justify-content: center;
  }

  .day {
    width: 32px;
    border-radius: 50%;
  }

  .day:hover {
    background: blue;
    color: white;
  }

  .bgWhite {
    padding: 10px 0 10px 0;
    justify-content: center !important;
  }
</style>
