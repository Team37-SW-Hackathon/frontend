<template>
  <div >
    <h3>페이지를 찾을 수 없습니다.</h3>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
</style>