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

<style scoped>
header {
  width: 100%;
  text-align: center;
  position: relative;
  height: 60px;
  border-bottom: 3px solid #35495e;
}

header h1 {
  position: absolute;
  top: 5px;
  left: 15px;
  font-size: 60px;
}

header ul.menulist {
  position: relative;
  top: 15px;
  margin: 0;
  padding: 0;
  list-style: none;
}

header ul.menulist li {
  display: inline-block;
  margin-right: 30px;
}

header ul.menulist li:last-child {
  margin-right: 0;
}

header ul.menulist li a {
  text-decoration: none;
  color: #333;
  padding: 10px 15px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

header ul.menulist li a.active {
  background-color: #35495e;
  color: #fff;
}

header ul.menulist li a:hover {
  background-color: #eaeaea;
}
</style>

