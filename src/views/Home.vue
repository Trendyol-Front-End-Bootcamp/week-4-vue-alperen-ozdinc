<template>
  <div v-if="!isLoading" class="home" id="home">
    <StarshipList :starships="starships" />
    <Pagination :pagination="pagination" @get-page="getPage" />
  </div>
</template>

<script>
// @ is an alias to /src
import { getStarships } from "@/services/starships-service.js";
import StarshipList from "@/components/StarshipList";
import Pagination from "@/components/Pagination";

export default {
  name: "Home",
  components: {
    StarshipList,
    Pagination,
  },
  mounted() {},
  data() {
    return {
      starships: [],
      currentPage: 1,
      pagination: null,
      isLoading: false,
    };
  },
  methods: {
    async setStarshipData(url) {
      this.isLoading = true;
      const data = await getStarships(url);
      const { previous, next, results } = data;
      this.starships = results;
      this.pagination = { previous, next };
      this.isLoading = false;
    },
    getPage(url) {
      this.setStarshipData(url);
    },
  },
  async created() {
    this.setStarshipData();
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
}
</style>
