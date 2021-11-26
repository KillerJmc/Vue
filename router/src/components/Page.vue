<template>
  <div>
    <h2>这是页面</h2>
    <router-link to="/page/pageA" replace>页面A</router-link>
    <router-link to="/page/pageB" replace>页面B</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Page"
}
</script>

<style scoped>
  a {
    display: inline-block;
    font-size: 20px;
    margin: 20px 15px 0 0;
  }
</style>