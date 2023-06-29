<template>
    <header>
      <h1><a href="#" class="logo">Youngja</a></h1>
            <div class ="menu">
              <ul class="menulist">
                <li><a href="javascript:;" @click="createExam" :class="{'active' : isActive('create')}">시험지 만들기</a></li>
                <li><a href="javascript:;" @click="viewExam" :class="{'active' : isActive('view')}">내 시험지함</a></li>
              </ul>
            </div>
    </header>
</template>

<script>
export default {
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
header{width:100%; text-align:center; position:relative; height:120px; border-bottom:1px solid #35495e}
header h1{position:absolute; top:0; left:50px;}
header ul.menulist:after{display:block; clear:both; content:'';}
header ul.menulist{position: absolute; top:20px; right:50px;}
header ul.li{float:left; padding:10px 20px; list-style: none;}
a{text-decoration:none; color:#333};
</style>