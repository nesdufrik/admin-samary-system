import { storeToRefs } from 'pinia'
import { getCategorias, postCategoria } from '../helpers/helpProductos'
import { useProductosStore } from '../stores/productosStore'

export const useProductos = () => {
    const productosStore = useProductosStore()
    const { categoriasArr, categoriaForm, actionState } =
        storeToRefs(productosStore)

    const listCategorias = async id => {
        productosStore.loadCategorias(await getCategorias(id))
    }

    const newCategoria = async id => {
        actionState.value = true
        productosStore.addCategoria(
            await postCategoria(categoriaForm.value, id)
        )
        categoriaForm.value = {
            name: '',
            etiquetas: [],
        }
        actionState.value = false
    }

    return {
        //! propiedades
        categoriasArr,
        categoriaForm,
        actionState,

        //! metodos
        listCategorias,
        newCategoria,
    }
}
