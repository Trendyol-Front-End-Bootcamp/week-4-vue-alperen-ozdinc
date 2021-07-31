<template>
<SearchArea @search-starship="searchStarshipText"/>
  <div v-if="!isLoading" class="home" id="home">
    <StarshipList :starships="starships" />
    <Pagination :pagination="pagination" @get-page="getPage" />
  </div>
</template>

<script>
// @ is an alias to /src
import { getStarships, searchStarship} from "@/services/index.js";
import SearchArea from "@/components/SearchArea";
import StarshipList from "@/components/StarshipList";
import Pagination from "@/components/Pagination";

export default {
  name: "Home",
  components: {
    StarshipList,
    Pagination,
    SearchArea
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
    async setStarshipData(handlerFunction, ...arg) {
      this.isLoading = true;
      const data = await handlerFunction(arg);
      const { previous, next, results } = data;
      this.starships = results;
      this.pagination = { previous, next };
      this.isLoading = false;
    },
    fetchStarships(){
      this.setStarshipData(getStarships);
    },
    getPage(url) {
      this.setStarshipData(getStarships, url);
    },
    searchStarshipText(searchText){
      this.setStarshipData(searchStarship, searchText);
    }
  },
  async created() {
    this.fetchStarships();
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
}
</style>
