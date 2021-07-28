<template>
    <Header />

</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
<style lang="scss">
a{
  text-decoration: none;
}
body {
  background: url('./assets/background.png');
  font-family: 'Pathway Gothic One', sans-serif;
}
</style>
