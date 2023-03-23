import { createRouter, createWebHistory } from 'vue-router'

import pinia from '../stores'
import { useAuthStore } from '../stores/authStore'

import Login from '../pages/Login.vue'
import GeneralView from '../pages/GenearlView.vue'

const routes = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: 'Inicio de Sesión',
        },
        component: Login,
    },
    {
        path: '/',
        name: 'Inicio',
        meta: {
            requiresAuth: true,
            title: 'Gestion de Dependencias',
        },
        component: GeneralView,
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import('../pages/Home.vue'),
            },
            {
                path: '/empresa/:id',
                name: 'Empresa',
                component: () => import('../pages/Empresa.vue'),
            },
            {
                path: '/sucursal/:id',
                name: 'Sucursal',
                component: () => import('../pages/Sucursal.vue'),
                children: [
                    {
                        path: '/sucursal/:id/dashboard',
                        name: 'Stats de Sucursal',
                        component: () => import('../pages/Dashboard.vue'),
                    },
                    {
                        path: '/sucursal/:id/users',
                        name: 'Gestion de Usuarios',
                        component: () => import('../pages/Usuarios.vue'),
                    },
                    {
                        path: '/sucursal/:id/productos',
                        name: 'Administracion de los Productos',
                        component: () => import('../pages/Productos.vue'),
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
        next({ path: '/home' })
        return
    }

    // Verificar si la ruta requiere autenticación
    if (to.matched.some(record => record.meta.requiresAuth)) {
        const token = localStorage.getItem('token')
        const store = useAuthStore(pinia)

        if (!token) {
            next('/login')
            return
        }
        if (!store.islogIn) {
            const verify = await store.verifyJwt()
            store.appLoading = false

            if (!verify.success) {
                store.logInData.show = true
                store.logInData.message = verify.data.message
                next('/login')
                return
            }
            store.islogIn = true
        }
    }
    next()
})

export default router
