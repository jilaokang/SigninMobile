<template>
  <Flexbox>
    <FlexboxItem>
      <Grid class="bgWhite" :cols="3" :show-lr-borders="false" :show-vertical-dividers="false">
        <GridItem :label="i.label" v-for="i in GetPremisson" :key="i.length" :link="i.url">
          <font :color="i.color" slot="icon" class="iconfont" :class="i.icon"></font>
        </GridItem>
      </Grid>
    </FlexboxItem>
  </Flexbox>
</template>

<script>
  /* eslint-disable */
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
        access: 2,
        permission: [{
          gridList: [{
            label: "班级情况",
            icon: "icon-renqun",
            color: "#4695d6",
            url: "/role/classdetail"
          }, {
            label: "缺课学生表",
            icon: "icon-error",
            color: "#fed95c",
            url: "/role/classdetail/counselor"
          }, {
            label: '课程信息',
            icon: 'icon-kechengbiao',
            color: '#fa6e57',
            url: "/role/topTime/myCourse"
          }, {
            label: '签到修改',
            icon: 'icon-xiugai',
            color: '#7ebc59',
            url: "/role/topTime/myStudents"
          }]
        }, {
          gridList: [{
            label: "辅导员情况",
            icon: "icon-person",
            color: "#4695d6",
            url: "/role/myCounselor"
          }, {
            label: "教师情况",
            icon: "icon-jiaolian1",
            color: "#fed95c",
            url: "/role/"
          }, {
            label: "课程情况",
            icon: "icon-xinrenkecheng",
            color: "#fa6e57",
            url: "/role/"
          }]
        }, {
          gridList: [{
            label: "系部情况",
            icon: "icon-huijihesuan",
            color: "#7ebc59",
            url: "/role/effect/class"
          }, {
            label: "校园情况",
            icon: "icon-qiye",
            color: "#4695d6",
            url: "/role/effect/class"
          }]
        }]
      }
    },
    computed: {
      GetPremisson() {
        let str = [];
        if (this.access != 3) {
          for (let i = 0; i <= this.access; i++) {
            str.push(...this.permission[i].gridList)
          }
        }
        return str;
      }
    }
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
