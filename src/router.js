import Vue from 'vue'
import { createRouter, VueRouter } from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('@/components/Installer.vue')
    },
    {
      path: '/install-type-step',
      component: () => import('@/components/InstallTypeStep.vue')
    },
    {
      path: '/connect-step',
      component: () => import('@/components/ConnectStep.vue')
    },
    {
      path: '/unlock-step',
      component: () => import('@/components/UnlockStep.vue')
    },
    {
      path: '/download-step',
      component: () => import('@/components/DownloadStep.vue')
    },
    {
      path: '/install-step',
      component: () => import('@/components/InstallStep.vue')
    },
    {
      path: '/finish-step',
      component: () => import('@/components/FinishStep.vue')
    },
    {
      path: '/connect-banner',
      component: () => import('@/components/ConnectBanner.vue')
    }
  ]
})

export default function() {
  return createRouter({
    router,
  })
}
