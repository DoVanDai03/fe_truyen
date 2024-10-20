import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    // {
    //     path : '/',
    //     component: ()=>import('../layout/wrapper/index.vue')
    // },
    {
        path : '/',
        component: ()=>import('../components/Client/index.vue')
    },
    {
        path : '/truyen-hot',
        component: ()=>import('../components/Client/TruyenHot.vue')
    },
    {
        path : '/theo-doi',
        component: ()=>import('../components/Client/TheoDoi.vue')
    },
    {
        path : '/lich-su',
        component: ()=>import('../components/Client/LichSu.vue')
    },
    {
        path : '/the-loai',
        component: ()=>import('../components/Client/TheLoai.vue')
    },
    {
        path : '/xep-hang',
        component: ()=>import('../components/Client/XepHang.vue')
    },
    {
        path : '/truyen-doc',
        component: ()=>import('../components/Client/TruyenDoc.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router