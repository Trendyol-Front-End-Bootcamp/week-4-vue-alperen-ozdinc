<template>
  <div class="home">
    
  </div>
</template>

<script>
// @ is an alias to /src
import { getStarships} from '@/services/starships-service.js';

export default {
  name: 'Home',
  data() {
    return {
      starships: [],
      page: 1,
      previous: '',
      next: ''
    }
  },
  async created() {
      const data = await getStarships();
      this.starships = data.results;
      this.previous = data.previous;
      this.next = data.next;
  }
}
</script>
