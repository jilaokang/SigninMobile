<template>
  <div style="padding: 0 15px">
    <Flexbox class="classCard bgGreen">
      <FlexboxItem :span="1/6">
        <p>1-2</p>
      </FlexboxItem>
      <FlexboxItem>
        <p>计算机网络原理</p>
        <p>学4201室 何有鸣</p>
      </FlexboxItem>
      <FlexboxItem :span="1/4">
        <p>签到成功</p>
        <p>签退成功</p>
      </FlexboxItem>
    </Flexbox>
    <Flexbox class="classCard">
      <FlexboxItem :span="1/6">
        <p>3-4</p>
      </FlexboxItem>
      <FlexboxItem>
        <p>计算机网络原理</p>
        <p>学4201室 何有鸣</p>
      </FlexboxItem>
      <FlexboxItem :span="1/4">
        <p>待上课</p>
      </FlexboxItem>
    </Flexbox>
    <Flexbox class="classCard">
      <FlexboxItem :span="1/6">
        <p>5-6</p>
      </FlexboxItem>
      <FlexboxItem>
        <p>计算机网络原理</p>
        <p>学4201室 何有鸣</p>
      </FlexboxItem>
      <FlexboxItem :span="1/4">
        <p>待上课</p>
      </FlexboxItem>
    </Flexbox>
    <Flexbox class="classCard bgRed">
      <FlexboxItem :span="1/6">
        <p>7-8</p>
      </FlexboxItem>
      <FlexboxItem>
        <p>计算机网络原理</p>
        <p>学4201室 何有鸣</p>
      </FlexboxItem>
      <FlexboxItem :span="1/4">
        <p>签到失败</p>
        <p>签退失败</p>
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
    font-size: 0.8em;
    font-weight: 800;
    background: #e9e9e9;
    color: #9fa1b6;
    padding-top: 15px;
    padding-bottom: 15px;
    border-radius: 5px;
    justify-content: center;
    text-align: center;
    margin-top: 8px;
  }

  .bgGreen {
    background: #4ad44a !important;
    color: white !important;
  }

  .bgRed{
    background: #d44a4a;
    color: white;
  }
</style>
