<template>
    <div class="options-container">
      <ProblemComponent
        v-for="(option, index) in options"
        :key="index"
        :text="option.text"
        :selected="selectedOption === index"
        @click="selectOption(index)"
      />
    </div>
  </template>
  
  <script>
  import ProblemComponent from './ProblemSubjectComponent.vue';
  
  export default {
    data() {
      return {
        options: [
          { text: '주제 선택' },
          { text: '요지 선택' },
          { text: '제목 고르기' },
          { text: '어법, 어휘 선택' },
          { text: '요약문 단어 고르기' },
        ],
        selectedOption: null,
      };
    },
    components: {
        ProblemComponent,
    },
    methods: {
      selectOption(index) {
        this.selectedOption = index;
      },
    },
  };
  </script>
  
  <style scoped>
.options-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>