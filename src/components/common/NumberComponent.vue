<template>
    <div class="circle-container">
      <div class="circle" :class="{ 'checked': isChecked }">
        <span>{{ number }}</span>
        <span class="checkmark"></span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      number: {
        type: Number,
        required: true,
      },
      isChecked: {
        type: Boolean,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .circle-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
  
  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #F2F4F8;
    color: #ADB7C5;
    font-size: 24px;
    position: relative;
  }
  
  .circle.checked .checkmark {
    display: block;
  }
  
  .checkmark {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border: 2px solid white;
    border-radius: 50%;
  }
  
  </style>
  