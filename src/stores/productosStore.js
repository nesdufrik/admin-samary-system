import { defineStore } from 'pinia'

export const useProductosStore = defineStore('productos', {
	state: () => {
		return {
			subcatArr: null,
			categoriasArr: [],
			categoriaForm: {},
			productosArr: [],
			productoForm: {},
			pageProducto: {},
			filterCategoria: '',
			filterSubcategoria: '',
			previewUrl: '',
			actionState: false,
			errorApi: {},
		}
	},
	getters: {},
	actions: {
		loadCategorias({ data }) {
			this.categoriasArr = data
		},
		addCategoria({ data, success }) {
			if (!success) {
				this.errorApi.show = true
				this.errorApi.message = data.message
				return
			}
			this.errorApi.show = false
			this.errorApi.message = 'Se agrego ¡Correctamente!'
			this.categoriasArr.push({ ...data })
		},
		deleteCategoria(id) {
			this.categoriasArr = this.categoriasArr.filter((el) => el._id !== id)
		},
		editCategoria(id) {
			this.categoriaForm = JSON.parse(
				JSON.stringify(this.categoriasArr.find((el) => el._id === id))
			)
		},
		updtCategoria({ data, success }) {
			if (!success) {
				this.errorApi.show = true
				this.errorApi.message = data.message
				return
			}
			this.errorApi.show = false
			this.errorApi.message = 'Los datos se actualizaron ¡Correctamente!'
			const indiceEl = this.categoriasArr.findIndex((el) => el._id === data._id)
			this.categoriasArr[indiceEl] = data
		},
		loadProductos({ data }) {
			this.productosArr = data
		},
		addProducto({ data, success }) {
			if (!success) {
				this.errorApi.show = true
				this.errorApi.message = data.message
				return
			}
			this.errorApi.show = false
			this.errorApi.message = 'Se agrego ¡Correctamente!'
			this.productosArr.push({ ...data })
		},
		deleteProducto(id) {
			this.productosArr = this.productosArr.filter((el) => el._id !== id)
		},
		editProducto(id) {
			this.productoForm = JSON.parse(
				JSON.stringify(this.productosArr.find((el) => el._id === id))
			)
			this.previewUrl = this.productoForm.image
		},
		updtProducto({ data, success }) {
			if (!success) {
				this.errorApi.show = true
				this.errorApi.message = data.message
				return
			}
			this.errorApi.show = false
			this.errorApi.message = 'Los datos se actualizaron ¡Correctamente!'
			const indiceEl = this.productosArr.findIndex((el) => el._id === data._id)
			this.productosArr[indiceEl] = data
		},
	},
})
