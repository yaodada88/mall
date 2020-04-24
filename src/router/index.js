import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/Home/Home');
const Category = () => import('views/Category/Category');
const Cart = () => import('views/Cart/Cart');
const ProFile = () => import('views/ProFile/ProFile');
const Detail = () => import('views/Detail/Detail');

Vue.use(VueRouter)

  const routes = [
  {
    path:'',
    redirect:'home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:ProFile
  },
  {
    path:'/detail/:iid',
    component:Detail
  }
  
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
