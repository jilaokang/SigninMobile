<template>
  <div>
    <GroupTitle>更多功能</GroupTitle>
    <Grid :cols="3">
      <GridItem :label="i.label" v-for="i in GetPremisson" :key="i.length">
        <font slot="icon" class="iconfont" :class="i.icon"></font>
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
        access: 0,
        permission: [{
          gridList: [{
            label: "到课率详表",
            icon: "icon-touyingyi"
          }, {
            label: "缺课学生报表",
            icon: "icon-touyingyi"
          }]
        }, {
          gridList: [{
            label: "辅导员分析",
            icon: "icon-touyingyi"
          }, {
            label: "教师分析",
            icon: "icon-touyingyi"
          }, {
            label: "课程分析分析",
            icon: "icon-touyingyi"
          }]
        }, {
          gridList: [{
            label: "校园分析",
            icon: "icon-touyingyi"
          }, {
            label: "系部分析",
            icon: "icon-touyingyi"
          }]
        }]
      }
    },
    computed: {
      GetPremisson() {
        let str = [];
        for (let i = 0; i <= this.access; i++) {
          str.push(...this.permission[i].gridList)
        }
        return str;
      }
    }
  }
</script>
<style scoped>
  @import "http://at.alicdn.com/t/font_619315_w5z0epg7415g66r.css";
</style>
