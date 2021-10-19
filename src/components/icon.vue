<template>
<div class="icon" @click="copy" :class="{ active: index === activeNumber }">
  <p class="i-img"><i :class="icon"></i></p>
  <h3 class="title">{{ $t(name) }}</h3>
</div>
</template>

<script>
import clipboard from 'copy-text-to-clipboard'
export default {
  props: {
    icon: {
      type: String
    },
    index: {
      type: Number
    },
    activeNumber: {
      type: Number
    }
  },
  emits: ['update:activeNumber'],
  setup (props, { emit }) {
    const copy = () => {
      clipboard(`<i>${props.icon}</i>`)
      emit('update:activeNumber', props.index)
    }
    return {
      name: props.icon.slice(7),
      copy
    }
  }
}
</script>

<style lang="scss" scoped>
.icon{
  border-radius: 20px;
  width: 150px;
  padding: 20px 0;
  margin-bottom: 20px;
  box-shadow: 0 0 0 1px #00000033;
  transition: box-shadow .2s, background .2s, color .2s;
  cursor: pointer;
  &:hover{
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  &:active{
    box-shadow: 0 0 0 1px #00000033;
  }
  .title{
    font-size: 1rem;
    line-height: 2;
  }
  .i-img{
    font-size: 2rem;
  }
}
.active{
  background-color: #065F46;
  color: #fff;
}
</style>