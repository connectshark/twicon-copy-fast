<template>
  <div class="twicon">
    <Icon v-for="(icon, index) in icons" :key="icon"
      :icon="icon"
      :index="index"
      v-model:activeNumber="activeNumber"
    />
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
.twicon{
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  color: #065F46;
}
</style>