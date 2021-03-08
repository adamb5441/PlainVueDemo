const { createRouter, createWebHistory, createWebHashHistory } = VueRouter
const { loadModule } = window['vue3-sfc-loader'];

(async () => {
  const About = await loadVue('./Pages/About.vue');
  const ClickerDemo = await loadVue('./Pages/ClickerDemo.vue');


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

  
  window.vm = app.mount('#app')
})();