app.component('ClickerButton', {
    name: 'ClickerButton',
    props: {
        message: {
          type: String,
          required: true
        }
      },
    methods: {
      handleClick(){
        this.$emit("clickedTheButton")
      }
    },
    template:
    `
    <button class="btn btn-primary" @click="handleClick()">{{message}}</button>
    `
  })