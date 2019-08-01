import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('../views/mint-pull-up')
    },
    {
      path: '/real-scroll-view',
      component: () => import('../views/real-scroll-view')
    },
    {
      path: '/accordion',
      component: () => import('../views/accordion')
    }
  ]
});
