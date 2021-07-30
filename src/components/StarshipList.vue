<template>
  <div class="starship-list">
    <StarshipItem
      v-for="(starship, index) in starships"
      :key="index"
      :starship="starship"
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
.starship-list{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10px;

}
</style>