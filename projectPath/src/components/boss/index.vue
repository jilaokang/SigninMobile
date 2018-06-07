<template>
  <div>
    <GroupTitle>今日情况</GroupTitle>
    <Flexbox :gutter="16" class="bgWhite">
      <FlexboxItem>
        <percent :siginValue="siginValue"></percent>
      </FlexboxItem>
    </Flexbox>
    <GroupTitle>校园概况</GroupTitle>
    <Flexbox :gutter="16">
      <FlexboxItem>
        <swiperCollege></swiperCollege>
      </FlexboxItem>
    </Flexbox>
    <GroupTitle>系部概况</GroupTitle>
    <swiperDepartment></swiperDepartment>
  </div>
</template>

<script>
  /* eslint-disable */
  import {Grid, GridItem, GroupTitle, Divider, Flexbox, FlexboxItem} from 'vux'

  import percent from '../common/percent'
  import swiperCollege from './swiperCollege'
  import swiperDepartment from './swiperDepartment'

  export default {
    components: {
      Grid,
      GridItem,
      GroupTitle,
      Divider,
      percent,
      Flexbox,
      FlexboxItem,
      swiperCollege,
      swiperDepartment
    },
    data(){
      return{
        siginValue:{
          today:83,
          yeasterday:86,
          lastmonth:79
        }
      }
    },
    methods: {
      dd(){
        this.$store.commit('unshowBack');
      }
    }
  }
</script>

<style scoped>

</style>
