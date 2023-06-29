<template>
  <div>
    <NumberComponent :number="number1" :isChecked="isChecked1" />
    <NumberComponent :number="number2" :isChecked="isChecked2" />
    <NumberComponent :number="number3" :isChecked="isChecked3" />
    <NumberComponent :number="number4" :isChecked="isChecked4" />
  </div>
</template>

<script>
import NumberComponent from './NumberComponent';

export default {
  data() {
    return {
      number1: 1,
      isChecked1: true,
      number2: 2,
      isChecked2: false,
      number3: 3,
      isChecked3: false, // 특정 조건을 만족하도록 설정
      number4: 4,
      isChecked4: false,
    };
  },
  components: {
    NumberComponent,
  },
};
</script>