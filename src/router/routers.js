/**
 * 路由为动态添加
 * 如需添加路由请去mock文件夹下localMenus去添加
 */
import Main from '@/views/main/Index.vue'
export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login/Index.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/home/Index.vue')
      }
    ]
  }
]
