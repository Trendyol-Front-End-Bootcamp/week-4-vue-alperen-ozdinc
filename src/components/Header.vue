<template>
  <DeathStar class="header-death-star" />
  <header>
    <a href="/" class="header-logo">
      <img class="logo" src="../assets/logo.png" alt="" />
      <h1>Starships</h1>
    </a>
  </header>
  <Lightsaber />
</template>

<script>
import DeathStar from "./DeathStar.vue";
import Lightsaber from "./Lightsaber.vue";

export default {
  name: "Header",
  components: {
    DeathStar,
    Lightsaber
  },
};
</script>

<style lang="scss" scoped>
.logo {
  transform: scale(0.65);
}
.header-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #ffe81f;
    font-size: 48px;
    font-weight: 600;
    letter-spacing: 6px;
  }
}
.header-death-star {
  transform: scale(0.6);
  position: absolute;
  top: -220px;
  right: -220px;
  z-index: -1;
  opacity: 0.9;
  filter: blur(3px);
  border: 10px solid #000;
}
</style>