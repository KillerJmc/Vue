<template>
  <div>
    <h2>这是关于</h2>
    <p>这是关于的内容...</p>
  </div>
</template>

<script>
export default {
  name: "About",
  created() {
    console.log('created')
  },
  destroyed() {
    console.log('destroyed')
  }
}
</script>

<style scoped>

</style>