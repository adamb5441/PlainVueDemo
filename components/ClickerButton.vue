<template>
    <button class="btn btn-primary" @click="handleClick()">{{message}}</button>
</template>
<script>
module.exports = {
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
    }
}
</script>