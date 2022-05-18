<template>
  <div class="selector">
    <div>
      <my-input v-model:value.trim="value" @click="fetchDataAndShow">
      </my-input>
    </div>

    <my-dialog
      v-if="!isLoading"
      @selectOption="selected"
      v-model:show="dialogVisible"
      :options="filterOptions"
    ></my-dialog>
    <div v-else class="options_loading">Loading...</div>
  </div>
</template>
<script>
import MyDialog from "./UI/MyDialog.vue";
import MyInput from "./UI/MyInput.vue";
import axios from "axios";

export default {
  components: { MyInput, MyDialog },
  name: "my-select",
  data() {
    return {
      options: [
        // { name: "Albania", value: "Albania" },
        // { name: "Algeria", value: "Algeria" },
        // { name: "Bulgaria", value: "Bulgaria" },
        // { name: "Central African Republic", value: "Central African Republic" },
        // { name: "Estonia", value: "Estonia" },
        // { name: "Greece", value: "Greece" },
      ],
      value: "",
      dialogVisible: false,
      isLoading: false,
    };
  },

  methods: {
    async fetchDataAndShow() {
      try {
        this.isLoading = true;
        setTimeout(async () => {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
          );
          this.options = await response.data;
          this.isLoading = false;
          this.showDialog();
        }, 1000);
      } catch (e) {
        alert(e);
      }
    },
    showDialog() {
      this.dialogVisible = true;
    },
    selected(option) {
      this.value = option.name;
    },
  },

  mounted() {
    document.addEventListener("click", () => {
      this.dialogVisible = false;
    });
  },

  computed: {
    filterOptions() {
      if (this.value === "") {
        return this.options;
      } else {
        return [...this.options].filter((option) =>
          option.name?.toLowerCase().includes(this.value.toLowerCase())
        );
      }
    },
  },
};
</script>
<style lang="scss">
.options {
  &_loading {
    margin-top: 5px;
    border: 1px solid rgb(184, 181, 181);
    box-shadow: 10px 5px 5px rgb(184, 181, 181);
    border-radius: 6px;
  }
}
</style>
