<template>
  <div style="padding: 10px 8px">
    <Flexbox class="classCard bgGreen" style="justify-content: center;text-align: center;margin-top: 20px">
      <FlexboxItem :span="1/6">
        <p>1-2</p>
      </FlexboxItem>
      <FlexboxItem>
        <p>计算机网络原理</p>
        <p>何有鸣</p>
      </FlexboxItem>
      <FlexboxItem :span="1/4">
        <p>签到成功</p>
        <p>签退成功</p>
      </FlexboxItem>
    </Flexbox>
    <Flexbox class="classCard" style="justify-content: center;text-align: center;margin-top: 20px">
      <FlexboxItem :span="1/6">
        <p>3-4</p>
      </FlexboxItem>
      <FlexboxItem>
        <p>计算机网络原理</p>
        <p>何有鸣</p>
      </FlexboxItem>
      <FlexboxItem :span="1/4">
        <p>签到成功</p>
        <p>签退成功</p>
      </FlexboxItem>
    </Flexbox>
  </div>
</template>

<script>
  import {Flexbox, FlexboxItem} from 'vux'

  export default {
    components: {
      Flexbox, FlexboxItem
    }
  }
</script>

<style scoped lang="less">
  .classCard {
    background: lightgray;
    color: white;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 10px;

  }

  .bgGreen {
    background: green !important;
    color: white !important;
  }
</style>
