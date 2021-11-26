<template>
  <div>
    <h2>这是用户界面</h2>
    <!-- 获取路径参数 -->
    <p>你好，{{$route.params.name + ', ' + $route.params.id}}</p>
  </div>
</template>

<script>
export default {
  name: "User"
}
</script>

<style scoped>
  p {
    color: blue;
    font-size: 20px;
  }
</style>