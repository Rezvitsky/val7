import auth from '../auth'
import { createRouter, createWebHashHistory } from 'vue-router'

import defaultLayout from '../layouts/side-nav-outer-toolbar'
import simpleLayout from '../layouts/single-card'

import Home from '../views/home'
import Profile from '../views/profile'
import Tasks from '../views/tasks'
import Receiving from '../views/receiving'
import CreateOrder from '../views/create-order'
import OpenOrders from '../views/open-orders'
import Inventory from '../views/inventory'
import Customers from '../views/customers'
import Materials from '../views/materials'
import PricingTiers from '../views/pricing-tiers'
import Settings from '../views/settings'
import Scheduler from '../views/scheduler'
import Barcode from '../views/barcode'

function loadView(view) {
  return () => import (/* webpackChunkName: "login" */ `../views/${view}.vue`)
}

const routes = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home'
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/recovery',
    redirect: '/home'
  },
  {
    path: '/login-form',
    name: 'login-form',
    meta: {
      requiresAuth: false,
      layout: simpleLayout,
      title: 'Sign In'
    },
    component: loadView('login-form')
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    meta: {
      requiresAuth: false,
      layout: simpleLayout,
      title: 'Reset Password',
      description: 'Please enter the email address that you used to register, and we will send you a link to reset your password via Email.'
    },
    component: loadView('reset-password-form')
  },
  {
    path: '/create-account',
    name: 'create-account',
    meta: {
      requiresAuth: false,
      layout: simpleLayout,
      title: 'Sign Up'
    },
    component: loadView('create-account-form'),
  },
  {
    path: '/change-password/:recoveryCode',
    name: 'change-password',
    meta: {
      requiresAuth: false,
      layout: simpleLayout,
      title: 'Change Password'
    },
    component: loadView('change-password-form')
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      requiresAuth: true,
      layout: defaultLayout
    },
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      requiresAuth: true,
      layout: defaultLayout
    },
    component: Profile
  },
  {
    path: '/tasks',
    name: 'tasks',
    meta: { 
      requiresAuth: true,
      layout: defaultLayout
    },
    component: Tasks
  },
  {
    path: '/receiving',
    name: 'receiving',
    meta: { 
      requiresAuth: true,
      layout: defaultLayout
    },
    component: Receiving
  },
  {
    path: '/create-order',
    name: 'create-order',
    meta: { 
      requiresAuth: true,
      layout: defaultLayout
    },
    component: CreateOrder
  },
  {
    path: '/open-orders',
    name: 'open-orders',
    meta: { 
      requiresAuth: true,
      layout: defaultLayout
    },
    component: OpenOrders
  },
  {
    path: '/inventory',
    name: 'inventory',
    meta: { 
      requiresAuth: true,
      layout: defaultLayout
    },
    component: Inventory
  },
  {
    path: '/customers',
    name: 'customers',
    meta: { 
      requiresAuth: true,
      layout: defaultLayout
    },
    component: Customers
  },
  {
    path: '/materials',
    name: 'materials',
    meta: { 
      requiresAuth: true,
      layout: defaultLayout
    },
    component: Materials
  },
  {
    path: '/pricing-tiers',
    name: 'pricing-tuers',
    meta: { 
      requiresAuth: true,
      layout: defaultLayout
    },
    component: PricingTiers
  },
  {
    path: '/settings',
    name: 'settings',
    meta: { 
      requiresAuth: true,
      layout: defaultLayout
    },
    component: Settings
  },
  {
    path: '/scheduler',
    name: 'scheduler',
    meta: { 
      requiresAuth: true,
      layout: defaultLayout
    },
    component: Scheduler
  },
  {
    path: '/barcode',
    name: 'barcode',
    meta: { 
      requiresAuth: true,
      layout: defaultLayout
    },
    component: Barcode
  },
]

const router = new createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {

  if (to.name === 'login-form' && auth.loggedIn()) {
    next({ name: 'home' })
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.loggedIn()) {
      next({
        name: 'login-form',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
