import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/views/home'
const Home = () => import('@/views/home')
import Dashboard from '@/views/dashboard'
import Document from '@/views/document'
import Assignment from '@/views/assignment'
import Assignment_list from '@/views/assignment_list'
import Customer from '@/views/customer'
import Supplier from '@/views/supplier'
import Stocking from '@/views/stocking'
import PhysicalCount from '@/views/physicalcount'
import Adjust from '@/views/adjust'
import Transfer from '@/views/transfer'
import CountList from '@/views/count_list'
// import Delivery from '@/views/Delivery'
const Delivery = () => import('@/views/Delivery')

import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        roles: ['staff', 'admin']
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/document',
      name: 'Document',
      component: Document
    },
    {
      path: '/assignment/staff',
      name: 'Staff Assignment',
      component: Assignment,
      meta: {
        roles: ['admin']
      }
    },
    {
      path: '/assignment/manager',
      name: 'Manager Assignment',
      component: Assignment_list,
      meta: {
        roles: ['admin']
      }
    },
    {
      path: '/customer',
      name: 'Customer',
      component: Customer
    },
    {
      path: '/supplier',
      name: 'Supplier',
      component: Supplier
    },
    {
      path: '/stocking',
      name: 'Stocking',
      component: Stocking
    },
    {
      path: '/physicalcount',
      name: 'Physical Count',
      component: PhysicalCount
    },
    {
      path: '/adjust',
      name: 'Adjust',
      component: Adjust
    },
    {
      path: '/transfer',
      name: 'Transfer',
      component: Transfer
    },
    {
      path: '/delivery',
      name: 'Delivery',
      component: Delivery
    },
    {
      path: '/countlist',
      name: 'Count List',
      component: CountList
    }
  ]
})

router.beforeEach((to, from, next) => {
  const me = 'admin'
  console.log(store.state.test)
  if(!to.meta.roles || (to.meta.roles && to.meta.roles.includes(me))) {
    next()
  } else {
    next(false)
  }
})

export default router