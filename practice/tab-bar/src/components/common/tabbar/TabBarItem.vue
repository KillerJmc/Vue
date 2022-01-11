<template>
  <div :class="{item: true, last: isLast}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    isLast: Boolean
  }
}
</script>

<style scoped>
  .item {
    float: left;
    text-align: center;
    line-height: 80px;
    margin-right: 45px;
  }

  .last {
    margin-right: 0;
  }

  .router-link-active{
    color: deeppink;
  }
</style>