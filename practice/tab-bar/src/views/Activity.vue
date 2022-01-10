<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Activity"
  }
</script>

<style scoped>
  .content {
    height: 560px;
    width: 360px;
    line-height: 560px;
    text-align: center;
  }
</style>