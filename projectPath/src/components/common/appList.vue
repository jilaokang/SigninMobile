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
            label: "到课率详表",
            icon: "icon-renqun",
            color: "#4695d6",
            url: "/classdetail"
          }, {
            label: "缺课学生表",
            icon: "icon-bug",
            color: "#fed95c",
            url: "/classdetail"
          },{
            label:'课程信息',
            icon:'icon-kechengbiao',
            color:'#fa6e57',
            url: "/classdetail/student"
          },{
            label:'签到修改',
            icon:'icon-xiugai',
            color:'#7ebc59',
            url: "/classdetail/teacher"
          }]
        }, {
          gridList: [{
            label: "辅导员分析",
            icon: "icon-gerenxinxiyebanzhurenlaoshi",
            color: "#4695d6",
            url: "/classdetail"
          }, {
            label: "教师分析",
            icon: "icon-custom-teacher",
            color: "#fed95c",
            url: "/effect/class"
          }, {
            label: "课程分析",
            icon: "icon-xinrenkecheng",
            color: "#fa6e57",
            url: "/effect/class"
          }]
        }, {
          gridList: [{
            label: "系部分析",
            icon: "icon-huijihesuan",
            color: "#7ebc59",
            url: "/effect/class"
          }, {
            label: "校园分析",
            icon: "icon-xueyuan",
            color: "#4695d6",
            url: "/effect/class"
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
