import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import HomePOS from '../pages/pos/HomePOS.vue'
import HomeAdmin from '../pages/admin/HomeAdmin.vue'

const routes = [
    {
        path: '/',
        name: 'Login',
        meta: {
            title: 'Inicio de Sesión',
        },
        component: Login,
    },
    {
        path: '/pos',
        name: 'PuntoDeVenta',
        meta: {
            requiresAuth: true,
            title: 'Punto de Venta - Sucursal',
        },
        component: HomePOS,
        children: [
            {
                path: '/pos/dashboard',
                name: 'Dashboard POS',
                component: () => import('../pages/pos/DashboardPOS.vue'),
            },
        ],
    },
    {
        path: '/admin',
        name: 'Admininstrador',
        meta: {
            requiresAuth: true,
            title: 'Administración de Cuenta',
        },
        component: HomeAdmin,
        children: [
            {
                path: '/admin/dashboard',
                name: 'Dashboard Empresa',
                component: () => import('../pages/admin/Dashboard.vue'),
            },
            {
                path: '/admin/empresa',
                name: 'Empresa',
                component: () => import('../pages/admin/Empresa.vue'),
            },
            {
                path: '/admin/sucursal',
                name: 'Sucursal',
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    redirectTo(to, from, next)
    handleTitle(to, from, next)
})

//handlers
function redirectTo(to, from, next) {
    if (to.path === '/admin') next({ path: '/admin/dashboard' })
    if (to.path === '/pos') next({ path: '/pos/dashboard' })
}

function handleTitle(to, from, next) {
    if (to.meta.title) document.title = to.meta.title
    next()
}

export default router
