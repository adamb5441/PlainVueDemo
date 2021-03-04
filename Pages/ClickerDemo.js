const ClickerDemo = {
    name: 'ClickerDemo',
    components:{
      
    },
    data(){
      return {
        message: "Do the thing!"
      }
    },
    methods: {
      updateStore(){
        store.commit('increment')
      }
    },
    template:
    `
    <ClickerButton @clickedTheButton="updateStore" :message="message" />
    `
}