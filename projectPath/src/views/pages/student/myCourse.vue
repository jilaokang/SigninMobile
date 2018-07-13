<template>
  <div class="container">
    <div v-for="(list,index) of classList" :key='index'>
      <Flexbox class="classCard" :class="cardBg(index)">
        <FlexboxItem :span="1/6">
          <p>{{list.time}}</p>
        </FlexboxItem>
        <FlexboxItem>
          <p>{{list.classname}}</p>
          <p>{{list.location}} {{list.teacher}}</p>
        </FlexboxItem>
        <FlexboxItem :span="1/4">
          <p>{{list.success}}</p>
        </FlexboxItem>
      </Flexbox>
    </div>
  </div>
</template>

<script>
  import {Flexbox, FlexboxItem, Confirm} from 'vux'

  export default {
    components: {Flexbox, FlexboxItem, Confirm},
    data() {
      return {
        classList: [{
          time: '',
          classname: '',
          teacher: '',
          location: '',
          done: true,
          signin: true,
          signout: true,
          success: '' || null
        }]
      }
    },
    mounted() {
      axios("https://www.easy-mock.com/mock/5b47fcbebad3321130bf0ab0/sigin_copy/student/myCourse#!method=get")
        .then(res => {
          this.classList = res.data.classList
        })
    }
    ,
    methods: {
      cardBg(index) {
        let classList = this.classList[index];

        if (classList.done) {
          if (classList.signin && classList.signout) {
            classList.success = '签到成功'
            return 'bgGreen'
          } else {
            classList.success = '签到失败'
            return 'bgRed'
          }
        } else {
          classList.success = '未开始'
          return ''
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../scss/var";

  .classCard {
    font-size: 0.88em;
    font-weight: 800;
    background: #eeeeee;
    color: $font__black;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 10px;
    justify-content: center;
    text-align: center;
    margin-top: 12px;
  }

  .bgGreen {
    background: $font__green;
    color: #fbfbfb !important;
  }

  .bgRed {
    background: $font__red;
    color: $font__white;
  }
</style>

