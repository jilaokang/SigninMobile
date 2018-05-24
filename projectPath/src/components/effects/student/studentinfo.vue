<template>
  <div>
    <Flexbox>
      <FlexboxItem>
        <group label-width="5em">
          <Datetime format="MM-DD" v-model="date"></Datetime>
        </group>
      </FlexboxItem>
    </Flexbox>
    <Flexbox class="bgWhite" gutter="0">
      <FlexboxItem v-for="n in week">
        <div class="week">{{n}}</div>
      </FlexboxItem>
    </Flexbox>
    <Flexbox class="bgWhite" gutter="0">
      <FlexboxItem v-for="y in day">
        <div class="week day">{{y}}</div>
      </FlexboxItem>
    </Flexbox>
    <classCard></classCard>
  </div>
</template>

<script>
  import {Datetime, Group, Flexbox, FlexboxItem} from 'vux'
  import classCard from './classCard'

  export default {
    components: {
      Datetime, Group, Flexbox, FlexboxItem,classCard
    },
    data() {
      return {
        week: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        day:[15, 16, 17, 18, 19, 20, 21]
      }
    },
    computed: {
      date() {
        let now = new Date()
        return `${now.getMonth()}-${now.getDate()}`
      }
    }
  }
</script>

<style scoped>
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
    justify-content:center;
  }

  .day{
    width: 32px;
    border-radius: 50%;
  }
  .day:hover{
    background: blue;
    color: white;
  }

  .bgWhite{
    padding: 10px 0 10px 0;
    justify-content: center !important;
  }
</style>
