<template>
  <div class="card">
    <Flexbox class="classCard" v-for="(list,index) of classList" :class="cardBg(index)">
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
</template>

<script>
  import {Flexbox, FlexboxItem} from 'vux'

  export default {
    components: {
      Flexbox, FlexboxItem
    },
    data() {
      return {
        classList: [{
          time: '1-2',
          classname: '计算机网络原理',
          teacher: '何友鸣',
          location: '学4201室',
          done: true,
          signin: true,
          signout: true,
          success:'未上课'||null
        }, {
          time: '3-4',
          classname: 'Linux操作系统',
          teacher: '张三',
          location: '学4303室',
          done: true,
          signin: false,
          signout: true,
          success:'未上课'||null
        }, {
          time: '5-6',
          classname: 'SQL数据库设计与管理',
          teacher: '冯浩',
          location: '计5201室',
          done: false,
          signin: false,
          signout: true,
          success:'未上课'||null
        }, {
          time: '7-8',
          classname: '网络通讯原理',
          teacher: '王五',
          location: '学4103室',
          done: false,
          signin: false,
          signout: true,
          success:''
        }]
      }
    },
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

<style scoped lang="less">
  .classCard {
    font-size: 0.88em;
    font-weight: 800;
    background: #e9e9e9;
    color:#333333;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 10px;
    justify-content: center;
    text-align: center;
    margin-top: 12px;
  }

  .bgGreen {
    background: #41ba41 !important;
    color: white !important;
  }

  .bgRed {
    background: #ba4141;
    color: white;
  }
</style>

