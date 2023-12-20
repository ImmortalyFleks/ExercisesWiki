import { createApp } from 'vue'
import App from '../App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'main',
            component: () => import('../pages/main-page/MainPage.vue')
        },
        {
            path: '/cardio',
            name: 'cardio',
            component: () => import('../pages/cardio-page/Cardio.vue')
        },{
            path: '/powerlifting',
            name: 'powerlifting',
            component: () => import('../pages/powelifting-page/Powerlifting.vue')
        },{
            path: '/strength',
            name: 'strength',
            component: () => import('../pages/strength-page/Strength.vue')
        },{
            path: '/stretching',
            name: 'stretching',
            component: () => import('../pages/stretching-page/Stretching.vue')
        },{
            path: '/plyometrics',
            name: 'plyometrics',
            component: () => import('../pages/plyometrics-page/Plyometrics.vue')
        },{
            path: '/olympicweightlifting',
            name: 'olympicweightlifting',
            component: () => import('../pages/olympicweightlifting-page/OlympicWeightLifting.vue')
        },
    ]
})
export default router

