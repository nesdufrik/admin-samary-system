import { storeToRefs } from 'pinia'
import {
	deleteCategoria,
	deleteProducto,
	getCategorias,
	getProductos,
	postCategoria,
	postProducto,
	putCategoria,
	putProducto,
} from '../helpers/helpProductos'
import { useProductosStore } from '../stores/productosStore'
import { computed } from 'vue'

export const useProductos = () => {
	const productosStore = useProductosStore()

	const {
		subcatArr,
		categoriasArr,
		categoriaForm,
		productosArr,
		productoForm,
		pageProducto,
		filterCategoria,
		filterSubcategoria,
		previewUrl,
		actionState,
		errorApi,
	} = storeToRefs(productosStore)

	// Metodos para Categorias
	const listCategorias = async (id) => {
		productosStore.loadCategorias(await getCategorias(id))
	}

	const newCategoria = async (id) => {
		actionState.value = true
		productosStore.addCategoria(await postCategoria(categoriaForm.value, id))
		actionState.value = false
	}

	const editarCategoria = (id) => {
		productosStore.editCategoria(id)
	}

	const updateCategoria = async (id) => {
		actionState.value = true
		productosStore.updtCategoria(await putCategoria(categoriaForm.value, id))
		actionState.value = false
	}

	const delCategoria = async (id) => {
		actionState.value = true
		await deleteCategoria(id)
		productosStore.deleteCategoria(id)
		actionState.value = false
	}

	// Metodos para Productos
	const listProductos = async (id, page = '1', cat = '', sub = '') => {
		const { success, data } = await getProductos(id, page, cat, sub)
		const { docs, ...options } = data
		pageProducto.value = { ...options }
		productosStore.loadProductos({ success, data: docs })
	}

	const newProducto = async (id) => {
		actionState.value = true
		productosStore.addProducto(await postProducto(productoForm.value, id))
		actionState.value = false
	}

	const editarProducto = (id) => {
		productosStore.editProducto(id)
	}

	const updateProducto = async (id) => {
		actionState.value = true
		productosStore.updtProducto(await putProducto(productoForm.value, id))
		actionState.value = false
	}

	const delProducto = async (id) => {
		actionState.value = true
		await deleteProducto(id)
		productosStore.deleteProducto(id)
		actionState.value = false
	}

	// Metodos globales
	const etiquetasArray = computed(() => {
		if (productoForm.value.categoria) {
			const filter = categoriasArr.value.find(
				(el) => el.name === productoForm.value.categoria
			)
			return filter.etiquetas
		}
		return null
	})

	const clearForm = () => {
		categoriaForm.value = {}
		productoForm.value = {}
		errorApi.value = {}
		previewUrl.value = ''
	}

	const onFileChange = (event) => {
		productoForm.value.image = event.target.files[0]
		previewUrl.value = URL.createObjectURL(productoForm.value.image)
	}

	return {
		//! propiedades
		subcatArr,
		categoriasArr,
		categoriaForm,
		productosArr,
		productoForm,
		pageProducto,
		filterCategoria,
		filterSubcategoria,
		previewUrl,
		actionState,
		errorApi,

		// !Computed
		etiquetasArray,

		//! metodos
		listCategorias,
		newCategoria,
		editarCategoria,
		updateCategoria,
		delCategoria,
		listProductos,
		newProducto,
		editarProducto,
		updateProducto,
		delProducto,
		clearForm,
		onFileChange,
	}
}
