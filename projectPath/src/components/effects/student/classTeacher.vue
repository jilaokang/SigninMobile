<template>
  <div class="card">
    <Swiper height="500px" class="classCard">
      <SwiperItem v-for="item of classList">
        <div class="classInfo">
          <p>{{item.time}} </p>
          <p>地点：{{item.location}}</p>
          <p>班级：{{item.class}}</p>
          <p>签到率：{{item.signin/item.total}}</p>
          <p>签到情况：{{item.signin}}/{{item.total}}</p>
        </div>
        <div>
          <x-table :cell-bordered="false" class="table">
            <thead>
            <tr style="font-weight: 800;" class="first">
              <th>姓名</th>
              <th>签到情况</th>
              <th v-model="show">修改</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(student,index) of item.studentList" :key="index">
              <td>{{student.name}}</td>
              <td :style="student.success?'color:green':'color:red'">{{student.success?'成功':'失败'}}</td>
              <th>
                <div class="changeButton" @click="showChange(index)">修改</div>
              </th>
            </tr>
            </tbody>
          </x-table>
        </div>
      </SwiperItem>
    </Swiper>
    <Confirm v-model="show"
             title="签到修正"
             @on-confirm="successChange(index)"
             dialog-transition="false"
    >
      <p style="text-align:center;">确定切换为
        <span :style="(this.classList[0].studentList[index].success)?'color:red !important':'color:green !important'">
          {{this.classList[0].studentList[index].success?'未签到':'已签到'}}
        </span>吗？
      </p>
    </Confirm>
  </div>
</template>

<script>
  import {Swiper, SwiperItem, XTable, Confirm} from 'vux'

  export default {
    components: {
      Swiper,
      SwiperItem,
      XTable,
      Confirm
    },
    data() {
      return {
        confirm: {},

        index: 0,
        show: false,
        classList: [{
          time: '1-3',
          class: '软工1501班',
          location: '中1201室',
          signin: 30,
          total: 32,
          studentList: [{
            name: '张三',
            success: false
          }, {
            name: '李四',
            success: true
          }, {
            name: '王五',
            success: false
          }, {
            name: '赵六',
            success: false
          }, {
            name: '钱七',
            success: false
          }]
        }]
      }
    },
    computed: {},
    methods: {
      showChange(index) {
        this.show = true
        this.index = index
      },

      successChange(index) {
        let that = this.classList[0].studentList[index].success;
        if (that) {
          that = false
        } else {
          that = true
        }
        console.log(that)
      }
    }
  }
</script>

<style scoped>
  .classCard {
    border-radius: 5px;
    background: white;
    height: 100%;
    padding: 20px;
  }

  .classInfo {
    font-size: 0.88em;
    line-height: 2;
    margin: 10px 0;
  }

  .classInfo p:nth-child(1) {
    text-align: center;
    color: dodgerblue !important;
    font-size: 2em;
    font-weight: 800;
    line-height: 2;
  }

  .vux-swiper-item {
    position: relative;
    overflow: auto;
  }

  .table {
    font-size: 0.80em;
    line-height: 2;
  }

  .table .first {
    line-height: 4;
  }

  .changeButton {
    background: dodgerblue;
    margin: 8px 6px;
    color: white;
    font-weight: 800;
    border-radius: 5px;
  }
</style>
