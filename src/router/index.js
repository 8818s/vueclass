import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../components/homePage/homePage.vue'
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/homePage' },
        { path: '/homePage', name: 'homePage', component: homePage }
    ]
})
export default router