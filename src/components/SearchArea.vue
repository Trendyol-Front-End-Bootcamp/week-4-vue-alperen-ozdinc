<template>
  <form class="search-form" @submit.prevent="handleSubmit">
    <input
      class="search-area"
      type="search"
      placeholder="Enter model or name"
      v-model="searchText"
      @input="handleSubmit"
    />
  </form>
</template>

<script>
export default {
  name: "SearchArea",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("search-starship", this.searchText);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-area {
  color: #ffe81f;
  position: relative;
  background: transparent;
  font-size: 30px;
  transition: 0.4s ease;
  border-radius: 7px;
  padding: 13px;
}
.search-form {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
</style>