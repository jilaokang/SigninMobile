<template>
  <div style="margin-bottom: 15px">
    <Flexbox>
      <FlexboxItem id="topTime">
        <datetime format="MM-DD" v-model="time" @on-confirm="changeTime">
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
      <!--<Flexbox>-->
      <!--<FlexboxItem v-for="y of this.nowDay" :key="y">-->
      <!--<div>-->
      <!--<div class="weekBlock">-->
      <!--{{y}}-->
      <!--</div>-->
      <!--</div>-->
      <!--</FlexboxItem>-->
      <!--</Flexbox>-->
      {{this.nowDay}}
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
        time: '',
        nowDate: {}
      }
    },
    created() {
      let now = new Date()

      this.now = now.getDate()

      // 获取格式化后的时间
      this.time = `${now.getMonth() + 1}月${now.getDate()}日`
      // 获取当前日期对象
      this.nowDate = {
        day: now.getDay(),
        date: now.getDate(),
        dateObj: now
      }
    },
    computed: {
      //push一个日期列表
      nowDay() {
        const a = this.nowDate;
        let now = this.nowDate;
        let day = [];

        let count = 0;

        for (let i = now.day; i => 0; i--) {
          now.dateObj.setDate(now.dateObj.getDate() + (now.day - i))
          day[i] = now.dateObj.getDate()
          console.log(day[i])
          if (i === 0) {
            this.nowDate = a;
            break
          }
        }

        // for (let i = now.day; i < 7; i++) {
        //   now.dateObj.setDate(now.dateObj.getDate() + (i - now.day))
        //   day[i] = now.dateObj.date
        //   if (i === 8) {
        //     this.nowDate=a;
        //     break
        //   }
        // }
        return day
      }

      // nowDay(){
      //   function GetDateStr(AddDayCount) {
      //     let dd = new Date();
      //     dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
      //     let y = dd.getFullYear();
      //     let m = dd.getMonth()+1;//获取当前月份的日期
      //     let d = dd.getDate();
      //     return y+"-"+m+"-"+d;
      //   }
      //
      //   let count =0;
      //   for(let i = this.nowDate.day;i<0;i--){
      //     count -=1;
      //     GetDateStr(count)
      //     console.log(GetDateStr(count))
      //   }
      //   return
      // }
    },
    methods: {
      changeTime(value) {
        this.time = `${value.split("-")[0]}月${value.split("-")[1]}日`

        let a = new Date().getFullYear()
        let newDate = new Date(`${a}-${value}`)

        this.nowDate.day = newDate.getDay();
        this.nowDate.date = newDate.getDate()
        this.nowDate.dateObj = newDate
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
