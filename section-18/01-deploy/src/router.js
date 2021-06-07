import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from './pages/coaches/CoachesList';

const CoachDetail = () => import('./pages/coaches/CoachDetail');
const CoachRegistration = () => import('./pages/coaches/CoachRegistration');
const ContactCoach = () => import('./pages/requests/ContactCoach');
const RequestsReceived = () => import('./pages/requests/RequestsReceived');
const NotFound = () => import('./pages/NotFound');
const UserAuth = () => import('./pages/auth/UserAuth');

import store from './store';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      props: true,
      component: CoachDetail,
      children: [
        { path: 'contact', component: ContactCoach }
      ]
    },
    { path: '/register', component: CoachRegistration, meta: { requiresAuth: true } },
    { path: '/requests', component: RequestsReceived, meta: { requiresAuth: true } },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

router.beforeEach((to, _, next) => {
  if(to.meta.requiresAuth && !store.getters.isAuthenticated) {
    return next('/auth');
  }
  if(to.meta.requiresUnauth && store.getters.isAuthenticated) {
    return next('coaches');
  }
  return next();
});

export default router;
