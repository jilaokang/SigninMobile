<template>
  <div>
    <GroupTitle>今日情况</GroupTitle>
    <Flexbox :gutter="16" class="bgWhite">
      <FlexboxItem>
        <percent></percent>
      </FlexboxItem>
    </Flexbox>
    <GroupTitle>校园概况</GroupTitle>
    <Flexbox :gutter="16">
      <FlexboxItem>
        <college></college>
      </FlexboxItem>
    </Flexbox>
    <GroupTitle>系别概况</GroupTitle>

    <GroupTitle>更多功能</GroupTitle>
    <Flexbox>
      <FlexboxItem>
        <Grid class="bgWhite" :cols="4" :show-lr-borders="false" :show-vertical-dividers="false">
          <GridItem :label="i.label" v-for="i in GetPremisson" :key="i.length">
            <font :color="i.color" slot="icon" class="iconfont" :class="i.icon"></font>
          </GridItem>
        </Grid>
      </FlexboxItem>
    </Flexbox>
    <Divider>武汉学院-信息中心</Divider>
  </div>
</template>

<script>
  /* eslint-disable */
  import {Grid, GridItem, GroupTitle, Divider, Flexbox, FlexboxItem} from 'vux'

  import percent from './common/percent.vue'
  import college from './boss/college'

  export default {
    components: {
      Grid, GridItem,
      GroupTitle,
      Divider,
      percent, Flexbox, FlexboxItem,
      college
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
            label: "缺课学生表",
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
            label: "课程分析",
            icon: "icon-xinrenkecheng",
            color: "#248888"
          }]
        }, {
          gridList: [{
            label: "系部分析",
            icon: "icon-huijihesuan",
            color: "#248888"
          }, {
            label: "校园分析",
            icon: "icon-xueyuan",
            color: "#E7475E"
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
    font-size: 1.8em;
  }

  .weui-grid__label {
    line-height: 3;
  }

  .bgWhite, .vux-flexbox-item {
    background: white;
  }

  .weui-grids:before, .weui-grid:after {
    border: none !important;
  }
</style>
