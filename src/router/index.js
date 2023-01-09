import {createRouter, createWebHistory} from 'vue-router'

import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import AboutUs from '../views/AboutUs.vue'
import PhotoGallery from '../views/PhotoGallery.vue'
import Entrance from '../views/Entrance.vue'
import Order from '../views/Order.vue'

import Registration from '../views/Registration.vue'

let routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Menu',
        name: 'Menu',
        component: Menu
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
    {
        path: '/entrance',
        name: 'Entrance',
        component: Entrance
    },
    {
        path: '/order',
        name: 'Order',
        component: Order
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Registration
    },
]

let router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router