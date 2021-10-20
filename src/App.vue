<template>
  <Banner/>
  <LangBar/>
  <router-view></router-view>
</template>

<script>
import Banner from './components/banner.vue'
import LangBar from './components/langBar.vue'
export default {
  components: {
    Banner,
    LangBar
  },
  setup () {
    return {
    }
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Roboto Mono', 'Noto Sans TC', sans-serif;
  text-align: center;
  min-height: 100vh;
  line-height: 1;
}
</style>
