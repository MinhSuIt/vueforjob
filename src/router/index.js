import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

import { isEmpty } from 'lodash'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/login',
      name: '/login',
      component: () => import('../views/LoginView.vue'),
      meta: { requireAuth: false },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/learn-old-version',
      name: '/learn-old-version',
      component: () => import('../views/LearnOldVersionView.vue')
    },
    {
      path: '/requireAuth',
      name: 'require-auth',
      component: () => import('../views/RequireAuthView.vue'),
      meta: { requireAuth: true },
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/ProductView.vue'),
      children: [ //nested route
        {
          path: 'infomation',
          name: 'product-infomation',
          component: () => import('../views/ProductInfoView.vue'),
        },
        {
          path: 'review',
          name: 'product-review',
          component: () => import('../views/ProductReviewView.vue'),
        },
      ],
    },
    {
      path: '/create-with-upload-form-data',
      name: 'create-with-upload-form-data',
      component: () => import('../views/CreateWithUploadView.vue'),
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFoundView.vue') },

  ]
})

router.beforeEach((to) => {
  // phải login mới vào đc những trang require login
  const auth = useAuthStore()
  if (to.meta.requireAuth && isEmpty(auth?.user)) {
    router.replace({ name: 'home', params: {} })
  }
  // nếu đã login thì ko vào đc những trang yêu cầu là chưa login như trang login
  if (to.meta && to.meta.requireAuth === false && !isEmpty(auth?.user)) {
    router.back()
  }
})



export default router
