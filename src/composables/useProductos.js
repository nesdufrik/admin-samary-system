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

export const useProductos = () => {
    const productosStore = useProductosStore()

    const {
        categoriasArr,
        categoriaForm,
        categoriaEdit,
        productosArr,
        productoForm,
        actionState,
    } = storeToRefs(productosStore)

    //Metodos para Categorias
    const listCategorias = async id => {
        productosStore.loadCategorias(await getCategorias(id))
    }

    const newCategoria = async id => {
        actionState.value = true
        productosStore.addCategoria(
            await postCategoria(categoriaForm.value, id)
        )
        categoriaForm.value = {}
        actionState.value = false
    }

    const editarCategoria = id => {
        productosStore.editCategoria(id)
    }

    const updateCategoria = async id => {
        actionState.value = true
        productosStore.updtCategoria(
            await putCategoria(categoriaEdit.value, id)
        )
        actionState.value = false
    }

    const delCategoria = async id => {
        actionState.value = true
        await deleteCategoria(id)
        productosStore.deleteCategoria(id)
        actionState.value = false
    }

    //Metodos para Productos
    const listProductos = async id => {
        productosStore.loadProductos(await getProductos(id))
    }

    const newProducto = async id => {
        actionState.value = true
        productosStore.addProducto(await postProducto(productoForm.value, id))
        productoForm.value = {}
        actionState.value = false
    }

    const editarProducto = id => {
        productosStore.editProducto(id)
    }

    const updateProducto = async id => {
        actionState.value = true
        productosStore.updtProducto(await putProducto(productoForm.value, id))
        actionState.value = false
    }

    const delProducto = async id => {
        actionState.value = true
        await deleteProducto(id)
        productosStore.deleteProducto(id)
        actionState.value = false
    }

    //Metodos globales
    const clearForm = () => {
        productoForm.value = {}
    }

    return {
        //! propiedades
        categoriasArr,
        categoriaForm,
        categoriaEdit,
        productosArr,
        productoForm,
        actionState,

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
    }
}
