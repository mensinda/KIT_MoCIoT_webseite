import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import Sensors from '@/sensor/sensors';
import Orientation from '@/sensor/orientation';
import Motion from '@/sensor/motion';

Vue.use(Vuex);

interface SliderSetting {
  name: string;
  min: number;
  max: number;
  step: number;
  val: number;
}

interface SliderSettings {
  [key: string]: SliderSetting;
}

interface Settings {
  sliders: SliderSettings;
}

interface AppSize {
  width: number;
  height: number;
}

interface RootState {
  sensors: Sensors;
  orientation: Orientation;
  motion: Motion;

  appSize: AppSize;
  settings: Settings;
}

const store: StoreOptions<RootState> = {
  state: {
    sensors: new Sensors(),
    orientation: new Orientation(),
    motion: new Motion(),

    appSize: {
      width: 0,
      height: 0,
    },

    settings: {
      sliders: {
        mx: {name: 'X multiplier', min: -4, max: 4, step: .1, val: -1.5},
        my: {name: 'Y multiplier', min: -4, max: 4, step: .1, val: -1.5},
        mz: {name: 'Z multiplier', min: -4, max: 4, step: .1, val: -1.5},
      },
    },
  },

  mutations: {},
  actions: {},
};

export default new Vuex.Store(store);
