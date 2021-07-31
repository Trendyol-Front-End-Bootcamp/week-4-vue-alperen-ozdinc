<template>
  <div>
    <button
      v-if="pagination.previous"
      class="btn previous"
      @click="$emit('get-page', pagination.previous)"
    >
      <span class="page-icon"><i class="fas fa-long-arrow-alt-left"></i></span>
    </button>
    <button
      v-if="pagination.next"
      class="btn next"
      @click="$emit('get-page', pagination.next)"
    >
      <span class="page-icon"><i class="fas fa-long-arrow-alt-right"></i></span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    pagination: Object,
  },
};
</script>

<style lang="scss" scoped>
.btn {
  color: #ffe81f;
  position: fixed;
  top: 50%;
  background: transparent;
  font-size: 30px;
  cursor: pointer;
  transition: 0.4s ease;
  border-radius: 7px;
  padding: 13px;
}
.next{
    right: 25px;
}
.previous{
    left: 25px;
}
</style>