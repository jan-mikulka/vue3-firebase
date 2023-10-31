import { RouteRecordRaw } from 'vue-router';
import { Pages } from './pages';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: Pages.indexPage,
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'species-create',
        name: Pages.speciesCreate,
        component: () => import('pages/SpeciesCreate/CreateForm.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
