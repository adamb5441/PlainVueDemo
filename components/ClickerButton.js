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
    <button @click="handleClick()">{{message}}</button>
    `
  })