import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/auth/LoginView.vue'
import store from '@/store'
import {Buffer} from 'buffer'
import App from '../App.vue'

const routes = [
 {
   path: '/admin',
   name: App,
   component: App,
   children: [
    {
      path: '',
      name: 'home',
      component: HomeView,
      meta: {requireAuth: true}
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
      meta: {requireAuth: true}
    },
   ]
 },
 {
  path: '/',
  redirect: '/login'
},
 {
  path: '/login',
  name: 'login',
  component: LoginView,
  meta: {requireAuth: false}
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// guard o middleward
router.beforeEach((to, from, next) =>{
  let auth = localStorage.getItem('auth');
  let token = false;
  if(auth){
    let authJson = JSON.parse(Buffer.from(auth, 'base64').toString('ascii'));
    token = authJson.access_token;
  }
  

  if(to.meta.requireAuth){
    if(token){
      next()
    }
    next('login');
  }
  next();
});

export default router
