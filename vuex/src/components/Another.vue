<template>
  <div>
    <h1>组件中内容：</h1>
    <p>counter: {{$store.state.counter}}</p>
    <p>counter²: {{$store.getters.counterSqrt}}</p>
    <p>counter^3: {{$store.getters.counterPow(3)}}</p>
  </div>
</template>

<script>
  export default {
    name: "Another"
  }
</script>

<style scoped>

</style>