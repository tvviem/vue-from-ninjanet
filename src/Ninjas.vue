<template>
  <ul>
      <li v-for="(item, index) in ninjas" :key="index"> {{ item }} </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      ninjas: ['yoshi', 'tvviem', 'ttxuyen']
    }
  }
}
</script>

<style>

</style>
