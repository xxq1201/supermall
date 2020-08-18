import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../components/content/Home/home.vue')
const Category = () => import('../components/content/Category/category.vue')
const Shopcart = () => import('../components/content/Shopcart/shopcart.vue')
const Profile = () => import('../components/content/Profile/profile.vue')

Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
       
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/shopcart',
        component: Shopcart
    },
    {
        path: '/profile',
        component: Profile
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
