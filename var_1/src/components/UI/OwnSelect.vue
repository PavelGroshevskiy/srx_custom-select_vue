<template>
  <div class="container_select">
    <div class="selector">
      <div class="selector_block">
        <input
          class="selector_input"
          placeholder="Укажите регион"
          type="search"
          :value="value || select"
          @input="updateInput"
          @click="fetchCountries"
          v-focus
        />
        <button
          :disabled="showLoading == 1"
          @click="fetchCountries"
          class="selector_button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
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
      <transition name="option-item">
        <div v-if="!isOptionsLoading" class="selector_options">
          <p
            @click="selectOption(option)"
            class="selector_option"
            v-for="option in options"
            :key="option.value"
          >
            {{ option.name }}
          </p>
        </div>
      </transition>
      <transition name="option-item">
        <p class="selector_loading" v-if="showLoading">Loading...</p>
      </transition>
      <p v-if="options.length == 0">No match found</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "own-select",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    select: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      showLoading: false,
      isOptionsLoading: true,
    };
  },
  methods: {
    //имитация асинхронная подгрузка опшенов

    fetchCountries() {
      this.showLoading = !this.showLoading;

      try {
        if (this.showLoading && this.isOptionsLoading) {
          setTimeout(() => {
            this.isOptionsLoading = !this.isOptionsLoading;
            this.showLoading = !this.showLoading;
          }, 500);
        } else {
          this.isOptionsLoading = !this.isOptionsLoading;
          this.showLoading = false;
        }
      } catch (e) {
        alert(e);
      }
    },

    updateInput(event, option) {
      this.$emit("update:value", event.target.value);
      this.$emit("update:select", option);

      console.log(option);
    },

    // функция для скрытия опшенов при клике в любую область

    hideOptions() {
      this.isOptionsLoading = true;
    },

    // выбор опшена

    selectOption(option) {
      // console.log(option);
      this.$emit("select", option);
      // console.log(option);
    },
  },
  mounted() {
    document.addEventListener("click", this.hideOptions.bind(this), false);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.hideOptions);
  },
  watch: {
    options(newValue) {
      console.log(newValue);
    },
  },
};
</script>
<style lang="scss">
.option {
  &-item-enter-active {
    transition: all 0.3s ease-out;
  }

  &-item-enter-from,
  &-item-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
}

.container_select {
  max-width: 350px;
  margin: auto;
  height: auto;
}
.selector {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &_block {
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
  &_options {
    border: 1px solid rgb(184, 181, 181);
    width: 100%;
    border-radius: 6px;
    margin-top: 5px;
    max-height: 170px;
    overflow: auto;
    box-shadow: 10px 5px 5px rgb(184, 181, 181);
  }
  &_option {
    padding: 5px;
    margin: 0;
    cursor: pointer;
    &:hover {
      background-color: #aca5a5;
    }
  }
  &_loading {
    border: 1px solid rgb(184, 181, 181);
    width: 100%;
    border-radius: 6px;
    margin: 5px;
    box-shadow: 10px 5px 5px rgb(184, 181, 181);
  }
}
</style>
