import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import table from '@/components/table'
import parent from '@/components/parent'
import array from '@/components/array'
import model from '@/components/model'
import suanfa from '@/components/suanfa'
import extend from '@/components/extend'
import sass from '@/components/sass'
import clone from '@/components/clone'
import promise from '@/components/promise'
import vue from '@/components/vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/table",
      name: "table",
      component: table
    },
    {
      path: "/parent",
      name: "parent",
      component: parent
    },
    {
      path: "/suanfa",
      name: "suanfa",
      component: suanfa
    },
    {
      path: "/extend",
      name: "extend",
      component: extend
    },
    {
      path: "/array",
      name: "array",
      component: array
    },
    {
      path: "/model",
      name: "model",
      component: model
    },
    {
      path: "/sass",
      name: "sass",
      component: sass
    },
    {
      path: "/clone",
      name: "clone",
      component: clone
    },
    {
      path: "/promise",
      name: "promise",
      component: promise
    },
    {
      path: "/vue",
      name: "vue",
      component: vue
    },
    {
      path: "/arrow",
      name: "arrow",
      component: () => import(/* webpackChunkName: "arrow" */ "@/components/arrow.vue")
    }
  ]
});
