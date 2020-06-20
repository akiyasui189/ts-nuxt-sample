import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _45f3d3c4 = () => interopDefault(import('../pages/hello/index.vue' /* webpackChunkName: "pages/hello/index" */))
const _29e7c36e = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _7d2bc75b = () => interopDefault(import('../pages/hello/_word.vue' /* webpackChunkName: "pages/hello/_word" */))
const _eefebbfe = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/hello",
    component: _45f3d3c4,
    name: "hello"
  }, {
    path: "/inspire",
    component: _29e7c36e,
    name: "inspire"
  }, {
    path: "/hello/:word",
    component: _7d2bc75b,
    name: "hello-word"
  }, {
    path: "/",
    component: _eefebbfe,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
