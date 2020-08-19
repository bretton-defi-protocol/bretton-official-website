<template>
  <div class="first-banner">
    <h1>{{ msg }}</h1>
    <app-header/>
    <div class></div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
export default {
  name: "FirstScreen",

  components: {
    AppHeader
  },

  data() {
    return {
      msg: "first screen"
    };
  }
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
