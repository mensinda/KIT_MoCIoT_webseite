import Vue from 'vue';
import Vuex from 'vuex';
import Sensors from '@/sensor/sensors';
import Orientation from '@/sensor/orientation';
import Motion from '@/sensor/motion';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    constStr: 'Global store string',
    sensors: new Sensors(),
    orientation: new Orientation(),
    motion: new Motion(),

    appSize: {
      width: 0,
      height: 0,
    }
  },
  mutations: {

  },
  actions: {

  },
});
