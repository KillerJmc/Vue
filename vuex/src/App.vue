<template>
  <div>
    <h1>App中内容：</h1>
    <p>{{$store.state.counter}}</p>

    <button @click="plus">+</button>
    <button @click="minus">-</button>

    <another/>
  </div>
</template>

<script>
import Another from './components/Another'

export default {
  name: 'App',
  methods: {
    plus() {
      this.$store.state.counter++;
    },
    minus() {
      this.$store.state.counter--;
    }
  },
  components: {Another}
}
</script>

<style>
  p {
    font-size: 20px;
  }

  button {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
</style>
