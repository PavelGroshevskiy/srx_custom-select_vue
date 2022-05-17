<template>
  <div
    class="dialog_wrapper"
    @mouseover="checked"
    @click="$emit('selectOption', option)"
  >
    <div class="dialog_option">
      {{ option.name }}
    </div>
    <div>
      <svg
        v-if="check"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="green"
          d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
        />
        <path fill="none" d="M0 0h24v24H0V0z" />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  name: "dialog-option",
  props: {
    option: {
      type: Object,
      required: true,
    },
    check: {
      type: Boolean,
      default: false,
    },
    // data() {
    //   return {
    //     check: false,
    //   };
    // },
  },
  methods: {},
};
</script>
<style lang="scss">
.dialog {
  &_wrapper {
    display: flex;
    justify-content: space-between;
    &:hover {
      background-color: #aca5a5;
      color: rgb(104, 223, 104);
      cursor: pointer;
    }
  }
  &_option {
    padding: 6px;
  }
}
</style>
