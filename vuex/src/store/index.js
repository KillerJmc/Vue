import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 状态信息
  state: {
    counter: 100
  },
  // 公共修改方法，便于devtools追踪，注意此处只支持同步方法
  // Vue --dispatch-> Actions --commit-> Mutations --mutate-> State --render-> Vue
  mutations: {
    plus(state) {
      state.counter++;
    },
    minus(state) {
      state.counter--;
    },
    plusCount(state, count) {
      state.counter += count;
    },
    minusCount(state, count) {
      state.counter -= count;
    }
  },
  // 异步操作方法
  actions: {
    plusDelay(context, count) {
      // 要经过mutation
      return new Promise(resolve => {
        setTimeout(() => {
          context.commit('plusCount', count)
          resolve(context.state.counter)
        }, 3000)
      })
    }
  },
  // 类似computed
  getters: {
    counterPow(state) {
      return pow => {
        return Math.pow(state.counter, pow)
      }
    },
    counterSqrt(state, getters) {
      return getters.counterPow(2)
    }
  },
  // 按照模块划分（类似多个数据库），每个模块都有自己的state, actions, mutations, getters
  modules: {

  }
})