export default [
    {
      path: '/',
      redirect: { name: 'home' },
      component: () => import('@/views/QuizCreatePage.vue'),
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('@/views/QuizListPage.vue'),
    },
    {
      path: '/:notFound(.*)',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ];