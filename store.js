const { createStore } = Vuex

const store = createStore({
  state: {
      count: 1
  },
  getters: {
    getCount (state) {
      return state.count
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
        state.count--
    }
  }
})