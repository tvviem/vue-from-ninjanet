<template>
  <div>
    <app-header></app-header>
    <lecturer :lecturers="lecturers"></lecturer>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Lecturer from "./components/Lecturer.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    lecturer: Lecturer
  },
  data() {
    return {
      lecturers: [
        { name: "tvviem", speciality: "Vue Components", show: true },
        { name: "cvky", speciality: "Vuetify design", show: false },
        { name: "hirosima", speciality: "Event Handling", show: true },
        { name: "Karma", speciality: "Tester", show: false },
        { name: "doublefire", speciality: "Backend Technology", show: true },
        { name: "hkbao", speciality: "Backend Technology", show: false }
      ]
    };
  }
};
</script>

<style>
</style>
