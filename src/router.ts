import Vue from 'vue';
import Router from 'vue-router';
import Demo from './views/Demo.vue';

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
      component: () => import(/* webpackChunkName: "etc" */ './views/About.vue'),
    },
    {
      path: '/sensor',
      name: 'sensor',
      component: () => import(/* webpackChunkName: "etc" */ './views/SensorData.vue'),
    },
  ],
});
