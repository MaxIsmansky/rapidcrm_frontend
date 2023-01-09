import {createRouter, createWebHistory} from 'vue-router'

import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import PhotoGallery from '../views/PhotoGallery.vue'

let routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/aboutUs',
        name: 'About',
        component: AboutUs
    },
    {
        path: '/photoGallery',
        name: 'PhotoGallery',
        component: PhotoGallery
    },
]

let router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router