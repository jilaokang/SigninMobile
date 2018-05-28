<template>
  <div class="card">
    <Swiper height="500px" class="classCard">
      <SwiperItem>
        <div class="classInfo">
          <p>1-2节 </p>
          <p>地点：中1201室</p>
          <p>班级：软工1501班</p>
          <p>签到情况：30/32</p>
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
            <tr v-for="(student,index) of classList.studentList" :key="index">
              <td>{{student.name}}</td>
              <td :style="student.success?'color:green':'color:red'">{{student.success?'成功':'失败'}}</td>
              <th>
                <button @click="showChange(index)">修改</button>
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
        <span :style="(this.classList.studentList[index].success)?'color:red !important':'color:green !important'">
          {{this.classList.studentList[index].success?'未签到':'已签到'}}
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
        index: 0,
        show: false,
        classList: {
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
        }
      }
    },
    computed: {},
    methods: {
      showChange(index) {
        this.show = true
        this.index = index
      },

      successChange(index) {
        let value = this.classList.studentList[index].success;
        if (this.classList.studentList[index].success) {
          this.classList.studentList[index].success = false
        } else {
          this.classList.studentList[index].success = true
        }
        console.log(this.classList.studentList[index].success)
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
</style>
