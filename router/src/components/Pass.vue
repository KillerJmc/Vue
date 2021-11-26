<template>
  <div>
    <!-- 用query获取 -->
    <h1>参数列表：id: {{$route.query.id}}, name: {{$route.query.name}}</h1>
  </div>
</template>

<script>
export default {
  name: "Pass"
}
</script>

<style scoped>
  h1 {
    color: blue;
  }
</style>