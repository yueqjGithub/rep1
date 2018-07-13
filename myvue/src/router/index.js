import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Page from '@/components/page'
import Mtuipage from '@/components/mtuipage/mtuipage'
import Mtuison from '@/components/mtuipage/mtuison.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page',
      component: Page
    },
    {
      path: '/mtui',
      name: 'mtui',
      component: Mtuipage,
      children: [
        {
          path: '/son',
          name: 'indicator',
          components: {
            a: Mtuison
          }
        }
      ]
    }
  ]
})
