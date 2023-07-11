<template>
</template>
<script>
import { computed, reactive, ref, watch } from "vue";

export default {
  name: "Body",

  setup() {
    const state = reactive({
      inputValue: "",
    });
    watch(
      () => {
        // The expression to watch
        return state.inputValue;
      },
      (newValue, oldValue) => {
        // The callback function when the value changes
        console.log("active changed:", newValue);
      }
    );
    return {
      state,
    };
  },
};
</script>
<style></style>
