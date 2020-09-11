import Vue from 'vue'
import VueRouter from 'vue-router'
// import { from } from 'core-js/fn/array'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: 'home/sjfx',
        component: () => import('../components/home/sjfx.vue')
      },
      {
        path: 'home/aqdp',
        component: () => import('../components/home/aqdp.vue')
      },
      {
        path: 'home/kscx',
        component: () => import('../components/home/kscx.vue')
      },


      {
        path: 'assetManage/zcqd',
        component: () => import('../components/assetManage/zcqd.vue')
      },
      {
        path: 'assetManage/zctj',
        component: () => import('../components/assetManage/zctj.vue')
      },
      {
        path: 'assetManage/ipwh',
        component: () => import('../components/assetManage/ipwh.vue')
      },


      {
        path: 'riskManage/ldqd',
        component: () => import('../components/riskManage/ldqd.vue')
      },
      {
        path: 'riskManage/ldtj',
        component: () => import('../components/riskManage/ldtj.vue')
      },



      {
        path: 'intelMonitor/sdsm',
        component: () => import('../components/intelMonitor/sdsm.vue')
      },
      {
        path: 'intelMonitor/zcjc',
        component: () => import('../components/intelMonitor/zcjc.vue')
      },
      {
        path: 'intelMonitor/fxjc',
        component: () => import('../components/intelMonitor/fxjc.vue')
      },
      {
        path: 'intelMonitor/bmd',
        component: () => import('../components/intelMonitor/bmd.vue')
      },


      {
        path: 'statisticsReport/zcmx',
        component: () => import('../components/statisticsReport/zcmx.vue')
      },
      {
        path: 'statisticsReport/zcmx',
        component: () => import('../components/statisticsReport/zcmx.vue')
      },


      {
        path: 'myTask/zchj',
        component: () => import('../components/myTask/zchj.vue')
      },
      {
        path: 'myTask/fxcz',
        component: () => import('../components/myTask/fxcz.vue')
      },



      {
        path: 'sysConfig/yhgl',
        component: () => import('../components/sysConfig/yhgl.vue')
      },
      {
        path: 'sysConfig/zzgl',
        component: () => import('../components/sysConfig/zzgl.vue')
      },
      {
        path: 'sysConfig/qxfz',
        component: () => import('../components/sysConfig/qxfz.vue')
      },
      {
        path: 'sysConfig/rzsj',
        component: () => import('../components/sysConfig/rzsj.vue')
      },



    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
]

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (sessionStorage.getItem('isLogin')) {
    next()
  } else {
    if (to.path == '/login') {
      next()
    } else {
      next('/login')
    }
  }
  if (to.path == '/') {
    next('/home/sjfx')
  }
})

export default router