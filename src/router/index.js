/* eslint-disable no-undef */
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
				path: 'dashboard',
				name: 'Stats de Sucursal',
				component: () => import('../pages/Dashboard.vue'),
			},
			{
				path: 'users',
				name: 'Gestion de Usuarios',
				component: () => import('../pages/Usuarios.vue'),
			},
			{
				path: 'productos',
				name: 'Administracion de los Productos',
				component: () => import('../pages/Productos.vue'),
			},
			{
				path: 'reportes',
				name: 'Reporte de Beneficios',
				component: () => import('../pages/Reportes.vue'),
			},
			{
				path: 'caja/:id',
				name: 'Caja abierta',
				component: () => import('../pages/Caja.vue'),
				beforeEnter: (to, from, next) => {
					const id = to.params.id
					const isValidMongoId = /^[0-9a-fA-F]{24}$/.test(id)
					if (!isValidMongoId) return next('/404')
					next()
				},
			},
			{
				path: ':(.*)',
				component: () => import('../pages/VoidView.vue'),
			},
		],
	},
	{
		path: '/:catchAll(.*)',
		name: 'NotFound',
		component: () => import('../pages/Page404.vue'),
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

	// Verificar si la ruta requiere autenticación
	if (to.matched.some((record) => record.meta.requiresAuth)) {
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
