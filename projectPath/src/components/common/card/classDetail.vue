<template>
  <div>
    <Swiper height="500px">
      <SwiperItem v-for="item of classList" :key="item.key">
        <div>
          <p class="title">第 {{item.title}} 节</p>
        </div>
        <div class="classInfo">
          <p>班&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;级：{{item.class}}</p>
          <p>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点：{{item.location}}</p>
          <p>签到情况：{{item.signin}}/{{item.total}}</p>
        </div>
        <div>
          <x-table :cell-bordered="false">
            <thead>
            <tr>
              <th>姓名</th>
              <th>签到情况</th>
              <th v-model="show">修改</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(student,index) of item.studentList" :key="index">
              <td>{{student.name}}</td>
              <td :style="student.success?'':'color:#fa6e57'">
                {{student.success?'成功':'失败'}}
              </td>
              <td>
                <div @click="showChange(item.key,index)" style="color: dodgerblue">
                  修改
                </div>
              </td>
            </tr>
            </tbody>
          </x-table>
        </div>
      </SwiperItem>
    </Swiper>
    <Confirm v-model="show"
             title="签到修正"
             @on-confirm="successChange(confirm.key,confirm.index)"
             dialog-transition="false"
    >
      <p style="text-align:center;">确定切换为
        <span
          :style="confirmStyle">
          {{confirmContent}}
        </span>吗？
      </p>
    </Confirm>
  </div>
</template>

<script>
  import {Swiper, SwiperItem, XTable, Confirm, XButton} from 'vux'

  export default {
    components: {
      Swiper,
      SwiperItem,
      XTable,
      Confirm,
      XButton
    },
    data() {
      return {
        confirm: {
          index: 0,
          key: 0
        },
        show: false,
        classList: [{
          key: 0,
          title: '1-2',
          class: '软工1501班',
          location: '中1201室',
          signin: 30,
          total: 32,
          studentList: [{
            name: '张三',
            success: false
          }, {
            name: '李四',
            success: false
          }, {
            name: '王五',
            success: true
          }, {
            name: '赵六',
            success: true
          }, {
            name: '钱七',
            success: true
          }, {
            name: '钱七',
            success: true
          }, {
            name: '钱七',
            success: true
          }, {
            name: '钱七',
            success: true
          }, {
            name: '钱七',
            success: true
          }, {
            name: '钱七',
            success: true
          }, {
            name: '钱七',
            success: true
          }, {
            name: '钱七',
            success: true
          }, {
            name: '钱七',
            success: true
          }, {
            name: '钱七',
            success: true
          }]
        }, {
          key: 1,
          title: '3-4',
          class: '软工1501班',
          location: '中1201室',
          signin: 30,
          total: 32,
          studentList: [{
            name: '张三',
            success: false
          }, {
            name: '李四',
            success: false
          }, {
            name: '王五',
            success: true
          }, {
            name: '赵六',
            success: true
          }, {
            name: '钱七',
            success: true
          }]
        }]
      }
    },
    computed: {
      confirmStyle() {
        if (this.classList[this.confirm.key].studentList[this.confirm.index].success)
          return 'color:#fa6e57 !important'
        else
          return 'color:#7ebc59 !important'
      },
      confirmContent() {
        if (this.classList[this.confirm.key].studentList[this.confirm.index].success)
          return '未签到'
        else
          return '已签到'
      }
    },
    methods: {
      showChange(key, index) {
        this.show = true
        let that = this.confirm

        that.key = key
        that.index = index
      },

      successChange(key, index) {
        let that = this.classList[key].studentList[index];
        if (that.success) {
          that.success = false
        } else {
          that.success = true
        }
        console.log(that.success)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../scss/var";

  .classCard {
    height: 100%;
    padding: 8px 0;
  }

  .classInfo {
    margin: 16px 0;
    line-height: 1.55;
  }

  .title {
    text-align: center;
    color: dodgerblue !important;
    font-size: 1.55em;
    font-weight: 800;
    line-height: 1.55;
  }

  .vux-swiper-item {
    position: relative;
    overflow: auto;
  }

</style>
