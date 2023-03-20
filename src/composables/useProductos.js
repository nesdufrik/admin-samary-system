import { storeToRefs } from 'pinia'
import {
    deleteCategoria,
    getCategorias,
    postCategoria,
    putCategoria,
} from '../helpers/helpProductos'
import { useProductosStore } from '../stores/productosStore'

export const useProductos = () => {
    const productosStore = useProductosStore()
    const { categoriasArr, categoriaForm, categoriaEdit, actionState } =
        storeToRefs(productosStore)

    const listCategorias = async id => {
        productosStore.loadCategorias(await getCategorias(id))
    }

    const newCategoria = async id => {
        actionState.value = true
        productosStore.addCategoria(
            await postCategoria(categoriaForm.value, id)
        )
        categoriaForm.value = []
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
        await deleteCategoria(id)
        productosStore.deleteCategoria(id)
    }

    return {
        //! propiedades
        categoriasArr,
        categoriaForm,
        categoriaEdit,
        actionState,

        //! metodos
        listCategorias,
        newCategoria,
        editarCategoria,
        updateCategoria,
        delCategoria,
    }
}
