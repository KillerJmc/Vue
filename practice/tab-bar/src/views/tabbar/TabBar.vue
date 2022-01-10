<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
  .tab-bar {
    height: 80px;
    width: 320px;
    padding: 0 20px;
    background: #fcf8f1;
  }
</style>