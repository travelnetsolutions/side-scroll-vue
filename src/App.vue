<template>
<div class="container">
  <side-scroll>
    <div :key="index" v-for="(slide, index) in slides">
      <div class="slide">{{slide}}</div>
    </div>
  </side-scroll>
</div>
</template>

<script>
import SideScroll from './components/side-scroll';
export default {
  components: {
    SideScroll
  },
  data: () => ({
    slides: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  })
}
</script>

<style lang="scss">
.slide {
  height: 100px;
  width: 50px;
  background-color: blue;
  margin-right: 30px;
}
.container {
  width: 50%;
}
</style>
