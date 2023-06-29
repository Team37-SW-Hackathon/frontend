export default [
    {
      path: '/',
      redirect: { name: 'create' },
      component: () => import('@/views/HomePage.vue'),
    },
    {
        path: '/create',
        name: 'create',
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