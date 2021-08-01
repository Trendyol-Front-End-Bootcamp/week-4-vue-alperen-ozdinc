<template>
  <div class="starship-list">
    <StarshipItem
      v-for="(starship, index) in starships"
      :key="index"
      :starship="starship"
      class="starship-item"
    />
  </div>
</template>

<script>
import StarshipItem from "./StarshipItem.vue";
export default {
  name: "StarshipList",
  components: {
    StarshipItem,
  },
  props: {
    starships: Array,
  },
};
</script>
<style lang="scss" scoped>
.starship-list {
  // display: grid;
  // grid-template-columns: repeat(3, minmax(300px, 1fr));
  // gap: 60px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .starship-item{
    margin: 45px;
  }
}
</style>