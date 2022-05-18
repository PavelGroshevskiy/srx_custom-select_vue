<template>
  <div class="selector_wrapper">
    <input
      :value="value"
      @input="updateValue"
      class="selector_input"
      placeholder="Укажите регион"
      type="search"
    />
    <button @click="showDialog" class="selector_button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="24"
        viewBox="0 0 30 24"
      >
        <path
          fill="#6d6a6a"
          d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
        />
        <path fill="none" d="M0 0h24v24H0V0z" />
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  name: "my-input",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("update:value", event.target.value);
    },
  },
};
</script>
<style lang="scss">
.selector {
  &_wrapper {
    display: flex;
    padding: 1px;
    border: 1px solid rgb(184, 181, 181);
    width: 100%;
    border-radius: 6px;
    &:hover {
      border: 2px solid rgb(184, 181, 181);
    }
  }
  &_input {
    border: none;
    outline: none;
    width: 100%;
    vertical-align: middle;
  }
  &_button {
    width: 25px;
    height: 25px;
    border: none;
    background: #fff;
    cursor: pointer;
  }
}
</style>
