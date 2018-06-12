<template>
  <div>
    <search
      id="search"
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      auto-scroll-to-top
      top="46px"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"></search>
  </div>
</template>

<script>
  import {Search, Group, Cell, XButton} from 'vux'

  export default {
    components: {
      Search,
      Group,
      Cell,
      XButton
    },
    mounted:{

    },
    methods: {
      resultClick(item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult(val) {
        console.log('on-change', val)
        this.results = val ? getResult(this.value) : []
      },
      onSubmit() {
        this.$refs.search.setBlur()
        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: 'on submit'
        })
      },
      onFocus() {
        this.value = ''
        console.log('on focus')
      },
      onCancel() {
        console.log('on cancel')
      }
    },
    data() {
      return {
        results: [],
        value: '',
        data:['你好啊']
      }
    }
  }

  function getResult(val) {
    let rs = []

    for (let i = 0; i < 20; i++) {
      rs.push({
        title: `${val} result: ${i + 1} `,
        other: i
      })
    }
    return rs
  }
</script>

<style scoped>
  #search {
    position: relative;
  }
</style>
