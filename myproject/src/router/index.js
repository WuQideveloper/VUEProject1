import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/FirstPage'
import FirstPart from '@/components/FirstPart'
import SecondPart from '@/components/SecondPart'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {
           path: '/',
           name: 'FirstPart',
           component: FirstPart
        },
        {
          path: 'SecondPart',
          name: 'SecondPart',
          component: SecondPart
        }
      ]
    },
    {
      path: '/FirstPage',
      name: 'FirstPage',
      component :FirstPage
    },
    {
      path: '/SecondPage',
      name: 'SecondPage',
      component: SecondPage
    }
  ]
})
