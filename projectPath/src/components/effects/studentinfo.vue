<template>
  <div>
    <group title="single column" label-width="5em">
      <Datatime title="datetime" v-model="date"></Datatime>
    </group>
  </div>
</template>

<script>
  import {Datetime, Group} from 'vux'

  export default {
    components: {
      Datetime, Group
    }
  }
</script>

<style scoped>

</style>
