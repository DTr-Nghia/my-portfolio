<template>
  <button :class="buttonClass" @click="handleClick">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    label: {
      type: String,
      required: true,
    },
    buttonClass: String,
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>
