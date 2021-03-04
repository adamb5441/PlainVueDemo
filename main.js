const { createRouter, createWebHistory, createWebHashHistory } = VueRouter


  const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      { path: '/', component: ClickerDemo },
      { path: '/About', component: About }
    ],
  })

const app =  Vue.createApp({
    data() {
      return {
          message: "YEET!"
      }
    },
    computed: {
        globalCount () {
          return this.$store.getters.getCount
        }
    }
})

app.use(router)
app.use(store)