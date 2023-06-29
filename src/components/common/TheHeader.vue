<template>
  <header>
    <div>
      <div class="logo-container">
        <router-link to="/">
          <img src="" alt="" class="logo-img" />
        </router-link>
      </div>
      <nav>
        <ul>
          <li v-for="(link, index) in links" @click="menuToggled" :key="index">
            <router-link :to="link.linkTo">{{ link.name }}</router-link>
          </li>
        </ul>
      </nav>
    </div>

    <div><img src="" alt="" class="profile-img" /></div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: "시험지 만들기", linkTo: "/create" },
        { name: "내 시험지", linkTo: "/list" },
      ],
      isMenuClicked: false,
    };
  },
  methods: {
    menuToggled() {
      this.isMenuClicked = !this.isMenuClicked;
    },
    isActive(item) {
      return this.activeItem == item;
    },
  },
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 4rem;
  background-color: white;
  box-shadow: 0 0.4rem 0.8rem rgba(236, 236, 236, 0.25);
  z-index: 1;
}

ul {
  display: flex;
  gap: 6rem;
}

li a {
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--gray300);
}

li a:hover {
  color: var(--gray100);
}

.router-link-active {
  color: var(--blue);
}
</style>

