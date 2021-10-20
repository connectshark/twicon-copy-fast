<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale" class="changer">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ $t(locale) }}</option>
    </select>
  </div>
</template>

<script>
export default {
  setup () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/color.scss';
.locale-changer{
  background-color: $main;
  padding: 10px 0;
  .changer{
    width: 160px;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 1rem;
    line-height: 1rem;
  }
}
</style>