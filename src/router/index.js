import { createRouter, createWebHistory } from 'vue-router'

import pinia from '../stores'
import { useAuthStore } from '../stores/authStore'

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
                path: '/admin/empresa/:id',
                name: 'Empresa',
                component: () => import('../pages/admin/Empresa.vue'),
            },
            {
                path: '/admin/sucursal/:id',
                name: 'Sucursal',
                component: () => import('../pages/admin/Sucursal.vue'),
                children: [
                    {
                        path: '/admin/sucursal/:id/stats',
                        name: 'Stats de Sucursal',
                        component: () => import('../pages/admin/Stats.vue'),
                    },
                    {
                        path: '/admin/sucursal/:id/users',
                        name: 'Gestion de Usuarios',
                        component: () => import('../pages/admin/Usuarios.vue'),
                    },
                    {
                        path: '/admin/sucursal/:id/productos',
                        name: 'Administracion de los Productos',
                        component: () => import('../pages/admin/Productos.vue'),
                    },
                ],
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to, from, next) => {
    // Cambio de titulo en el documento
    if (to.meta.title) {
        document.title = to.meta.title
    }

    // Redireccionamiento de rutas especificas
    if (to.path === '/') {
        const store = useAuthStore(pinia)
        store.cargando = true
        next()
        return
    }
    if (to.path === '/admin') {
        next({ path: '/admin/dashboard' })
        return
    }
    if (to.path === '/pos') {
        next({ path: '/pos/dashboard' })
        return
    }

    // Verificar si la ruta requiere autenticación
    if (to.matched.some(record => record.meta.requiresAuth)) {
        const token = localStorage.getItem('token')
        const store = useAuthStore(pinia)

        if (!token) {
            next('/')
            return
        }
        if (!store.islogIn) {
            const verify = await store.verifyJwt()
            if (verify === undefined) {
                next('/')
                return
            }
            if (!verify.success) {
                next('/')
                return
            }
            store.islogIn = true
        }
    }

    next()
})

export default router
