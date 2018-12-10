import Vue from 'vue';
import SideScroll from './sideScroll.vue';

const Components: any = {
  SideScroll,
};

Object.keys(Components).forEach((name) => {
    Vue.component(name, Components[name]);
});

export default Components;