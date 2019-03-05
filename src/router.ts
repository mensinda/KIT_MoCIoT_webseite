import Vue from 'vue';
import Router from 'vue-router';
import Demo from '@/views/Demo.vue';
import About from '@/views/About.vue';
import SensorData from '@/views/SensorData.vue';
import Settings from '@/views/Settings.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: Demo,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/sensor',
      name: 'sensor',
      component: SensorData,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
  ],
});
