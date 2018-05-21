<template>
  <div>
    <GroupTitle>更多功能</GroupTitle>
    <Grid class="bgWhite" :cols="4" :show-lr-borders="false" :show-vertical-dividers="false">
      <GridItem :label="i.label" v-for="i in GetPremisson" :key="i.length">
        <font :color="i.color" slot="icon" class="iconfont" :class="i.icon"></font>
      </GridItem>
    </Grid>
  </div>
</template>

<script>
  /* eslint-disable */
  import {Grid, GridItem, GroupTitle} from 'vux'

  export default {
    components: {
      Grid, GridItem,
      GroupTitle
    },
    data() {
      return {
        access: 2,
        permission: [{
          gridList: [{
            label: "到课率详表",
            icon: "icon-renqun",
            color: "#248888"
          }, {
            label: "缺课学生报表",
            icon: "icon-bug",
            color: "#E7475E"
          }]
        }, {
          gridList: [{
            label: "辅导员分析",
            icon: "icon-gerenxinxiyebanzhurenlaoshi",
            color: "#248888"
          }, {
            label: "教师分析",
            icon: "icon-custom-teacher",
            color: "#E7475E"
          }, {
            label: "课程分析分析",
            icon: "icon-xinrenkecheng",
            color: "#248888"
          }]
        }, {
          gridList: [{
            label: "校园分析",
            icon: "icon-xueyuan",
            color: "#E7475E"
          }, {
            label: "系部分析",
            icon: "icon-huijihesuan",
            color: "#248888"
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
  @import "http://at.alicdn.com/t/font_675461_g11k10ytjaq93sor.css";

  .iconfont {
    font-size: 1.3em;
  }

  .bgWhite {
    background: white;
  }

  .weui-grids:before, .weui-grid:after {
    border: none !important;
  }
</style>
