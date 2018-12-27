<template>
<div class="side-scroll d-flex">
  <div class="to-left scroll-arrow align-items-center" v-if="showLeft" @click="scrollContent(-2)">
    <i class="far fa-caret-left fa-5x"></i>
  </div>
  <div class="scroll-content" ref="scrollContent" @scroll="scrollContentListener">
    <slot></slot>
  </div>
  <div class="to-right scroll-arrow align-items-center" v-if="showRight" @click="scrollContent(2)">
    <i class="far fa-caret-right fa-5x"></i>
  </div>
</div>
</template>

<script>
import { throttle } from 'lodash';

export default {
  data() {
    return {
      showLeft: false,
      showRight: true,
    };
  },
  methods: {
    scrollContent(distance) {
      const scrollContent = this.$refs.scrollContent;
      if (scrollContent.scrollLeft > -15) {
        const scroll = scrollContent.clientWidth / distance;
        scrollContent.scroll({
          top: 0,
          left: scrollContent.scrollLeft + scroll,
          behavior: 'smooth',
        });
      }
    },
    scrollContentListener: throttle(function() {
      const scrollContent = this.$refs.scrollContent;
      if (scrollContent.scrollLeft <= 0) {
        this.showLeft = false;
      } else if (scrollContent.scrollLeft >= scrollContent.scrollWidth - scrollContent.clientWidth) {
        this.showRight = false;
      } else {
        this.showLeft = true;
        this.showRight = true;
      }
    }, 250),
  },
};
</script>

<style lang="scss">
.no-scroll-bar {
  &::-webkit-scrollbar {
    display: none;  // Safari and Chrome
  }

  &::-ms-scrollbar {
    display: none;  // Safari and Chrome
  }

  &::-moz-scrollbar {
    display: none;  // Safari and Chrome
  }

  &::-o-scrollbar {
    display: none;  // Safari and Chrome
  }
}
.side-scroll {
  @extend .no-scroll-bar;
  display: flex;
  -webkit-overflow-scrolling: touch;
  position: relative;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
  .scroll-content {
    @extend .no-scroll-bar;
    overflow-y: scroll;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .scroll-arrow {
    padding-right: 15px;
    padding-left: 15px;
    position: absolute;
    height: 100%;
    z-index: 1;
    display: flex;
    cursor: pointer;
    text-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    color: rgb(212, 212, 212);
    i {
      margin: 0;
    }
    &.hide {
      display: none;
    }
    &.to-right {
      right: 0;
      &:hover {
        background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,.5) 50%);
      }
    }
    &.to-left {
      left: 0;
      &:hover {
        background: linear-gradient(to left, rgba(255,255,255,0) 0%,rgba(255,255,255,.5) 50%)
      }
    }
  }
}
</style>
