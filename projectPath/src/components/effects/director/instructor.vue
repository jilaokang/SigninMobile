<template>
  <div>
    <div @click="display()">
      <XButton>这是个按钮</XButton>
    </div>
    <checklist :style="button?'display:block':'display:none'" title="显示范围" :options="checklist.commonList"
               v-model="checklist.checklist"></checklist>
  </div>
</template>

<script>
  import {Checklist, XButton} from 'vux'

  export default {
    components: {
      Checklist,
      XButton
    },
    data() {
      return {
        button: false,
        checklist: {
          commonList: ['张三', '李四', '王五', '赵六', '刘七'],
          checklist: [],
        }
      }
    },
    methods: {
      display() {
        this.button = !(Boolean(this.button))
      }
    }
  }
</script>

<style scoped>

</style>
