<template>
  <div id="app">
    <div>{{data}}</div>
  </div>
</template>

<script>

import request from "./network/request";

export default {
  name: 'App',
  data() {
    return {
      data: {}
    }
  },
  async created() {
    // 等待promise结果
    this.data = await request.get('/get')
  }
}
</script>
