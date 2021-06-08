import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Editpost from '../views/Edit-post.vue'
import Viewpost from '../views/View-post.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      hideNavBar: true,
    }
  },
  {
    path: '/edit-post/:id',
    name: 'Editpost',
    component: Editpost
  },
  {
    path: '/view-post/:id',
    name: 'Viewpost',
    component: Viewpost
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

const userId = localStorage.getItem("userId")
let isAuthenticated = false;
if(userId != null){
 isAuthenticated=true;
}
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})

export default router
