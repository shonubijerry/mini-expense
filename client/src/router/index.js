import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/Home';
import Expenses from '@/components/Expenses';
import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';
import Logout from '@/components/Logout';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld,
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/login',
      name: 'SignIn',
      component: SignIn,
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
    },
    {
      path: '/expenses',
      name: 'Expenses',
      component: Expenses,
    },
  ],
});
