<template>
  <div class="movable-lightsaber">
    <Lightsaber />
  </div>
</template>

<script>
import Lightsaber from "./Lightsaber.vue";

export default {
  name: "Loading",
  components: {
    Lightsaber
  }
};
</script>

<style lang="scss" scoped>
.movable-lightsaber{
  position: relative;
  animation-name: move-lightsaber;
  animation-duration: 1.5s;
  
}
@keyframes move-lightsaber {
  0%   {background-color:red; top:0vh;}
  50%  {background-color:blue; top:72vh;}
  100% {background-color:red; top:0vh;}
}
</style>