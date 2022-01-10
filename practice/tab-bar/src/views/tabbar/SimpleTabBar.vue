<template>
  <tab-bar>
    <tab-bar-item>
      <router-link to="/home">首页</router-link>
    </tab-bar-item>
    <tab-bar-item>
      <router-link to="/category">分类</router-link>
    </tab-bar-item>
    <tab-bar-item>
      <router-link to="/shopping-cart">购物车</router-link>
    </tab-bar-item>
    <tab-bar-item :is-last="true">
      <router-link to="/my-info">我的</router-link>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "./TabBar";
import TabBarItem from "./TabBarItem";

export default {
  name: "SimpleTabBar",
  components: {TabBar, TabBarItem}
}
</script>

<style scoped>

</style>