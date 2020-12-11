import Vue from 'vue'
import Router from 'vue-router'
import Ym1 from '@/components/ym1'
import Ym2 from '@/components/ym2'
import Ym3 from '@/components/ym3'
import Ym4 from '@/components/ym4'
import Ym5 from '@/components/ym5'
import Ym6 from '@/components/ym6'
import Ym7 from '@/components/ym7'
import Ym8 from '@/components/ym8'
import Ym9 from '@/components/ym9'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Ym1,
      name:'ym1'
    },
    {
      path:'/ym1',
      component:Ym1,
      name:'ym1'
    },
    {
      path:'/ym2',
      component:Ym2,
      name:'ym2'
    },
    {
      path:'/ym3',
      component:Ym3,
      name:'ym3'
    },
    {
      path:'/ym4',
      component:Ym4,
      name:'ym4'
    },
    {
      path:'/ym5',
      component:Ym5,
      name:'ym5'
    },
    {
      path:'/ym6',
      component:Ym6,
      name:'ym6'
    },
    {
      path:'/ym7',
      component:Ym7,
      name:'ym7'
    },
    {
      path:'/ym8',
      component:Ym8,
      name:'ym8'
    },
    {
      path:'/ym9',
      component:Ym9,
      name:'ym9'
    }
  ]
})
