<template>
<div class="banner">
<h1>The 100 icons of Taiwan</h1>
</div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/color.scss';
@import '../assets/scss/media.scss';
.banner{
  background-color: $main;
  padding: 20px 0;
  h1{
    font-size: 3rem;
    color: #fff;
    line-height: 4rem;
    @include desktops {
      font-size: 2.5rem;
      line-height: 3rem;
    }
    @include mobile {
      font-size: 2rem;
      line-height: 2rem;
    }
  }
}
</style>