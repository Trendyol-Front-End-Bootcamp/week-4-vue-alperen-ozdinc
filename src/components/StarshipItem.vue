<template>
  <router-link
    :to="{
      name: 'StarshipDetail',
      params: { id: starship.url.split('starships/')[1].slice(0, -1) },
    }"
  >
    <div class="container">
      <div
        class="starship-card-container"
        @mouseover="show = true"
        @mouseleave="show = false"
      >
        <img
          class="starship-img"
          src="../assets/spaceship.png"
          alt="Star Wars Starship Image"
        />
        <div class="starship-data">
          <h3 class="starship-data-title">{{ starship.name }}</h3>
          <p>
            <span class="starship-data-title">Model:</span> {{ starship.model }}
          </p>
          <p>
            <span class="starship-data-title">Hyperdrive Rating:</span>
            {{ starship.hyperdrive_rating }}
          </p>
        </div>
      </div>
      <LightSaberBackground :show="show" /></div
  ></router-link>
</template>

<script>
import LightSaberBackground from "./LightSaberBackground.vue";

export default {
  name: "StarshipItem",
  props: {
    starship: Object,
  },
  components: {
    LightSaberBackground,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  width: 300px;
  height: 400px;
  &:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }
}

.starship-card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  position: relative;
  top: 100px;
  box-shadow: 10px 10px 20px #333, -10px -10px 20px #333;
  &:hover {
    box-shadow: none;
  }

  .starship-img {
    width: 280px;
  }

  .starship-data {
    color: #fff;
    text-align: center;
    .starship-data-title {
      color: #ffe81f;
    }
  }
}
</style>