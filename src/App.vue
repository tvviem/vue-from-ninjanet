<template>
  <div>
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <div>
      <button v-on:click="component = 'form-one'">Show Contact Form</button>
      <button v-on:click="component = 'form-two'">Show Login Form</button>
    </div>
  </div>
</template>

<script>
import formOne from './components/formOne.vue'
import formTwo from './components/formTwo.vue'

export default {
  components: {
    'form-one': formOne,
    'form-two': formTwo
  },
  data() {
    return {
      component: 'form-two'
    }
  }
}
</script>

<style scoped>
div {
  text-align: center
}
</style>
