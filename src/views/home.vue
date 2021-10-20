<template>
<div class="home">
  <div class="twicon">
    <Icon v-for="(icon, index) in icons" :key="icon"
      :icon="icon"
      :index="index"
      v-model:activeNumber="activeNumber"
    />
  </div>
</div>
</template>

<script>
import { ref } from 'vue'
import Icon from '../components/icon.vue'
export default {
  components: {
    Icon
  },
  setup () {
    const icons = ref([])
    const activeNumber = ref(null)
    fetch('twicon.json')
      .then(res => res.json())
      .then(res => {
        icons.value = res
      })
    return {
      icons,
      activeNumber
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/media.scss';
@import '../assets/scss/color.scss';
.home{
  padding: 20px 0;
}
.twicon{
  margin: auto;
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(5, 150px);
  grid-auto-rows: auto;
  grid-gap: 40px;
  color: $main;
  transition: .5s grid-gap;
  @include desktops {
    grid-template-columns: repeat(3, 150px);
    grid-gap: 30px;
  }
  @include mobile {
    grid-template-columns: repeat(2, 150px);
    grid-gap: 20px;
  }
}
</style>