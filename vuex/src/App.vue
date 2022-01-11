<template>
  <div>
    <h1>App中内容：</h1>
    <p>counter: {{$store.state.counter}}</p>

    <button @click="add">+</button>
    <button @click="sub">-</button>
    <br>
    <br>
    <button @click="add10">+10</button>
    <button @click="sub10">-10</button>
    <br>
    <br>
    <button @click="add10Delay" class="delay-btn">+10delay</button>

    <another/>
  </div>
</template>

<script>
import Another from './components/Another'

export default {
  name: 'App',
  methods: {
    add() {
      // 过Mutations
      this.$store.commit('plus')
    },
    sub() {
      this.$store.commit('minus')
    },
    add10() {
      this.$store.commit('plusCount', 10)
    },
    sub10() {
      this.$store.commit('minusCount', 10)
    },
    async add10Delay() {
      // 过Actions用dispatch
      let res = await this.$store.dispatch('plusDelay', 10)
      console.log('延迟添加结果是：' + res)
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

  .delay-btn {
    width: 70px;
  }
</style>
