<template>
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Clicker Card</h5>
        <input v-model="message">
        <br /> 
        <div style="marginTop: 50px" class="row">
          <div class="col">
            <ClickerButton @clickedTheButton="reduceCount" message="Undo the thing :(" />
          </div>
          <div class="col">
            <ClickerButton @clickedTheButton="updateStore" :message="message" />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
 module.exports = {
    name: 'ClickerDemo',
    components:{
      'ClickerButton': Vue.defineAsyncComponent( () => loadModule('../components/ClickerButton.vue', options) )
    },
    data(){
      return {
        message: "Do the thing!"
      }
    },
    methods: {
      updateStore(){
        store.commit('increment')
      },
      reduceCount(){
        store.commit('decrement')
      }
    }
}
</script>