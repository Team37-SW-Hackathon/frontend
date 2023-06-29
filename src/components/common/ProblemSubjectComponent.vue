<template>
    <div class="option-container" :class="{ 'selected': selected }" @click="$emit('click')">
      {{ text }}
    </div>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
        required: true,
      },
      selected: {
        type: Boolean,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .option-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border: 2px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
  }
  
  .selected {
    border-color: #2196f3;
    background-color: #f0f8ff;
  }
  
  </style>
  