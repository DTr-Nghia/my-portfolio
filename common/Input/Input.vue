<template>
  <div class="z-[5] relative w-full">
    <label :class="label ? 'block' : 'hidden'">{{ label }}</label>
    <input
      :type="type"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      v-on:input="action"
      :autocomplete="type"
      class="bg-[#FBFBFC] py-[17px] px-[20px] dark:bg-transparent dark:bg-dark-gradient-input rounded-[10px] border-none outline-none w-full"
    />
    <p class="text-[#FF3333] text-[14px] p-[5px]" :class="error ? 'block' : 'hidden'">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    label: String,
    type: {
      type: String,
      default: "text",
    },
    name: {
      type:String,
      default:""
    },
    error: {
      type:String,
      default:""
    },
    value: {
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    onChange: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    action(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>
