import Vue from 'vue'
import App from './App.vue'

/* // make ninjas component global, and ninjas component can use in other component
import Ninjas from './Ninjas.vue'
Vue.component('ninjas', Ninjas); */

new Vue({
  el: '#app',
  render: h => h(App)
})
