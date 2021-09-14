import { createRouter, createWebHistory } from 'vue-router'


import Home from '/src/components/Home.vue'
import Albums from '/src/components/Albums.vue'
import Artists from '/src/components/Artists.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/albums',
        name: 'Albums',
        component: Albums
    },
    {
        path: '/artists',
        name: 'Artists',
        component: Artists
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router