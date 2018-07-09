<template>
  <div>
    <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      auto-scroll-to-top
      top="48px"
      ref="search"></search>
  </div>
</template>

<script>
import { Search, Group, Cell, XButton } from "vux";

export default {
  components: {
    Search,
    Group,
    Cell,
    XButton
  },
  methods: {
    resultClick(item) {
      this.result = item.title;
    },
    getResult(val) {
      console.log(val);
      let reg = RegExp(val);
      let res = [];

      for (let i of this.searchArry) {
        if (i.match(reg)) {
          res.push({
            title: `${i} `
          });
        }
      }

      this.results = res;
    }
  },
  data() {
    return {
      results: [],
      result: "",
      value: ""
    };
  },
  props: {
    searchArry: {
      type: Array,
      required: true
    }
  }
};
</script>
