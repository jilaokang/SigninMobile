<template>
  <Flexbox>
    <FlexboxItem>
      <Grid class="bgWhite" :cols="3" :show-lr-borders="false" :show-vertical-dividers="false">
        <GridItem :label="i.label" v-for="i in applist" :key="i.length" :link="i.url">
          <font :color="i.color" slot="icon" class="iconfont" :class="i.icon"></font>
        </GridItem>
      </Grid>
    </FlexboxItem>
  </Flexbox>
</template>

<script>
  import {Flexbox, FlexboxItem, Grid, GridItem} from 'vux'

  export default {
    components: {
      Flexbox,
      FlexboxItem,
      Grid,
      GridItem
    },
    data() {
      return {
        applist: [],
        permission: [
          {
            access: 0,
            label: "校园情况",
            icon: "icon-qiye",
            color: "#4695d6",
            url: "/role/effect/class"
          },
          {
            access: 0,
            label: "系部情况",
            icon: "icon-huijihesuan",
            color: "#7ebc59",
            url: "/role/effect/class"
          }, {
            access: 1,
            label: "课程情况",
            icon: "icon-xinrenkecheng",
            color: "#fa6e57",
            url: "/role/"
          }, {
            access: 1,
            label: "教师情况",
            icon: "icon-jiaolian1",
            color: "#fed95c",
            url: "/role/"
          }, {
            access: 1,
            label: "辅导员情况",
            icon: "icon-person",
            color: "#4695d6",
            url: "/role/myCounselor"
          }, {
            access: 2,
            label: "班级情况",
            icon: "icon-renqun",
            color: "#4695d6",
            url: "/role/classdetail"
          }, {
            access: 2,
            label: "缺课学生表",
            icon: "icon-error",
            color: "#fed95c",
            url: "/role/classdetail/counselor"
          }, {
            access: 2,
            label: '签到修改',
            icon: 'icon-xiugai',
            color: '#7ebc59',
            url: "/role/topTime/myStudents"
          },
          {
            access: 3,
            label: '课程信息',
            icon: 'icon-kechengbiao',
            color: '#fa6e57',
            url: "/role/topTime/myCourse"
          }
        ]
      }
    },
    created() {
      // 身份验证部分
      axios('https://www.easy-mock.com/mock/5b44642c990dfa4736f4d279/sigin/user#!method=GET&queryParameters=%5B%7B%22enabled%22%3Atrue%2C%22key%22%3A%22https%3A%2F%2Fwww.easy-mock.com%2Fmock%2F5b44642c990dfa4736f4d279%2Fsigin%2Fuser%23!method%22%2C%22value%22%3A%22get%22%7D%5D&body=&headers=%5B%5D')
        .then(res => {
          // res.data.role 0-校领导 1-系主任 2-辅导员、老师 3-学生
          this.applist = this.permission.filter(data => {
              if (res.data.role <= data.access) {
                return data
              }
            }
          )
        })
    },
    computed: {}
  }
</script>

<style scoped>
  .iconfont {
    font-size: 1.8em;
  }

  .weui-grid__label {
    line-height: 3;
  }

  .weui-grids:before, .weui-grid:after {
    border: none !important;
  }
</style>
