<template>
  <div id="app">
    <!-- 把router按超链接显示出来，replace表示点击时为直接替换，非入栈，不能返回上一页面 (h5 history replace) -->
    <!-- 还可以加tag="button"渲染为button -->
    <router-link to="/home" replace>首页</router-link>
    <router-link to="/about" replace>关于</router-link>
    <router-link :to="/user/ + name + '/' + id" replace>用户</router-link>
    <router-link to="/page" replace>页面</router-link>
    <router-link :to="pass" replace>参数传递</router-link>
    <button @click="changeStatus">跳转状态</button>

    <!-- 标记显示在哪 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return {
      name: 'Jmc',
      id: 666,
      pass: {
        path: '/pass',
        // 用query方法传递多参数
        query: {
          name: 'Lucy',
          id: 123
        }
      }
    }
  },
  methods: {
    changeStatus() {
      // 获取当前路径
      let path = this.$route.path

      // 修改当前路径
      this.$router.replace(path === "/home" ? "/about" : "/home")
    }
  }
}
</script>

<style scope>
  /* router-link会被dom渲染为a */
  a {
    display: inline-block;
    font-size: 20px;
    margin: 20px 15px 0 0;
  }
</style>
