<template>
  <div>
    <h2>这是页面</h2>
    <router-link to="/page/pageA" replace>页面A</router-link>
    <router-link to="/page/pageB" replace>页面B</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Page",
  data() {
    return {
      // 记录选中路径
      path: '/page/pageA'
    }
  },
  // 只有在keep-alive下才能使用
  activated() {
    console.log('activated')
    if (this.$route.path !== this.path) {
      this.$router.push(this.path)
    }
  },
  // 只有在keep-alive下才能使用
  deactivated() {
    console.log('deactivated')
    // 不能这么写，因为deactivated被调用时已经在其他组件中了
    // this.path = this.$route.path
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave')
    this.path = from.fullPath;
    console.log('path: ' + this.path)
    next()
  },
  created() {
    console.log('created')
  },
  destroyed() {
    console.log('destroyed')
  }
}
</script>

<style scoped>
  a {
    display: inline-block;
    font-size: 20px;
    margin: 20px 15px 0 0;
  }
</style>