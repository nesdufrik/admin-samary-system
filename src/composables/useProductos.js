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
		categoriasArr,
		subcatArr,
		categoriaForm,
		categoriaEdit,
		productosArr,
		productoForm,
		pageProducto,
		filterCategoria,
		filterSubcategoria,
		previewUrl,
		actionState,
	} = storeToRefs(productosStore)

	// Metodos para Categorias
	const listCategorias = async (id) => {
		productosStore.loadCategorias(await getCategorias(id))
	}

	const newCategoria = async (id) => {
		actionState.value = true
		productosStore.addCategoria(await postCategoria(categoriaForm.value, id))
		categoriaForm.value = {}
		previewUrl.value = ''
		actionState.value = false
	}

	const editarCategoria = (id) => {
		productosStore.editCategoria(id)
	}

	const updateCategoria = async (id) => {
		actionState.value = true
		productosStore.updtCategoria(await putCategoria(categoriaEdit.value, id))
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
		const productos = await getProductos(id, page, cat, sub)
		const { docs, ...options } = productos
		pageProducto.value = { ...options }
		productosStore.loadProductos(productos.docs)
	}

	const newProducto = async (id) => {
		try {
			actionState.value = true
			productosStore.addProducto(await postProducto(productoForm.value, id))
			productoForm.value = {}
			actionState.value = false
		} catch (error) {
			console.log(error)
		}
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
			const filter = categoriasArr.value.filter(
				(el) => el.name === productoForm.value.categoria
			)
			return filter[0].etiquetas
		}
		return null
	})

	const clearForm = () => {
		productoForm.value = {}
		previewUrl.value = ''
	}

	const onFileChange = (event) => {
		productoForm.value.image = event.target.files[0]
		previewUrl.value = URL.createObjectURL(productoForm.value.image)
	}

	return {
		//! propiedades
		categoriasArr,
		subcatArr,
		categoriaForm,
		categoriaEdit,
		productosArr,
		productoForm,
		pageProducto,
		filterCategoria,
		filterSubcategoria,
		previewUrl,
		actionState,

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
