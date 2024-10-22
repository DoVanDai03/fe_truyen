import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    // {
    //     path : '/',
    //     component: ()=>import('../layout/wrapper/index.vue')
    // },
    {
        path : '/',
        component: ()=>import('../components/Client/index.vue'),
        meta: { layout: 'client' }
    },
    {
        path : '/truyen-hot',
        component: ()=>import('../components/Client/TruyenHot.vue'),
         meta: { layout: 'client' }
    },
    {
        path : '/theo-doi',
        component: ()=>import('../components/Client/TheoDoi.vue'),
         meta: { layout: 'client' }
    },
    {
        path : '/lich-su',
        component: ()=>import('../components/Client/LichSu.vue'),
         meta: { layout: 'client' }
    },
    {
        path : '/the-loai',
        component: ()=>import('../components/Client/TheLoai.vue'),
         meta: { layout: 'client' }
    },
    {
        path : '/xep-hang',
        component: ()=>import('../components/Client/XepHang.vue'),
         meta: { layout: 'client' }
    },
    {
        path : '/truyen-doc/:slug',
        component: ()=>import('../components/Client/TruyenDoc.vue'),
         meta: { layout: 'client' },
         props : true,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router