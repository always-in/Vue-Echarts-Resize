import Vue from 'vue'
import Router from 'vue-router'
import Input from '../components/input.vue'
import NewPage from '../components/new.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Input',
      component: Input
    },
    {
      path: '/input',
      name: 'Input',
      component: Input
    },
    {
      path: '/new',
      name: 'NewPage',
      component: NewPage
    }
  ]
})
