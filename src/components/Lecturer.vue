<template>
  <div id="lecturers">
    <ul>
        <li v-for="(lec, idx) in lecturers" @click="lec.show = !lec.show" :key="idx">
            <h2>{{ lec.name }}</h2>
            <h3 v-show="lec.show">{{ lec.speciality }}</h3>
        </li>
    </ul>
    <button v-on:click="deleteLecturer">Delete Lecturer</button>
  </div>
</template>

<script>
export default {
  props: {
      // get data object from Parent Component 
      lecturers: {
          type: Array,
          required: true
      }
  },
  data() {
    return {};
  },
  methods: {
      deleteLecturer() {
          this.lecturers.pop();
      }
  }
};
</script>

<style scoped>
#lecturers {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
