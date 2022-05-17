<template>
  <div class="container_select">
    <h1>Autocomplete</h1>
    <my-select />
  </div>
</template>

<script>
import MySelect from "./components//MySelect.vue";

export default {
  components: { MySelect },
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container_select {
  max-width: 450px;
  margin: auto;
  height: auto;
}
</style>
