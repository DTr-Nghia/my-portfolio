<template>
    <div>
      <label>{{ label }}</label>
      <input :type="type" :value="value" @input="handleInput" class="bg-red-500">
    </div>
  </template>
  
  <script>
  export default {
    name: 'Input',
    props: {
      label: String,
      type: {
        type: String,
        default: 'text'
      },
      value: {
        type: [String, Number],
        default: ''
      }
    },
    methods: {
      handleInput(event) {
        this.$emit('input', event.target.value);
      }
    }
  };
  </script>