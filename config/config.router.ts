
export const pageRouter = [
  {
    path: '/company1',
    component: './company1/layouts/frame',
    routes: [
      { path: '/company1', component: './common/page.index' },
      { path: '/company1/aa', component: './common/page.aa' },
    ],
  },
  {
    path: '/company2',
    component: './company2/layouts/frame',
    routes: [
      { path: '/company2', component: './common/page.index' },
      { path: '/company2/aa', component: './common/page.aa' },
    ],
  },
  {
    component: './page.404',
  },
];
