<template>
    <header>
        <h1><a class ="logo">Youngja</a></h1>
            <div class ="menu">
              <ul class="menulist">
                <li><a href = "javascript:;" @click="createExam" :class="{'active' : isActive('create')}">시험지 만들기</a></li>
                <li><a href = "javascript:;" @click="viewExam" :class="{'active' : isActive('view')}">내 시험지함</a></li>
              </ul>
            </div>
    </header>
</template>

<script>
export default {
  data() {  
    return {
      activeItem: '',
    };
  },
  methods: {
    createExam() {
      //클릭 시 실행
      this.activeItem = 'create';
    },
    viewExam() {
      //클릭 시 실행되는 곳
      this.activeItem = 'view';
    },
    isActive(item) {
      return this.activeItem == item;
    },
  },
};
</script>

