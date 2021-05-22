import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersList from './pages/UsersList.vue';
import UsersFooter from './pages/UsersFooter.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: {
        default: TeamsList,
        footer: TeamsFooter
      },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true
        }
      ]
    },
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter
      },
      beforeEnter(to, from, next) {
        console.log('/users beforeEnter', to, from);
        next();
      }
    },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, __, savedPosition) {
    return savedPosition ?? { left: 0, top: 0 };
  }
});

router.beforeEach((to, from, next) => {
  console.log('Global beforeEach', to, from);
  if(to.meta.needsAuth) {
    console.log('Needs auth');
  }
  return next();
  // next({ name: 'team-members', params: { teamId: 't1' } });
});
router.afterEach((to,from) => {
  // Send analytics data
  console.log('Global afterEach', to, from);
});

export default router;
