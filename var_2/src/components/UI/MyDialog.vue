<template>
  <div v-if="show" class="dialog_container" @click="hide">
    <dialog-option
      :option="option"
      v-for="option in options"
      :key="option.name"
      @selectOption="$emit('selectOption', option)"
    />

    <div v-if="options.length === 0" class="dialog_nodata">No match found</div>
  </div>
</template>
<script>
import DialogOption from "./DialogOption.vue";
export default {
  components: { DialogOption },
  name: "my-dialog",
  props: {
    options: {
      type: Array,
      required: true,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hide() {
      this.$emit("update:show", false);
    },
  },
};
</script>
<style scope lang="scss">
.list {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease-in-out;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.dialog {
  &_container {
    margin-top: 5px;
    border: 1px solid rgb(184, 181, 181);
    width: 100%;
    border-radius: 6px;
    max-height: 170px;
    overflow: auto;
    box-shadow: 10px 5px 5px rgb(184, 181, 181);
  }
  &_nodata {
    margin-top: 5px;
    border: 1px solid rgb(184, 181, 181);
    box-shadow: 10px 5px 5px rgb(184, 181, 181);
    border-radius: 6px;
  }
}
</style>
