<template>
  <div
    class="dialog_wrapper"
    @mouseover="checked"
    @click="$emit('selectOption', option)"
  >
    <div class="dialog_option">
      {{ option.name }}
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
  },
  methods: {},
};
</script>
<style lang="scss">
.dialog {
  &_wrapper {
    display: flex;
    justify-content: space-between;
    position: relative;
    &:after {
      content: "v";
      transition: 0.2;
      transform: scaleX(0);
      position: absolute;
      right: 12px;
      top: 5px;
    }

    &:hover {
      background-color: #aca5a5;
      color: rgb(104, 223, 104);
      cursor: pointer;
      &:after {
        transform: scaleX(1);
        transition: 1;
      }
    }
  }
  &_option {
    padding: 6px;
  }
}
</style>
