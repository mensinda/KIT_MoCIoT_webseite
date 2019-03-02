import Vue from 'vue';
import Vuex from 'vuex';
import Orientation from '@/sensor/orientation';
import Motion from '@/sensor/motion';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    constStr: 'Global store string',
    orientation: new Orientation(),
    motion: new Motion(),
  },
  mutations: {

  },
  actions: {

  },
});
