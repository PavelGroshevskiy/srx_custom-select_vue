<template>
  <h1>Autocomplete</h1>
  <own-select
    v-model:value="value"
    @select="selectOption"
    v-model:select="select"
    :options="filterOptions"
  />
</template>

<script>
import OwnSelect from "./components/UI/OwnSelect.vue";
export default {
  components: { OwnSelect },
  name: "App",
  data() {
    return {
      options: [
        { name: "Albania", value: "Albania" },
        { name: "Algeria", value: "Algeria" },
        { name: "Bulgaria", value: "Bulgaria" },
        { name: "Central African Republic", value: "Central African Republic" },
        { name: "Estonia", value: "Estonia" },
        { name: "Greece", value: "Greece" },
      ],
      value: "",
      select: "",
    };
  },
  methods: {
    selectOption(option) {
      this.select = option.name;
      this.value = this.select;
    },
  },
  computed: {
    filterOptions() {
      if (this.value === "") {
        return this.options;
      } else {
        return [...this.options].filter((option) =>
          option.name
            ?.toLowerCase()
            .includes(this.value.toLowerCase() || this.select.toLowerCase())
        );
      }
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
