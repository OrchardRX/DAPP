import { createRouter,createWebHashHistory  } from "vue-router";


const routes = [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/Home.vue')
        }
]
const router = new createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router